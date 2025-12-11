import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function Livestream() {
    return (
        <>
            <Hero
                title="Livestream"
                subtitle="Weekly community streaming and group sessions."
                image="/images/brand/livestream-hero.jpg"
                height="50vh"
                align="center"
            />

            <Section>
                <h2>Where to Watch</h2>
                <p>
                    Join us weekly on Twitch for gaming, Q&A, community chats, and identity-building
                    conversations.
                </p>

                <a
                    href="https://twitch.tv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary"
                >
                    Go to Livestream →
                </a>
            </Section>
        </>
    );
}
