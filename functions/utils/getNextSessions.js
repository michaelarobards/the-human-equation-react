export default function getNextSessions(groupTime, count = 4) {
    const [day, time] = groupTime.split("•").map(s => s.trim());
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const results = [];

    const targetDay = days.indexOf(day);

    for (let i = 0; i < count; i++) {
        let d = new Date(now);
        d.setDate(d.getDate() + ((7 + targetDay - d.getDay()) % 7) + i * 7);

        const [hm, ampm] = time.split(" ");
        let [h, m] = hm.split(":").map(Number);
        if (ampm === "PM" && h !== 12) h += 12;
        if (ampm === "AM" && h === 12) h = 0;

        d.setHours(h, m, 0, 0);
        results.push(d.toISOString());
    }

    return results;
}
