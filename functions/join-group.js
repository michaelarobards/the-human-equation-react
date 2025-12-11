import events from "./utils/events.js";
import getNextSessions from "./utils/getNextSessions.js";
import goodnessOfFit from "./utils/goodnessOfFit.js";
import { analyzeIntake } from "./utils/analyzeIntake.js";
import { sendEmail, buildWelcomeEmail, buildTherapistBriefing } from "./utils/sendEmail.js";

/**
 * Cloudflare Pages Functions Entry Point
 * Guarantees POST routing and proper 405 for other methods
 */
export const onRequest = async (context) => {
    if (context.request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    return handlePost(context);
};

async function handlePost({ request, env }) {
    try {
        const body = await request.json();

        const intake = {
            name: body.name,
            email: body.email,
            phone: body.phone,
            reason: body.reason,
            groupName: body.groupName,
            groupTime: body.groupTime,
            nextSessions: getNextSessions(body.groupTime, 4)
        };

        const analysis = await analyzeIntake(intake);
        const gofScore = goodnessOfFit(intake);

        // Store in D1
        if (env.HQ_DB) {
            await env.HQ_DB.prepare(
                `INSERT INTO registrations 
          (name,email,groupName,groupTime,reason,analysis,gof,nextSessions,ts)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
            )
                .bind(
                    intake.name,
                    intake.email,
                    intake.groupName,
                    intake.groupTime,
                    intake.reason,
                    JSON.stringify(analysis),
                    gofScore,
                    JSON.stringify(intake.nextSessions)
                ).run();
        }

        // Send user email
        await sendEmail({
            to: intake.email,
            ...buildWelcomeEmail(intake, analysis, intake.nextSessions)
        });

        // Send therapist briefing
        await sendEmail({
            to: "michaelarobards@gmail.com",
            ...buildTherapistBriefing(intake, analysis, gofScore)
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
