import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import WeeklyEventCard from "../components/WeeklyEventCard.jsx";

export default function Home() {
    return (
        <>
            {/* HERO */}
            <Hero
                title="You don’t have to carry everything alone."
                subtitle="I’m Michael. Jack and I walk this work with you."
                image="/images/mike-jack-outside2.jpg"
                height="80vh"
                align="left"
            />

            {/* PARALLAX SECTION */}
            <section
                className="parallax"
                style={{
                    backgroundImage: "url('/images/brand/bowman-field.jpg')",
                    minHeight: "45vh",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.9
                }}
            >
                <div
                    style={{
                        background: "rgba(0,0,0,0.55)",
                        padding: "40px",
                        borderRadius: "8px"
                    }}
                >
                    <h2 style={{ color: "var(--brand-gold)" }}>
                        Your Healing Begins With Belonging
                    </h2>
                    <p
                        style={{
                            maxWidth: "700px",
                            marginTop: "12px",
                            color: "#e7e9ea",
                            fontSize: "1.2rem",
                            textAlign: "center"
                        }}
                    >
                        Structure meets community in one of Louisville’s most iconic places.
                    </p>
                </div>
            </section>

            {/* COMMUNITY EVENTS */}
            <Section>
                <h2>This Week in the Community</h2>
                <p style={{ maxWidth: "750px" }}>
                    Growth happens in motion. A walk before sunrise. Laughter in a game.
                    Coffee with people who actually get it.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "30px",
                        marginTop: "40px"
                    }}
                >
                    <WeeklyEventCard
                        title="Friday Night Twitch Gaming"
                        time="Fridays · 4–6 PM EST"
                        image="/images/events/jackbox.jpg"
                        description="A relaxed, playful weekly ritual. Streamed live on Twitch. Join, laugh, and stay as long as you want."
                        rsvp="#"
                    />

                    <WeeklyEventCard
                        title="Walk/Hike/Run — Bowman to Seneca"
                        time="Saturdays · 7–8 AM EST"
                        image="/images/brand/walk-club-placeholder.jpg"
                        description="Movement + conversation. Walkers and runners split naturally. Bad weather? We move indoors."
                        rsvp="#"
                    />

                    <WeeklyEventCard
                        title="Books, Coffee & Community"
                        time="Saturdays · 8–9 AM EST"
                        image="/images/brand/book-club-placeholder.jpg"
                        description="A grounding hour with coffee, books, and meaningful conversation. Come as you are."
                        rsvp="#"
                    />
                </div>
            </Section>

            {/* WHY WE EXIST */}
            <Section>
                <h2>Why We Exist</h2>
                <p>
                    Most people don’t struggle because they’re weak — they struggle because
                    they’ve been carrying things no one taught them how to hold.
                </p>
                <p>
                    Life gets heavy: when relationships fracture, when parenting stretches
                    you thin, when identity feels blurry, when the past keeps showing up in
                    the present.
                </p>
                <p>
                    You don’t need more motivation. You need structure. You need clarity.
                    You need people who won’t disappear when things get hard.
                </p>
                <p>
                    The Human Equation is a steady place to land, a community to grow with,
                    and a guided process for becoming someone you’re proud of.
                </p>
            </Section>
        </>
    );
}
