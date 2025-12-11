import React from "react";

export default function WeeklyEventCard({ title, time, image, description, rsvp }) {
    return (
        <div className="weekly-event-card">
            <img src={image} alt={title} className="weekly-event-image" />

            <h3>{title}</h3>
            <p className="weekly-event-time">{time}</p>
            <p className="weekly-event-description">{description}</p>

            {rsvp && (
                <a className="cta-primary" href={rsvp} target="_blank" rel="noopener noreferrer">
                    RSVP →
                </a>
            )}
        </div>
    );
}
