"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Activity, Info, CheckCircle } from "lucide-react";
import Link from "next/link";
import AdBanner from "@/components/ads/AdBanner";
import AffiliateBlock from "@/components/ads/AffiliateBlock";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  bgColor: string;
  idealWeightMin: number;
  idealWeightMax: number;
}

const calculateBMI = (height: number, weight: number): BMIResult => {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);

  let category = "", color = "", bgColor = "";

  if (bmi < 18.5) { category = "Ozish"; color = "text-yellow-400"; bgColor = "bg-yellow-500/20"; }
  else if (bmi < 25) { category = "Normal"; color = "text-green-400"; bgColor = "bg-green-500/20"; }
  else if (bmi < 30) { category = "Ortiqcha vazn"; color = "text-orange-400"; bgColor = "bg-orange-500/20"; }
  else { category = "Semirish"; color = "text-red-400"; bgColor = "bg-red-500/20"; }

  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    color,
    bgColor,
    idealWeightMin: Math.round(18.5 * heightM * heightM),
    idealWeightMax: Math.round(24.9 * heightM * heightM),
  };
};

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (h > 0 && w > 0) setResult(calculateBMI(h, w));
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <AdBanner position="top" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4" /> Bosh sahifa
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 mb-4">
            <Heart className="h-4 w-4" /> Salomatlik
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            BMI <span className="gradient-text">Kalkulyatori</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">Bo'y va vazningizni kiriting — tana massasi indeksingizni aniqlang</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-6 mb-8">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Bo'yingiz (sm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Masalan: 175" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Vazningiz (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Masalan: 70" className="input-field" />
            </div>
            <div className="flex items-end">
              <button onClick={handleCalculate} className="btn-primary w-full flex items-center justify-center gap-2">
                <Activity className="h-4 w-4" /> Hisoblash
              </button>
            </div>
          </div>
        </motion.div>

        <AdBanner position="in-content" />

        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="glass-card p-8 text-center">
              <div className={`text-6xl font-bold ${result.color} mb-2`}>{result.bmi}</div>
              <div className={`inline-block px-4 py-2 rounded-full text-lg font-semibold ${result.color} ${result.bgColor}`}>{result.category}</div>

              <div className="mt-8">
                <div className="h-6 bg-dark-bg rounded-full overflow-hidden relative flex">
                  <div className="w-[23%] bg-yellow-500/60 flex items-center justify-center text-xs text-white font-bold">Ozish</div>
                  <div className="w-[26%] bg-green-500/60 flex items-center justify-center text-xs text-white font-bold">Normal</div>
                  <div className="w-[20%] bg-orange-500/60 flex items-center justify-center text-xs text-white font-bold">Ortiqcha</div>
                  <div className="flex-1 bg-red-500/60 flex items-center justify-center text-xs text-white font-bold">Semirish</div>
                </div>
                <motion.div initial={{ left: "0%" }} animate={{ left: `${Math.min((result.bmi / 40) * 100, 100)}%` }} className="relative -mt-6 w-0 h-0">
                  <div className="absolute -translate-x-1/2 -translate-y-1 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-primary-500" />
                </motion.div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="stat-card text-center">
                <div className="text-sm text-gray-400 mb-1">Ideal vazn</div>
                <div className="text-2xl font-bold text-green-400">{result.idealWeightMin} - {result.idealWeightMax} kg</div>
              </div>
              <div className="stat-card text-center">
                <div className="text-sm text-gray-400 mb-1">Holatingiz</div>
                <div className={`text-2xl font-bold ${result.color}`}>{result.category}</div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-primary-400" />
                <h3 className="text-lg font-semibold text-white">Tavsiyalar</h3>
              </div>
              <div className="space-y-3">
                {result.bmi < 18.5 && (
                  <>
                    <div className="flex items-start gap-2 text-gray-300"><CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" /> Kaloriya boy ovqatlar iste'mol qiling</div>
                    <div className="flex items-start gap-2 text-gray-300"><CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" /> Kuch mashqlarini qo'shing</div>
                  </>
                )}
                {result.bmi >= 18.5 && result.bmi < 25 && (
                  <>
                    <div className="flex items-start gap-2 text-gray-300"><CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" /> Ajoyib! Sog'lom vaznni saqlang</div>
                    <div className="flex items-start gap-2 text-gray-300"><CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" /> Muntazam sport bilan shug'ullaning</div>
                  </>
                )}
                {result.bmi >= 25 && (
                  <>
                    <div className="flex items-start gap-2 text-gray-300"><CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 shrink-0" /> Kunlik yurishni ko'paytiring</div>
                    <div className="flex items-start gap-2 text-gray-300"><CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 shrink-0" /> Shakar va unli mahsulotlarni kamaytiring</div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <AffiliateBlock />
        <AdBanner position="bottom" />
      </div>
    </main>
  );
}
