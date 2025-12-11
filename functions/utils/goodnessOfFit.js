export default function goodnessOfFit(intake) {
    let score = 50;
    if (intake.reason && intake.reason.length > 40) score += 10;
    if (intake.reason?.toLowerCase().includes("help")) score += 5;
    return Math.min(100, score);
}
