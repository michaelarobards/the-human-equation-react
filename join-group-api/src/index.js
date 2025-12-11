import events from "./events.json";
import getNextSessions from "./getNextSessions.js";
import goodnessOfFit from "./goodnessOfFit.js";
import { analyzeIntake } from "./analyzeIntake.js";
import {
	sendEmail,
	buildWelcomeEmail,
	buildTherapistBriefing
} from "./sendEmail.js";

function corsHeaders() {
	return {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type"
	};
}

export default {
	async fetch(request, env, ctx) {

		// CORS preflight
		if (request.method === "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: corsHeaders(),
			});
		}

		// Only POST is allowed
		if (request.method !== "POST") {
			return new Response("Method Not Allowed", {
				status: 405,
				headers: corsHeaders(),
			});
		}

		try {
			const body = await request.json();

			const intake = {
				name: body.name,
				email: body.email,
				phone: body.phone,
				reason: body.reason,
				groupName: body.groupName,
				groupTime: body.groupTime,
				nextSessions: getNextSessions(body.groupTime, 4),
			};

			const analysis = await analyzeIntake(intake);
			const gofScore = goodnessOfFit(intake);

			// Save to D1
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
					)
					.run();
			}

			// Send emails
			await sendEmail({
				to: intake.email,
				...buildWelcomeEmail(intake, analysis, intake.nextSessions),
			});

			await sendEmail({
				to: "michaelarobards@gmail.com",
				...buildTherapistBriefing(intake, analysis, gofScore),
			});

			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: {
					"Content-Type": "application/json",
					...corsHeaders(),
				},
			});

		} catch (err) {
			return new Response(JSON.stringify({ error: err.message }), {
				status: 500,
				headers: {
					"Content-Type": "application/json",
					...corsHeaders(),
				},
			});
		}
	},
};
