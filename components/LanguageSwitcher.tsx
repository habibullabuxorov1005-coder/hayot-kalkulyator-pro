"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "uz", label: "O'zbek", flag: "🇺🇿" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-dark-card border border-dark-border rounded-xl text-gray-400 hover:text-white transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">UZ / EN</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-dark-card border border-dark-border rounded-xl shadow-lg z-50">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className="flex items-center gap-2 px-4 py-3 hover:bg-dark-bg transition-colors first:rounded-t-xl last:rounded-b-xl"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm text-gray-300">{lang.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
