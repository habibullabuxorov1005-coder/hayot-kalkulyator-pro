"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, FileText, Sparkles } from "lucide-react";

interface EmailCaptureProps {
  variant?: "hero" | "inline" | "footer";
}

export default function EmailCapture({ variant = "inline" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !birthYear) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass-card p-8 max-w-2xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 mb-4">
          <Sparkles className="h-4 w-4" />
          Bepul Shaxsiy Hisobot
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          📊 Sizning Hayot Hisobotingiz
        </h3>
        <p className="text-gray-400 mb-6">
          Email va tug'ilgan yilingizni kiriting — 15 sahifali PDF hisobotni oling.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Ismingiz" value={name} onChange={(e) => setName(e.target.value)} className="input-field flex-1" required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field flex-1" required />
            <input type="number" placeholder="Tug'ilgan yil" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className="input-field w-full sm:w-32" min="1900" max="2024" required />
            <button type="submit" disabled={loading} className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
              {loading ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="h-4 w-4" /> Hisobotni Olish</>}
            </button>
          </form>
        ) : (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-3 py-4">
            <CheckCircle className="h-12 w-12 text-green-400" />
            <p className="text-white font-semibold">Ajoyib! Hisobotingiz yuborildi!</p>
          </motion.div>
        )}
        <p className="text-xs text-gray-500 mt-4">🔒 Ma'lumotlaringiz xavfsiz. Spam yubormaymiz.</p>
      </motion.div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="glass-card p-8 max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-5 w-5 text-primary-400" />
              <h3 className="text-xl font-bold text-white">Yangiliklarga Obuna</h3>
            </div>
            <p className="text-gray-400 text-sm">Yangi kalkulyatorlar, moliyaviy maslahatlar va eksklyuziv takliflar.</p>
          </div>
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" placeholder="Ismingiz" value={name} onChange={(e) => setName(e.target.value)} className="input-field" required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
                <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                  {loading ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="h-4 w-4" /> Obuna</>}
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Rahmat!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 my-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-primary-400" />
        <h4 className="font-semibold text-white">Shaxsiy Hisobot</h4>
      </div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field flex-1" required />
          <button type="submit" disabled={loading} className="btn-primary flex items-center justify-center gap-2">
            {loading ? <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="h-4 w-4" /> Yuborish</>}
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle className="h-5 w-5" />
          <span>Hisobot yuborildi!</span>
        </div>
      )}
    </div>
  );
}
