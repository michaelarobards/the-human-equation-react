import events from "./utils/events.json";
import getNextSessions from "./utils/getNextSessions.js";
import goodnessOfFit from "./utils/goodnessOfFit.js";
import { analyzeIntake } from "./utils/analyzeIntake.js";
import { sendEmail, buildWelcomeEmail, buildTherapistBriefing } from "./utils/sendEmail.js";

export async function onRequestPost({ request, env }) {
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

        if (env.HQ_DB) {
            await env.HQ_DB.prepare(
                `INSERT INTO registrations (name,email,groupName,groupTime,reason,analysis,gof,nextSessions,ts)
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
                )
                .run();
        }

        const welcome = buildWelcomeEmail(intake, analysis, intake.nextSessions);
        await sendEmail({ to: intake.email, ...welcome });

        const briefing = buildTherapistBriefing(intake, analysis, gofScore);
        await sendEmail({
            to: "michaelarobards@gmail.com",
            ...briefing
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
