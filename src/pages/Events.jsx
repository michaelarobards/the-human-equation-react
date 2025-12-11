import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import WeeklyEventCard from "../components/WeeklyEventCard.jsx";

export default function Events() {
    return (
        <>
            <Hero
                title="Community Events"
                subtitle="Weekly gatherings that help you stay connected, grounded, and in motion."
                image="/images/brand/events-hero.jpg"
                height="55vh"
                align="center"
            />

            <Section>
                <h2>Weekly Community Events</h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "30px",
                        marginTop: "40px"
                    }}
                >
                    <WeeklyEventCard
                        title="Friday Night Twitch Gaming"
                        time="Fridays · 4–6 PM EST"
                        description="A relaxed weekly ritual of connection and laughter."
                        image="/images/events/jackbox.jpg"
                    />

                    <WeeklyEventCard
                        title="Walk/Hike/Run"
                        time="Saturdays · 7–8 AM EST"
                        description="Move your body, clear your mind, and connect with others."
                        image="/images/brand/walk-club-placeholder.jpg"
                    />

                    <WeeklyEventCard
                        title="Books, Coffee & Community"
                        time="Saturdays · 8–9 AM EST"
                        description="Grounding conversation around meaningful ideas."
                        image="/images/brand/book-club-placeholder.jpg"
                    />
                </div>
            </Section>
        </>
    );
}
