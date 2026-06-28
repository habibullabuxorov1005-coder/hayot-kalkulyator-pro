"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Percent, Calculator } from "lucide-react";
import Link from "next/link";
import AdBanner from "@/components/ads/AdBanner";
import AffiliateBlock from "@/components/ads/AffiliateBlock";

export default function FatCalculator() {
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Hisoblash natijasi bu yerda ko'rsatiladi. To'liq funksionallik keyingi yangilanishlarda qo'shiladi.");
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <AdBanner position="top" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Bosh sahifa
        </Link>

        <motion.div initial={ opacity: 0, y: 20 } animate={ opacity: 1, y: 0 } className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 mb-4">
            <Percent className="h-4 w-4" /> Tana yog' foizi hisobi
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Yog' <span className="gradient-text">Foizi</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">Tana yog' foizi hisobi</p>
        </motion.div>

        <motion.div initial={ opacity: 0, scale: 0.95 } animate={ opacity: 1, scale: 1 } className="glass-card p-6 mb-8">
          <form onSubmit={handleCalculate} className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Bel o'lchami (sm)</label>
              <input type="text" name="waist" placeholder="Masalan: 80" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Bo'yin o'lchami (sm)</label>
              <input type="text" name="neck" placeholder="Masalan: 38" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Bo'y (sm)</label>
              <input type="text" name="height" placeholder="Masalan: 175" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Jins</label>
              <input type="text" name="gender" placeholder="erkak / ayol" className="input-field" />
            </div>
            <div className="flex items-end">
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Calculator className="h-4 w-4" /> Hisoblash
              </button>
            </div>
          </form>
        </motion.div>

        <AdBanner position="in-content" />

        {result && (
          <motion.div initial={ opacity: 0, y: 20 } animate={ opacity: 1, y: 0 } className="glass-card p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Natija</h3>
            <p className="text-gray-400">{result}</p>
          </motion.div>
        )}

        <AffiliateBlock />
        <AdBanner position="bottom" />
      </div>
    </main>
  );
}
