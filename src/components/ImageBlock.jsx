import React from "react";

export default function ImageBlock({ src, alt, caption }) {
    return (
        <div style={{ textAlign: "center", margin: "40px 0" }}>
            <img
                src={src}
                alt={alt}
                className="image-block"
                style={{
                    width: "100%",
                    maxWidth: "850px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 22px rgba(0, 0, 0, 0.15)"
                }}
            />
            {caption && <p className="image-caption">{caption}</p>}
        </div>
    );
}
