import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function Guidelines() {
    return (
        <>
            <Hero
                title="Community Guidelines"
                subtitle="We grow best in containers of safety, respect, and accountability."
                image="/images/brand/guidelines-hero.jpg"
                height="50vh"
                align="center"
            />

            <Section>
                <h2>Our Agreements</h2>
                <ul>
                    <li>Confidentiality is respected.</li>
                    <li>We speak from personal experience.</li>
                    <li>We do not give advice — we offer presence.</li>
                    <li>We honor boundaries, identity, and lived experience.</li>
                    <li>We approach others with curiosity, not judgment.</li>
                </ul>
            </Section>

            <Section>
                <h2>Your Part in the Community</h2>
                <p>
                    These guidelines make the experience safer, more consistent, and more supportive for
                    everyone involved. Thank you for helping us protect this space.
                </p>
            </Section>
        </>
    );
}
