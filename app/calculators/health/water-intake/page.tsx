"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-12 max-w-md mx-auto">
          <Construction className="h-16 w-16 text-primary-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-4">Tez orada!</h1>
          <p className="text-gray-400 mb-6">Bu kalkulyator hozircha tayyorlanmoqda.</p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Bosh sahifa
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
