export async function sendEmail({ to, subject = "Welcome!", html = "" }) {
    console.log("Email would send to:", to);
}

export function buildWelcomeEmail(intake, analysis, sessions) {
    return {
        subject: `Welcome to ${intake.groupName}`,
        html: `<p>Your next session is: ${sessions[0]}</p>`,
    };
}

export function buildTherapistBriefing(intake, analysis, gof) {
    return {
        subject: `New Registration: ${intake.name}`,
        html: `<p>Fit score: ${gof}</p>`,
    };
}
