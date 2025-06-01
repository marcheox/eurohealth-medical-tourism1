"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-600">
              EuroHealth
            </div>
            <div className="text-sm text-gray-600 ml-2">
              Medical Tourism
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                {t.header.services}
              </a>
              <a href="#partners" className="text-gray-700 hover:text-green-600 transition-colors">
                {t.header.partners}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                {t.header.contact}
              </a>
            </nav>

            {/* Language Selector */}
            <div className="relative">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* CTA Button */}
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              {t.header.sendRequest}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-green-600">
                {t.header.services}
              </a>
              <a href="#partners" className="text-gray-700 hover:text-green-600">
                {t.header.partners}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">
                {t.header.contact}
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                {t.header.sendRequest}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
