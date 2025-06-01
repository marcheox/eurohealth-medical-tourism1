"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-green-400 mb-4">
              EuroHealth
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              EuroHealth assists international patients seeking high-quality medical treatment in Turkey.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">📧 info@eurohealth.com.tr</p>
              <p className="text-gray-300">💬 WhatsApp: +90 545 942 40 85</p>
              <p className="text-gray-300">🏢 Adalet Mah.Manas Bulvarı No 80 Kat 7 Daire 103 Bayraklı/İZMİR</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Medical Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Oncology Treatment</li>
              <li>Dental Care</li>
              <li>Plastic Surgery</li>
              <li>Hair Transplant</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 EuroHealth Medical Tourism AŞ - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
