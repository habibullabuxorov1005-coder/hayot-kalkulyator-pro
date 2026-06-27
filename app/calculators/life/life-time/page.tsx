"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Wind, BookOpen, Briefcase, Moon, 
  Smartphone, Utensils, Music, Share2, Download,
  ArrowLeft, Sparkles, TrendingUp
} from "lucide-react";
import Link from "next/link";
import AdBanner from "@/components/ads/AdBanner";
import AffiliateBlock from "@/components/ads/AffiliateBlock";
import EmailCapture from "@/components/email-capture/EmailCapture";

interface LifeStats {
  daysLived: number;
  daysRemaining: number;
  breaths: number;
  heartbeats: number;
  booksRead: number;
  workHours: number;
  sleepHours: number;
  screenTime: number;
  meals: number;
  songs: number;
}

const calculateLifeStats = (birthDate: string, lifeExpectancy: number = 75): LifeStats => {
  const birth = new Date(birthDate);
  const now = new Date();
  const daysLived = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
  const daysRemaining = Math.max(0, lifeExpectancy * 365 - daysLived);

  return {
    daysLived,
    daysRemaining,
    breaths: daysLived * 23000,
    heartbeats: daysLived * 115000,
    booksRead: Math.floor(daysLived / 14),
    workHours: Math.floor(daysLived * 0.3 * 8),
    sleepHours: daysLived * 8,
    screenTime: daysLived * 6,
    meals: daysLived * 3,
    songs: daysLived * 15,
  };
};

const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toLocaleString();
};

const statsConfig = [
  { key: "daysLived" as const, label: "Yashagan Kunlar", icon: TrendingUp, color: "text-green-400", suffix: "" },
  { key: "daysRemaining" as const, label: "Qolgan Kunlar", icon: Sparkles, color: "text-primary-400", suffix: "" },
  { key: "breaths" as const, label: "Nafaslar", icon: Wind, color: "text-cyan-400", suffix: " ta" },
  { key: "heartbeats" as const, label: "Yurak Urishlari", icon: Heart, color: "text-red-400", suffix: " ta" },
  { key: "booksRead" as const, label: "O'qilgan Kitoblar", icon: BookOpen, color: "text-yellow-400", suffix: " ta" },
  { key: "workHours" as const, label: "Ish Soatlari", icon: Briefcase, color: "text-orange-400", suffix: " soat" },
  { key: "sleepHours" as const, label: "Uyqu Soatlari", icon: Moon, color: "text-indigo-400", suffix: " soat" },
  { key: "screenTime" as const, label: "Ekran Vaqt", icon: Smartphone, color: "text-purple-400", suffix: " soat" },
  { key: "meals" as const, label: "Ovqatlar", icon: Utensils, color: "text-pink-400", suffix: " ta" },
  { key: "songs" as const, label: "Eshitilgan Qo'shiqlar", icon: Music, color: "text-teal-400", suffix: " ta" },
];

export default function LifeTimeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [lifeExpectancy, setLifeExpectancy] = useState(75);
  const [stats, setStats] = useState<LifeStats | null>(null);
  const [animatedStats, setAnimatedStats] = useState<LifeStats | null>(null);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    if (stats) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          daysLived: Math.floor(stats.daysLived * easeOut),
          daysRemaining: Math.floor(stats.daysRemaining * easeOut),
          breaths: Math.floor(stats.breaths * easeOut),
          heartbeats: Math.floor(stats.heartbeats * easeOut),
          booksRead: Math.floor(stats.booksRead * easeOut),
          workHours: Math.floor(stats.workHours * easeOut),
          sleepHours: Math.floor(stats.sleepHours * easeOut),
          screenTime: Math.floor(stats.screenTime * easeOut),
          meals: Math.floor(stats.meals * easeOut),
          songs: Math.floor(stats.songs * easeOut),
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedStats(stats);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [stats]);

  const handleCalculate = () => {
    if (birthDate) setStats(calculateLifeStats(birthDate, lifeExpectancy));
  };

  const handleShare = async () => {
    const shareText = `📊 MENING HAYOT STATISTIKAM:
🗓️ Yashagan kunlar: ${formatNumber(stats?.daysLived || 0)}
💓 Yurak urishlari: ${formatNumber(stats?.heartbeats || 0)}
💨 Nafaslar: ${formatNumber(stats?.breaths || 0)}
📚 O'qilgan kitoblar: ${formatNumber(stats?.booksRead || 0)}

👉 O'zingiznikini hisoblang`;

    if (navigator.share) {
      await navigator.share({ title: "Mening Hayot Hisobim", text: shareText });
    } else {
      await navigator.clipboard.writeText(shareText);
      setShowShare(true);
      setTimeout(() => setShowShare(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <AdBanner position="top" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Bosh sahifa
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 mb-4">
            <Sparkles className="h-4 w-4" /> Viral Hisoblagich
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Hayot <span className="gradient-text">Kalkulyatori</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tug'ilgan kuningizni kiriting — hayotingizning ajoyib statistikasini ko'ring.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-6 mb-8">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tug'ilgan kuningiz</label>
              <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="input-field" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Taxminiy umr (yil)</label>
              <input type="number" value={lifeExpectancy} onChange={(e) => setLifeExpectancy(Number(e.target.value))} className="input-field" min="1" max="120" />
            </div>
            <div className="flex items-end">
              <button onClick={handleCalculate} className="btn-primary w-full flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" /> Hisoblash
              </button>
            </div>
          </div>
        </motion.div>

        <AdBanner position="in-content" />

        <AnimatePresence>
          {animatedStats && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <div className="glass-card p-6 mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Hayot yo'li</span>
                  <span>{((animatedStats.daysLived / (animatedStats.daysLived + animatedStats.daysRemaining)) * 100).toFixed(1)}%</span>
                </div>
                <div className="h-3 bg-dark-bg rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(animatedStats.daysLived / (animatedStats.daysLived + animatedStats.daysRemaining)) * 100}%` }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{formatNumber(animatedStats.daysLived)} kun o'tdi</span>
                  <span>{formatNumber(animatedStats.daysRemaining)} kun qoldi</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {statsConfig.map((stat, i) => (
                  <motion.div key={stat.key} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="stat-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-dark-bg ${stat.color}`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-gray-400">{stat.label}</span>
                    </div>
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {formatNumber(animatedStats[stat.key])}{stat.suffix}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass-card p-6 mb-8 text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Do'stlaringiz bilan ulashing!</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <button onClick={handleShare} className="btn-primary inline-flex items-center gap-2">
                    <Share2 className="h-4 w-4" /> Ulashish
                  </button>
                  <button className="btn-secondary inline-flex items-center gap-2">
                    <Download className="h-4 w-4" /> PDF Yuklash
                  </button>
                </div>
                {showShare && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm mt-3">✅ Nusxa olindi!</motion.p>}
              </div>

              <EmailCapture variant="inline" />
            </motion.div>
          )}
        </AnimatePresence>

        <AffiliateBlock />
        <AdBanner position="bottom" />

        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-4">Boshqa Kalkulyatorlar</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Yosh Hisoblagich", slug: "age", desc: "Aniq yosh va tug'ilgan kun" },
              { name: "Ish Soatlari", slug: "work-hours", desc: "Hayotda ishlagan vaqt" },
              { name: "Hayot Hisoboti", slug: "life-report", desc: "Shaxsiy PDF hisobot" },
            ].map((calc) => (
              <Link key={calc.slug} href={`/calculators/life/${calc.slug}`} className="glass-card p-4 hover:border-primary-500/50 transition-all">
                <h4 className="font-semibold text-white">{calc.name}</h4>
                <p className="text-sm text-gray-400">{calc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
