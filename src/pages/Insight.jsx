import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function Insight() {
    return (
        <>
            <Hero
                title="The Insight Series"
                subtitle="Your identity reconstruction framework — personality, attachment, values, narrative repair, conflict mastery."
                image="/images/brand/insight-series.jpg"
                height="55vh"
                align="center"
            />

            <Section>
                <h2>What You’ll Learn</h2>

                <p>
                    The Insight Series is the foundation of The Human Equation’s identity repair model.
                    You’ll build clarity about who you are, what shaped you, and who you’re becoming.
                </p>

                <ul>
                    <li>Attachment Patterns</li>
                    <li>Narrative Identity</li>
                    <li>Values & Direction</li>
                    <li>Relational Dynamics</li>
                    <li>Emotional Regulation</li>
                </ul>
            </Section>

            <Section>
                <h2>When It Meets</h2>
                <p>Every Saturday at 1 PM EST.</p>
            </Section>

            <Section>
                <a href="/groups" className="cta-primary">Join the Insight Group →</a>
            </Section>
        </>
    );
}
