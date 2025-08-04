import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Features from "../components/features";

const HomePage = () => {
    return(
        <div className="flex flex-col min-h-screen" style={{ background: 'linear-gradient(135deg, #4f46e5 0%,#3b82f6 100%)' }}>
            <Header />
            <main className="flex-grow">
                <Hero />
                <Features />
            </main>

            <Footer />
        </div>
    )
}
export default HomePage;