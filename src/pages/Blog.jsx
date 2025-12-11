import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";

export default function Blog() {
    return (
        <>
            <Hero
                title="From the Desk of Michael A. RoBards, LCSW"
                subtitle="Reflections, clinical insights, and stories from the therapy room."
                image="/images/brand/blog-hero.jpg"
                align="center"
                height="50vh"
            />

            <Section>
                <h2>Blog Archive</h2>
                <p>
                    Articles, case reflections, essays, and frameworks for identity repair, modern
                    parenthood, and relational healing.
                </p>

                <p style={{ marginTop: "20px" }}>
                    (Blog listing placeholder — we will integrate your posts next.)
                </p>
            </Section>
        </>
    );
}
