import React from "react";

export default function Hero({
    title,
    subtitle,
    image = "/images/default.jpg",
    height = "65vh",
    align = "left"
}) {
    return (
        <section
            className="hero"
            style={{
                minHeight: height,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                padding: "60px 5%",
                position: "relative",
                color: "#fff"
            }}
        >
            <div className="hero-overlay" />

            <div
                className="hero-content"
                style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: align,
                    maxWidth: "700px"
                }}
            >
                {title && <h1 className="hero-title">{title}</h1>}
                {subtitle && <p className="hero-subtitle">{subtitle}</p>}
            </div>
        </section>
    );
}
