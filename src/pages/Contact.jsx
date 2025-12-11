import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function Contact() {
    return (
        <>
            <Hero
                title="Contact"
                subtitle="Reach out any time — you don’t have to navigate this alone."
                image="/images/brand/contact-hero.jpg"
                height="50vh"
                align="center"
            />

            <Section>
                <h2>Get in Touch</h2>
                <p>Email: michaelarobards@gmail.com</p>
                <p>Office: Bowman Field, Louisville KY</p>

                <a href="mailto:michaelarobards@gmail.com" className="cta-primary">
                    Send Email →
                </a>
            </Section>
        </>
    );
}
