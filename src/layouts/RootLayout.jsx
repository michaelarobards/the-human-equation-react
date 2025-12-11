import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                {children}
            </main>
            <Footer />
        </>
    );
}
