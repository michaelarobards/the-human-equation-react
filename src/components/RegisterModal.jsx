await fetch("https://the-human-equation-api.michaelarobards.workers.dev/join-group", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name,
        email,
        reason,
        groupName,
        groupTime
    })
});
