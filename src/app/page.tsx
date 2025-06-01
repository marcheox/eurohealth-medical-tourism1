"use client";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <Footer />
        <WhatsAppWidget />
      </main>
    </LanguageProvider>
  );
}
