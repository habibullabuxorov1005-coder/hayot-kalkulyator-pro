"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, TrendingUp, Heart, Clock, DollarSign, 
  Activity, ArrowRight, Sparkles, Zap, Globe
} from "lucide-react";
import Link from "next/link";
import AdBanner from "@/components/ads/AdBanner";
import EmailCapture from "@/components/email-capture/EmailCapture";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const translations = {
  uz: {
    hero_title: "Hayotingizni",
    hero_title_gradient: "Hisoblang",
    hero_desc: "Moliyaviy, salomatlik va hayot kalkulyatorlari. Soliq, kredit, investitsiya, BMI, hayot davomiyligi — barchasi bir joyda.",
    view_calculators: "Kalkulyatorlarni Ko'rish",
    personal_report: "Shaxsiy Hisobot",
    stats: [
      { label: "Kalkulyatorlar", value: "50+" },
      { label: "Kunlik Foydalanuvchi", value: "10K+" },
      { label: "Hisobotlar", value: "5K+" },
      { label: "Mamlakatlar", value: "15+" },
    ],
    all_calculators: "Barcha Kalkulyatorlar",
    select_category: "Kerakli bo'limni tanlang va hisoblashni boshlang",
    categories: [
      { id: "financial", title: "💰 Moliyaviy", desc: "Soliq, kredit, investitsiya hisoblagichlari" },
      { id: "health", title: "🏃 Salomatlik", desc: "BMI, kaloriya, hayot davomiyligi" },
      { id: "life", title: "⏰ Hayot & Vaqt", desc: "Hayot hisoboti, vaqt tahlili" },
    ],
    viral_feature: "Viral Feature",
    life_report: ""Hayot Hisoboti" Generator",
    life_report_desc: "Tug'ilgan kuningizni kiriting — shaxsiy hayot statistikangizni oling. Nafaslar, yurak urishlari, o'qilgan kitoblar...",
    create_report: "Shaxsiy Hisobotni Yaratish",
    affiliate: "Tavsiya Etamiz",
    footer: "© 2026 Hayot Kalkulyator Pro. Barcha huquqlar himoyalangan.",
  },
  en: {
    hero_title: "Calculate Your",
    hero_title_gradient: "Life",
    hero_desc: "Financial, health and life calculators. Tax, loan, investment, BMI, life expectancy — all in one place.",
    view_calculators: "View Calculators",
    personal_report: "Personal Report",
    stats: [
      { label: "Calculators", value: "50+" },
      { label: "Daily Users", value: "10K+" },
      { label: "Reports", value: "5K+" },
      { label: "Countries", value: "15+" },
    ],
    all_calculators: "All Calculators",
    select_category: "Select category and start calculating",
    categories: [
      { id: "financial", title: "💰 Financial", desc: "Tax, loan, investment calculators" },
      { id: "health", title: "🏃 Health", desc: "BMI, calories, life expectancy" },
      { id: "life", title: "⏰ Life & Time", desc: "Life report, time analysis" },
    ],
    viral_feature: "Viral Feature",
    life_report: ""Life Report" Generator",
    life_report_desc: "Enter your birth date — get your personal life statistics. Breaths, heartbeats, books read...",
    create_report: "Create Personal Report",
    affiliate: "Recommended",
    footer: "© 2026 Life Calculator Pro. All rights reserved.",
  }
};

const calculators = {
  financial: [
    { name: "Oylik Soliq / Salary Tax", slug: "salary-tax", desc: "Oylikdan soliq / Salary tax calculator" },
    { name: "Kredit / Loan", slug: "loan", desc: "Bank krediti / Bank loan calculator" },
    { name: "Investitsiya / Investment", slug: "investment", desc: "Sarmoya daromadi / Investment growth" },
    { name: "Ipoteka / Mortgage", slug: "mortgage", desc: "Uy-joy krediti / Mortgage calculator" },
    { name: "Valyuta / Currency", slug: "currency-profit", desc: "USD↔UZS va kripto / Currency profit" },
    { name: "Murakkab Foiz / Compound", slug: "compound-interest", desc: "Kapitalizatsiya / Compound interest" },
    { name: "Pensiya / Retirement", slug: "retirement", desc: "Pensiya jamg'armasi / Retirement savings" },
    { name: "FIRE / Financial Freedom", slug: "fire", desc: "Moliyaviy mustaqillik / Financial independence" },
  ],
  health: [
    { name: "BMI / Body Mass Index", slug: "bmi", desc: "Tana massasi indeksi / Body mass index" },
    { name: "Kaloriya / Calories", slug: "calories-burned", desc: "Mashq kaloriyasi / Calories burned" },
    { name: "Ideal Vazn / Ideal Weight", slug: "ideal-weight", desc: "Sog'lom vazn / Healthy weight range" },
    { name: "Suv / Water Intake", slug: "water-intake", desc: "Kunlik suv me'yori / Daily water intake" },
    { name: "Uyqi / Sleep Quality", slug: "sleep-quality", desc: "Uyqi tahlili / Sleep analysis" },
    { name: "Hayot Davomiyligi / Life Expectancy", slug: "life-expectancy", desc: "Taxminiy umr / Life expectancy" },
    { name: "Kaloriya Me'yori / Calorie Calculator", slug: "calorie-calculator", desc: "Kunlik kaloriya / Daily calories" },
    { name: "Yurak / Heart Rate", slug: "heart-rate", desc: "Yurak tezligi / Heart rate zones" },
  ],
  life: [
    { name: "Hayot / Life Time", slug: "life-time", desc: "Qolgan kunlar / Days left, breaths, heartbeats" },
    { name: "Yosh / Age", slug: "age", desc: "Aniq yosh / Exact age calculator" },
    { name: "Ish Soatlari / Work Hours", slug: "work-hours", desc: "Hayotda ishlagan vaqt / Lifetime work hours" },
    { name: "Ekran / Screen Time", slug: "screen-time", desc: "Telefon vaqti / Phone screen time" },
    { name: "Dam Olish / Weekends Left", slug: "weekends-left", desc: "Qolgan dam olish / Weekends remaining" },
    { name: "Kitob / Reading Time", slug: "reading-time", desc: "O'qilgan kitoblar / Books read in lifetime" },
    { name: "Yo'l / Commute Time", slug: "commute-time", desc: "Transportda vaqt / Time spent commuting" },
    { name: "Hisobot / Life Report", slug: "life-report", desc: "Shaxsiy PDF / Personal PDF report" },
  ]
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("financial");
  const [lang, setLang] = useState<"uz" | "en">("uz");

  const t = translations[lang];

  return (
    <main className="min-h-screen">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <AdBanner position="top" />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 ring-1 ring-primary-500/20">
            <Sparkles className="h-4 w-4" />
            50+ Calculators | SEO Optimized | Monetization Ready
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.hero_title}{" "}
            <span className="gradient-text">{t.hero_title_gradient}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {t.hero_desc}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="#calculators" className="btn-primary inline-flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              {t.view_calculators}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/calculators/life/life-report" className="btn-secondary inline-flex items-center gap-2">
              <Activity className="h-5 w-5" />
              {t.personal_report}
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {t.stats.map((stat, i) => (
            <div key={i} className="stat-card text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="px-4 py-12">
        <EmailCapture variant="hero" />
      </section>

      <AdBanner position="in-content" />

      <section id="calculators" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.all_calculators}
            </h2>
            <p className="mt-4 text-gray-400">{t.select_category}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {t.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                    : "bg-dark-card text-gray-400 hover:text-white border border-dark-border"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {calculators[activeCategory as keyof typeof calculators]?.map((calc, i) => (
              <motion.div
                key={calc.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  href={`/calculators/${activeCategory}/${calc.slug}`}
                  className="glass-card block p-5 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group"
                >
                  <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 mb-3">
                    <Calculator className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {calc.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{calc.desc}</p>
                  <div className="mt-3 flex items-center text-sm text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Calculate / Hisoblash <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gradient-to-b from-dark-bg to-primary-900/10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400 ring-1 ring-pink-500/20 mb-6">
              <Sparkles className="h-4 w-4" />
              {t.viral_feature}
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              {t.life_report}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {t.life_report_desc}
            </p>
            <Link href="/calculators/life/life-report" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              <Clock className="h-6 w-6" />
              {t.create_report}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <AdBanner position="bottom" />

      <section className="px-4 py-16">
        <EmailCapture variant="footer" />
      </section>

      <section className="px-4 py-12 border-t border-dark-border">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">💼 {t.affiliate}</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Best Loan Offers / Eng Yaxshi Kredit", desc: "From 2% / 2% dan boshlab", cta: "View / Ko'rish" },
              { title: "Insurance / Sug'urta", desc: "Online in 2 min / Online 2 daqiqada", cta: "Start / Boshlash" },
              { title: "Investment / Investitsiya", desc: "10% annual / 10% yillik", cta: "Sign up / Ro'yxatdan o'tish" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 text-center hover:border-primary-500/50 transition-all cursor-pointer">
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                <button className="mt-3 text-sm text-primary-400 hover:text-primary-300 font-medium">
                  {item.cta} →
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">* Affiliate links — we earn commission</p>
        </div>
      </section>

      <footer className="border-t border-dark-border px-4 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary-400" />
            <span className="font-bold text-white">Hayot Kalkulyator Pro / Life Calculator Pro</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy / Maxfiylik</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms / Shartlar</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact / Aloqa</Link>
          </div>
          <p className="text-sm text-gray-500">{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}
