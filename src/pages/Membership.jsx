import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function Membership() {
    return (
        <>
            <Hero
                title="Membership at The Human Equation"
                subtitle="A grounded, therapist-led community for identity repair, emotional clarity, and healthier relationships."
                image="/images/brand/membership-hero.jpg"
                height="55vh"
                align="center"
            />

            <Section>
                <h2>Your Weekly Structure</h2>
                <p>
                    Membership gives you unlimited access to weekly support groups, community gatherings,
                    livestreams, and your identity reconstruction framework sessions.
                </p>
            </Section>

            <Section>
                <h2>What’s Included</h2>

                <ul className="membership-list">
                    <li>Unlimited Weekly Groups (appropriate to your needs & goals)</li>
                    <li>Access to the Insight Series</li>
                    <li>Member-only livestreams & workshops</li>
                    <li>Private community and resources</li>
                </ul>
            </Section>

            <Section>
                <h2>Your First Week is Free</h2>
                <p>
                    Try any group for free. If it feels like the right community for your growth, you can
                    continue with membership at any time.
                </p>

                <a href="/groups" className="cta-primary">Explore Groups →</a>
            </Section>
        </>
    );
}
