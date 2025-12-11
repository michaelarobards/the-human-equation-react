import React from "react";

export default function Section({ children, width = "800px" }) {
    return (
        <section className="section-wrapper">
            <div className="section-content" style={{ maxWidth: width, margin: "0 auto" }}>
                {children}
            </div>
        </section>
    );
}
