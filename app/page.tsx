"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, TrendingUp, Heart, Clock, DollarSign, 
  Activity, PiggyBank, CreditCard, Weight, Timer,
  ArrowRight, Sparkles, Zap
} from "lucide-react";
import Link from "next/link";
import AdBanner from "@/components/ads/AdBanner";
import EmailCapture from "@/components/email-capture/EmailCapture";

const categories = [
  {
    id: "financial",
    title: "💰 Moliyaviy",
    description: "Soliq, kredit, investitsiya hisoblagichlari",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
    calculators: [
      { name: "Oylik Soliq Kalkulyatori", slug: "salary-tax", desc: "Oylikdan soliq va ish haqi hisobi" },
      { name: "Kredit Kalkulyatori", slug: "loan", desc: "Bank krediti va foiz hisobi" },
      { name: "Investitsiya O'sishi", slug: "investment", desc: "Sarmoya daromadi kalkulyatori" },
      { name: "Ipoteka Kalkulyatori", slug: "mortgage", desc: "Uy-joy krediti hisoblagichi" },
      { name: "Valyuta Foydasi", slug: "currency-profit", desc: "USD↔UZS va kripto foyda" },
      { name: "Murakkab Foiz", slug: "compound-interest", desc: "Kapitalizatsiya bilan hisob" },
      { name: "Pensiya Jamg'armasi", slug: "retirement", desc: "Pensiya uchun jamg'arma hisobi" },
      { name: "Moliyaviy Mustaqillik", slug: "fire", desc: "FIRE harakatlanish tezligi" },
    ]
  },
  {
    id: "health",
    title: "🏃 Salomatlik",
    description: "BMI, kaloriya, hayot davomiyligi",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    calculators: [
      { name: "BMI Kalkulyatori", slug: "bmi", desc: "Tana massasi indeksi" },
      { name: "Kaloriya Sarfi", slug: "calories-burned", desc: "Mashq kaloriyasi hisobi" },
      { name: "Ideal Vazn", slug: "ideal-weight", desc: "Sog'lom vazn diapazoni" },
      { name: "Suv Istemoli", slug: "water-intake", desc: "Kunlik suv me'yori" },
      { name: "Uyqi Sifati", slug: "sleep-quality", desc: "Uyqi tahlili va maslahat" },
      { name: "Hayot Davomiyligi", slug: "life-expectancy", desc: "Taxminiy umr uzunligi" },
      { name: "Kaloriya Hisoblagich", slug: "calorie-calculator", desc: "Kunlik kaloriya me'yori" },
      { name: "Yurak Tezligi", slug: "heart-rate", desc: "Maksimal va maqsadli zonalar" },
    ]
  },
  {
    id: "life",
    title: "⏰ Hayot & Vaqt",
    description: "Hayot hisoboti, vaqt tahlili, viral toollar",
    icon: Clock,
    color: "from-blue-500 to-indigo-600",
    calculators: [
      { name: "Hayot Kalkulyatori", slug: "life-time", desc: "Qolgan kunlar, nafas, yurak urishi" },
      { name: "Yosh Hisoblagich", slug: "age", desc: "Aniq yosh va tug'ilgan kun" },
      { name: "Ish Soatlari", slug: "work-hours", desc: "Hayotda ishlagan vaqt" },
      { name: "Ekran Vaqt", slug: "screen-time", desc: "Telefon/kompyuter vaqti" },
      { name: "Dam Olish Kunlari", slug: "weekends-left", desc: "Qolgan dam olish kunlari" },
      { name: "Kitob O'qish", slug: "reading-time", desc: "Hayotda o'qilgan kitoblar" },
      { name: "Yo'l Vaqt", slug: "commute-time", desc: "Transportda o'tgan vaqt" },
      { name: "Hayot Hisoboti", slug: "life-report", desc: "Shaxsiy PDF hisobot" },
    ]
  }
];

const stats = [
  { label: "Kalkulyatorlar", value: "50+", icon: Calculator },
  { label: "Kunlik Foydalanuvchi", value: "10K+", icon: TrendingUp },
  { label: "Hisobotlar", value: "5K+", icon: Activity },
  { label: "Mamlakatlar", value: "15+", icon: Zap },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("financial");

  return (
    <main className="min-h-screen">
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
            50+ Kalkulyator | SEO Optimallashtirilgan | Monetizatsiya Tayyor
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hayotingizni{" "}
            <span className="gradient-text">Hisoblang</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Moliyaviy, salomatlik va hayot kalkulyatorlari. Soliq, kredit, investitsiya, 
            BMI, hayot davomiyligi — barchasi bir joyda. Shaxsiy hisobot va viral toollar.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="#calculators" className="btn-primary inline-flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Kalkulyatorlarni Ko'rish
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/calculators/life/life-report" className="btn-secondary inline-flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Shaxsiy Hisobot
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-card text-center">
              <stat.icon className="mx-auto h-8 w-8 text-primary-400 mb-2" />
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
              Barcha <span className="gradient-text">Kalkulyatorlar</span>
            </h2>
            <p className="mt-4 text-gray-400">Kerakli bo'limni tanlang va hisoblashni boshlang</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                    : "bg-dark-card text-gray-400 hover:text-white border border-dark-border"
                }`}
              >
                <cat.icon className="h-5 w-5" />
                {cat.title}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {categories
              .find((c) => c.id === activeCategory)
              ?.calculators.map((calc, i) => (
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
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${
                      categories.find(c => c.id === activeCategory)?.color
                    } mb-3`}>
                      <Calculator className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">{calc.desc}</p>
                    <div className="mt-3 flex items-center text-sm text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Hisoblash <ArrowRight className="ml-1 h-4 w-4" />
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
              Viral Feature
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              "Hayot Hisoboti" Generator
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Tug'ilgan kuningizni kiriting — shaxsiy hayot statistikangizni oling. 
              Nafaslar, yurak urishlari, o'qilgan kitoblar...
            </p>
            <Link href="/calculators/life/life-report" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              <Timer className="h-6 w-6" />
              Shaxsiy Hisobotni Yaratish
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
          <h3 className="text-xl font-bold text-white mb-6 text-center">💼 Tavsiya Etamiz</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Eng Yaxshi Kredit Takliflari", desc: "2% dan boshlab", cta: "Ko'rish" },
              { title: "Sug'urta Hisoblash", desc: "Online 2 daqiqada", cta: "Boshlash" },
              { title: "Investitsiya Platformasi", desc: "10% yillik daromad", cta: "Ro'yxatdan o'tish" },
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
          <p className="text-xs text-gray-500 text-center mt-4">* Affiliate links — bizga komissiya to'laydi</p>
        </div>
      </section>

      <footer className="border-t border-dark-border px-4 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary-400" />
            <span className="font-bold text-white">Hayot Kalkulyator Pro</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Maxfiylik</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Shartlar</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Aloqa</Link>
          </div>
          <p className="text-sm text-gray-500">© 2024 Hayot Kalkulyator Pro. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </main>
  );
}
