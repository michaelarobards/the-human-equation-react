import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function About() {
    return (
        <>
            <Hero
                title="About Michael A. RoBards, LCSW"
                subtitle="20 years of clinical experience in trauma, identity reconstruction, and family systems."
                image="/images/brand/about-hero.jpg"
                height="55vh"
                align="center"
            />

            <Section>
                <h2>Who I Am</h2>
                <p>
                    I’m Michael, a child and family psychotherapist specializing in trauma, identity
                    formation, and modern parenthood. I'm also a father of seven, a dog dad to Jack,
                    and a relentless believer in human resilience.
                </p>
            </Section>

            <Section>
                <h2>The Human Equation</h2>
                <p>
                    The Human Equation is more than a practice — it’s a community, a framework, and a
                    grounded pathway for becoming someone you’re proud of.
                </p>
            </Section>
        </>
    );
}
