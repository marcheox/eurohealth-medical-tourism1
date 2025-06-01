"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

// ... rest of the component stays the same

export default function HeroSection() {
  const { t } = useLanguage();

  const specialties = [
    {
      title: t.specialties.oncology.title,
      description: t.specialties.oncology.description,
      services: t.specialties.oncology.services,
      icon: "🏥"
    },
    {
      title: t.specialties.dentistry.title,
      description: t.specialties.dentistry.description,
      services: t.specialties.dentistry.services,
      icon: "🦷"
    },
    {
      title: "Plastic Surgery",
      description: "Advanced cosmetic and reconstructive surgery procedures.",
      services: ["Rhinoplasty", "Breast Surgery", "Liposuction"],
      icon: "✨"
    },
    {
      title: "Hair Transplant",
      description: "Natural hair restoration with FUE technique.",
      services: ["FUE Hair Transplant", "Beard Transplant", "Eyebrow Transplant"],
      icon: "💇‍♂️"
    }
  ];

  return (
    <section className="marus-gradient relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Content */}
        <div className="text-center text-white mb-16">
          <p className="text-sm font-medium mb-4 opacity-90">
            {t.hero.platform}
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Medical Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {specialties.map((specialty, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {specialty.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {specialty.description}
                </p>
                <ul className="text-xs text-gray-500 space-y-1 mb-4">
                  {specialty.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="text-green-600 p-0 h-auto text-sm">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
            View All Specialties
          </Button>
        </div>
      </div>
    </section>
  );
}
