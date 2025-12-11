import React, { useState } from "react";

function RegisterModal({ isOpen, groupName, groupTime, closeModal }) {
    if (!isOpen) return null;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch("https://the-human-equation-api.michaelarobards.workers.dev/join-group", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                reason,
                groupName,
                groupTime
            })
        });

        closeModal();
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Join {groupName}</h2>
                <p>{groupTime}</p>

                <form onSubmit={handleSubmit}>
                    <input
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        required
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <textarea
                        placeholder="What brings you here?"
                        value={reason}
                        onChange={e => setReason(e.target.value)}
                    />

                    <button className="cta-primary" type="submit">Join for Free</button>
                    <button className="cta-secondary" type="button" onClick={closeModal}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;
