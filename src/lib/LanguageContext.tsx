"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = 'en' | 'tr' | 'ar' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: {}
});

// Basic translations object
const translations = {
  en: {
    header: {
      bestPractices: "Best Practices",
      howWeWork: "How We Work",
      services: "Services", 
      partners: "Partners",
      contact: "Contact",
      sendRequest: "Send a request"
    },
    hero: {
      platform: "International Medical Tourism Platform",
      title: "Medical Tourism to Turkey",
      subtitle: "We'll guide and support you from the very first step to your safe return home"
    },
    specialties: {
      oncology: {
        title: "Oncology",
        description: "Comprehensive cancer treatment with advanced technology and expert care.",
        services: ["Skin cancer", "Melanoma", "Stomach cancer"]
      },
      dentistry: {
        title: "Dentistry", 
        description: "Modern dental care with latest technology and experienced specialists.",
        services: ["Dental implants", "Cosmetic dentistry", "Oral surgery"]
      }
    },
    footer: {
      description: "EuroHealth assists international patients seeking high-quality medical treatment in Turkey."
    }
  },
  tr: {
    header: {
      bestPractices: "En İyi Uygulamalar",
      howWeWork: "Nasıl Çalışıyoruz", 
      services: "Hizmetler",
      partners: "Ortaklar",
      contact: "İletişim",
      sendRequest: "Talep Gönder"
    },
    hero: {
      platform: "Uluslararası Medikal Turizm Platformu",
      title: "Türkiye'ye Medikal Turizm", 
      subtitle: "İlk adımınızdan güvenli dönüşünüze kadar size rehberlik eder ve destek oluruz"
    },
    specialties: {
      oncology: {
        title: "Onkoloji",
        description: "Gelişmiş teknoloji ve uzman bakımla kapsamlı kanser tedavisi.",
        services: ["Cilt kanseri", "Melanom", "Mide kanseri"]
      },
      dentistry: {
        title: "Diş Hekimliği",
        description: "En son teknoloji ve deneyimli uzmanlarla modern diş bakımı.", 
        services: ["Diş implantı", "Kozmetik diş hekimliği", "Ağız cerrahisi"]
      }
    },
    footer: {
      description: "EuroHealth, Türkiye'de yüksek kaliteli tıbbi tedavi arayan uluslararası hastalara yardımcı olur."
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('eurohealth-language') as Language;
    if (saved && ['en', 'tr', 'ar', 'de'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('eurohealth-language', lang);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
