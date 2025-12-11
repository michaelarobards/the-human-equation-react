import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import useModal from "../hooks/useModal.js";
import RegisterModal from "../components/RegisterModal.jsx";

export default function Groups() {
    const { isOpen, groupName, groupTime, openModal, closeModal } = useModal();

    return (
        <>
            {/* HERO */}
            <Hero
                title="Weekly Groups"
                subtitle="Where identity grows, relationships heal, and community makes everything possible."
                image="/images/mike-jack-sitting.jpg"
                align="center"
                height="60vh"
            />

            {/* WHY GROUPS WORK */}
            <Section>
                <h2>Why Weekly Groups Work</h2>
                <p>
                    People don’t grow because they suddenly “understand their patterns.”
                    They grow because they enter a structure that makes change real.
                </p>
                <p>
                    Weekly groups give you consistency, accountability, and therapeutic guidance
                    inside a community that sees you, supports you, and helps you practice new
                    ways of being.
                </p>
            </Section>

            {/* TESTIMONIALS */}
            <Section>
                <div style={{ textAlign: "center" }}>
                    <div className="stars">★★★★★</div>
                    <h2>What People Are Saying</h2>

                    <blockquote className="testimonial-quote">
                        “Michael has changed my life. His clarity, compassion, and guidance helped me rebuild
                        my identity when I felt lost.”
                    </blockquote>

                    <blockquote className="testimonial-quote">
                        “The weekly group gave me community, direction, and stability during one of the hardest
                        seasons of my life.”
                    </blockquote>

                    <blockquote className="testimonial-quote">
                        “I’ve never felt more supported. These groups helped me understand myself and reconnect
                        with the people I love.”
                    </blockquote>
                </div>
            </Section>

            {/* SUPPORT IMAGE */}
            <Section>
                <div style={{ textAlign: "center" }}>
                    <img
                        src="/images/jack-and-nala.jpg"
                        alt="Jack the therapy dog resting with kitten"
                        className="image-block"
                    />
                    <p className="image-caption">
                        Healing begins with safety and connection. Jack reminds us of that every day.
                    </p>
                </div>
            </Section>

            {/* PARENT GROUPS */}
            <Section>
                <h2>Parent Groups (Mon–Fri at 3 PM EST)</h2>

                <GroupGrid>
                    <GroupCard
                        name="Survivors of Suicide (Parents)"
                        time="Monday • 3:00 PM EST"
                        description="Gentle, structured support for parents navigating the aftermath of child loss or suicide."
                        openModal={openModal}
                    />
                    <GroupCard
                        name="Parenting Autistic Kids & Teens"
                        time="Tuesday • 3:00 PM EST"
                        description="Tools, clarity, and confidence for parents raising neurodivergent children and teens."
                        openModal={openModal}
                    />
                    <GroupCard
                        name="Parents Grief Group"
                        time="Wednesday • 3:00 PM EST"
                        description="A grounded, confidential space for parents carrying profound grief."
                        openModal={openModal}
                    />
                    <GroupCard
                        name="Parents of Trans & GNC Teens"
                        time="Thursday • 3:00 PM EST"
                        description="Affirming support for parents navigating gender journeys with their teens."
                        openModal={openModal}
                    />
                    <GroupCard
                        name="Parenting Teens"
                        time="Friday • 3:00 PM EST"
                        description="Identity, boundaries, emotional clarity, and staying connected through adolescence."
                        openModal={openModal}
                    />
                </GroupGrid>
            </Section>

            {/* 20s GROUPS */}
            <Section>
                <h2>20s Groups (Thursday Evenings)</h2>

                <GroupGrid>
                    <GroupCard
                        name="20s LGBTQ — Belonging & Identity"
                        time="Thursday • 6:00 PM EST"
                        description="A supportive space for LGBTQ young adults exploring belonging, identity, and direction."
                        openModal={openModal}
                    />
                    <GroupCard
                        name="20s Men — Identity, Purpose & Direction"
                        time="Thursday • 7:00 PM EST"
                        description="A modern rite-of-passage for young men developing emotional intelligence, purpose, and resilience."
                        openModal={openModal}
                    />
                </GroupGrid>
            </Section>

            {/* SATURDAY GROUPS */}
            <Section>
                <h2>Saturday Groups</h2>

                <GroupGrid>
                    <GroupCard
                        name="The Insight Series"
                        time="Saturday • 1:00 PM EST"
                        description="Personality, attachment, values, narrative repair—the identity reconstruction framework."
                        openModal={openModal}
                    />
                    <GroupCard
                        name="Modern Fatherhood"
                        time="Saturday • 2:00 PM EST"
                        description="Identity rebuilding, humility-based leadership, and emotional clarity for fathers."
                        openModal={openModal}
                    />
                    <GroupCard
                        name="Modern Motherhood"
                        time="Saturday • 3:00 PM EST"
                        description="Identity reconstruction, grounding, co-parenting clarity, and self-leadership for mothers."
                        openModal={openModal}
                    />
                </GroupGrid>
            </Section>

            {/* MODAL */}
            <RegisterModal
                isOpen={isOpen}
                groupName={groupName}
                groupTime={groupTime}
                closeModal={closeModal}
            />
        </>
    );
}

/* ============================================
   INTERNAL COMPONENTS
============================================ */

function GroupGrid({ children }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "34px",
                marginTop: "45px",
            }}
        >
            {children}
        </div>
    );
}

function GroupCard({ name, time, description, openModal }) {
    return (
        <div className="card" style={{ padding: "32px" }}>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>{name}</h3>
            <p style={{ fontWeight: 600, marginBottom: "12px" }}>{time}</p>
            <p style={{ lineHeight: "1.55" }}>{description}</p>

            <div className="cta-stack">
                <button
                    className="cta-primary"
                    style={{ width: "100%" }}
                    onClick={() => openModal(name, time)}
                >
                    Register Free
                </button>
            </div>
        </div>
    );
}
