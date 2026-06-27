"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowLeft, Wallet, Percent, Building } from "lucide-react";
import Link from "next/link";
import AdBanner from "@/components/ads/AdBanner";
import AffiliateBlock from "@/components/ads/AffiliateBlock";
import EmailCapture from "@/components/email-capture/EmailCapture";

interface TaxResult {
  grossSalary: number;
  incomeTax: number;
  socialTax: number;
  pensionFund: number;
  netSalary: number;
  effectiveRate: number;
}

const calculateUzbekistanTax = (salary: number): TaxResult => {
  const incomeTax = salary * 0.12;
  const socialTax = salary * 0.12;
  const pensionFund = salary * 0.005;
  const totalDeductions = incomeTax + socialTax + pensionFund;

  return {
    grossSalary: salary,
    incomeTax,
    socialTax,
    pensionFund,
    netSalary: salary - totalDeductions,
    effectiveRate: (totalDeductions / salary) * 100,
  };
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', maximumFractionDigits: 0 }).format(amount);
};

export default function SalaryTaxCalculator() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<TaxResult | null>(null);

  const handleCalculate = () => {
    const num = parseFloat(salary.replace(/[^0-9]/g, ""));
    if (num > 0) setResult(calculateUzbekistanTax(num));
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <AdBanner position="top" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Bosh sahifa
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 mb-4">
            <Building className="h-4 w-4" /> O'zbekiston 2024
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Oylik <span className="gradient-text">Soliq Kalkulyatori</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Oylik ish haqingizni kiriting — soliqlar, pensiya va qo'lda qoladigan summani hisoblang.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Oylik ish haqi (so'm)</label>
              <div className="relative">
                <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Masalan: 5,000,000" className="input-field pl-10" />
              </div>
            </div>
            <div className="flex items-end">
              <button onClick={handleCalculate} className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                <Calculator className="h-4 w-4" /> Hisoblash
              </button>
            </div>
          </div>
        </motion.div>

        <AdBanner position="in-content" />

        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="stat-card text-center">
                <div className="text-sm text-gray-400 mb-1">Brutto ish haqi</div>
                <div className="text-2xl font-bold text-white">{formatCurrency(result.grossSalary)}</div>
              </div>
              <div className="stat-card text-center">
                <div className="text-sm text-gray-400 mb-1">Jami soliqlar</div>
                <div className="text-2xl font-bold text-red-400">{formatCurrency(result.incomeTax + result.socialTax + result.pensionFund)}</div>
              </div>
              <div className="stat-card text-center border-primary-500/50">
                <div className="text-sm text-gray-400 mb-1">Qo'lda qoladi</div>
                <div className="text-2xl font-bold text-green-400">{formatCurrency(result.netSalary)}</div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Percent className="h-5 w-5 text-primary-400" /> Batafsil Tahlil
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Daromad solig'i (12%)", value: result.incomeTax, color: "bg-red-500" },
                  { label: "Ijtimoiy soliq (12%)", value: result.socialTax, color: "bg-orange-500" },
                  { label: "Pensiya jamg'armasi (0.5%)", value: result.pensionFund, color: "bg-yellow-500" },
                  { label: "Qo'lda qoladi", value: result.netSalary, color: "bg-green-500" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-white font-medium">{formatCurrency(item.value)}</span>
                    </div>
                    <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${(item.value / result.grossSalary) * 100}%` }} transition={{ duration: 1, delay: i * 0.2 }} className={`h-full ${item.color} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-dark-border">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Samaradorlik stavkasi:</span>
                  <span className="text-xl font-bold text-primary-400">{result.effectiveRate.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <EmailCapture variant="inline" />
          </motion.div>
        )}

        <AffiliateBlock />
        <AdBanner position="bottom" />
      </div>
    </main>
  );
}
