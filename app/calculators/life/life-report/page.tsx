"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Send, CheckCircle, Download, Share2, Mail, User, Calendar } from "lucide-react";
import Link from "next/link";
import AdBanner from "@/components/ads/AdBanner";

export default function LifeReport() {
  const [formData, setFormData] = useState({ name: "", email: "", birthDate: "", lifeExpectancy: "75" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <AdBanner position="top" />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4" /> Bosh sahifa
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 mb-4">
            <FileText className="h-4 w-4" /> Premium Feature
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Shaxsiy <span className="gradient-text">Hayot Hisoboti</span>
          </h1>
          <p className="text-gray-400">15 sahifali PDF hisobot — emailga yuboramiz</p>
        </motion.div>

        {!submitted ? (
          <motion.form onSubmit={handleSubmit} className="glass-card p-8 space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <User className="h-4 w-4 text-primary-400" /> Ismingiz
                </label>
                <input type="text" required className="input-field" placeholder="Masalan: Aziz" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary-400" /> Email
                </label>
                <input type="email" required className="input-field" placeholder="siz@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary-400" /> Tug'ilgan kuningiz
                </label>
                <input type="date" required className="input-field" value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Taxminiy umr (yil)</label>
                <input type="number" min="1" max="120" className="input-field" value={formData.lifeExpectancy} onChange={(e) => setFormData({...formData, lifeExpectancy: e.target.value})} />
              </div>
            </div>

            <div className="bg-dark-bg/50 rounded-xl p-6 space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary-400" /> Hisobotda nimalar bor:
              </h4>
              {[
                "📊 Umumiy hayot statistikasi (nafas, yurak, ovqat)",
                "⏰ Kunlik o'rtacha faoliyat vaqt jadvali",
                "📈 Vaqt taqsimoti diagrammasi (chart)",
                "🎯 Maqsadlar va ularga qolgan vaqt",
                "💡 Shaxsiy tavsiyalar va maslahatlar",
                "📅 Hayot davomida muhim sanalar",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-green-400 shrink-0" /> {item}
                </div>
              ))}
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg">
              <Send className="h-5 w-5" /> Hisobotni Olish (Bepul)
            </button>
            <p className="text-center text-xs text-gray-500">🔒 Ma'lumotlaringiz xavfsiz. Spam yubormaymiz.</p>
          </motion.form>
        ) : (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Ajoyib!</h3>
            <p className="text-gray-400 mb-2">Hisobotingiz tayyorlanmoqda...</p>
            <p className="text-primary-400 mb-6">{formData.email} manziliga 5 daqiqa ichida yuboramiz</p>
            <div className="flex justify-center gap-3">
              <button className="btn-secondary flex items-center gap-2">
                <Download className="h-4 w-4" /> PDF Yuklash
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Ulashish
              </button>
            </div>
          </motion.div>
        )}

        <AdBanner position="bottom" />
      </div>
    </main>
  );
}
