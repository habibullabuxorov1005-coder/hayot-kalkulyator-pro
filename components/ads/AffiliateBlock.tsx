"use client";

import { ExternalLink, Star, TrendingUp, Shield } from "lucide-react";

interface AffiliateOffer {
  title: string;
  description: string;
  cta: string;
  rating: number;
  badge?: string;
  link: string;
}

const offers: AffiliateOffer[] = [
  {
    title: "Agrobank - Mikrokredit",
    description: "2% dan boshlab, 36 oygacha. Online ariza 5 daqiqada.",
    cta: "Ariza Topshirish",
    rating: 4.8,
    badge: "Eng Mashhur",
    link: "#affiliate-agrobank"
  },
  {
    title: "Kapital Sug'urta",
    description: "Avto va uy-joy sug'urtasi. 20% chegirma online.",
    cta: "Hisoblash",
    rating: 4.6,
    badge: "Chegirma",
    link: "#affiliate-kapital"
  },
  {
    title: "Freedom Finance",
    description: "AQSh fond bozori. 0% komissiya birinchi 3 oy.",
    cta: "Hisob Ochish",
    rating: 4.9,
    badge: "Eng Yaxshi",
    link: "#affiliate-freedom"
  }
];

export default function AffiliateBlock() {
  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary-400" />
        <h3 className="text-lg font-semibold text-white">Tavsiya Etamiz</h3>
        <span className="text-xs text-gray-500 ml-auto">* Affiliate links</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {offers.map((offer, i) => (
          <a
            key={i}
            href={offer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 hover:border-primary-500/50 transition-all duration-300 group relative overflow-hidden"
          >
            {offer.badge && (
              <span className="absolute top-3 right-3 bg-primary-500/20 text-primary-400 text-xs px-2 py-1 rounded-full font-medium">
                {offer.badge}
              </span>
            )}

            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className={`h-3 w-3 ${j < Math.floor(offer.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                />
              ))}
              <span className="text-xs text-gray-400 ml-1">{offer.rating}</span>
            </div>

            <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
              {offer.title}
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-3">{offer.description}</p>

            <div className="flex items-center text-sm text-primary-400 font-medium">
              {offer.cta}
              <ExternalLink className="ml-1 h-3 w-3" />
            </div>

            <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
              <Shield className="h-3 w-3" />
              Xavfsiz link
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
