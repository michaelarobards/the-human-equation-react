import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function Journey() {
    return (
        <>
            <Hero
                title="Your Journey"
                subtitle="Growth is not linear — but it is possible, predictable, and worth it."
                image="/images/brand/journey-hero.jpg"
                height="55vh"
                align="center"
            />

            <Section>
                <h2>Where You’re Going</h2>
                <p>
                    Your journey at The Human Equation isn’t about perfection — it’s about direction.
                    Week by week, identity becomes clearer, relationships strengthen, and life becomes
                    more manageable.
                </p>
            </Section>
        </>
    );
}
