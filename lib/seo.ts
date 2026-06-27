export interface SEOMeta {
  title: string;
  description: string;
  keywords: string;
}

export const defaultSEO: SEOMeta = {
  title: "Hayot Kalkulyator Pro | 50+ Kalkulyator Platforma",
  description: "50 dan ortiq bepul kalkulyatorlar: moliyaviy, salomatlik, hayot. SEO optimallashtirilgan traffic platforma.",
  keywords: "kalkulyator, soliq, kredit, investitsiya, BMI, hayot davomiyligi, Uzbekistan",
};

export const calculatorMeta: Record<string, SEOMeta> = {
  "salary-tax": {
    title: "Oylik Soliq Kalkulyatori 2024",
    description: "O'zbekistonda oylik ish haqidan soliq hisoblash. Daromad solig'i, ijtimoiy soliq, pensiya jamg'armasi.",
    keywords: "oylik soliq, ish haqi hisoblagich, O'zbekiston soliq, daromad solig'i",
  },
  "loan": {
    title: "Kredit Kalkulyatori",
    description: "Bank krediti va foiz hisobi. Ipoteka, avtokredit, mikrokredit.",
    keywords: "kredit kalkulyatori, bank foizi, ipoteka hisoblagich",
  },
  "investment": {
    title: "Investitsiya O'sishi Kalkulyatori",
    description: "Sarmoya daromadi va kapitalizatsiya hisobi. Kompaund foiz.",
    keywords: "investitsiya kalkulyatori, kompaund foiz, sarmoya hisoblagich",
  },
  "bmi": {
    title: "BMI Kalkulyatori",
    description: "Tana massasi indeksi hisoblash. Sog'lom vazn, ideal vazn diapazoni.",
    keywords: "BMI calculator, tana massasi indeksi, ideal vazn",
  },
  "life-time": {
    title: "Hayot Kalkulyatori | Viral Hisoblagich",
    description: "Nafaslar, yurak urishlari, o'qilgan kitoblar. Hayot statistikasi.",
    keywords: "hayot kalkulyatori, nafas hisoblagich, hayot statistikasi",
  },
  "life-report": {
    title: "Shaxsiy Hayot Hisoboti | PDF Generator",
    description: "15 sahifali shaxsiy hayot hisoboti. Emailga PDF yuborish.",
    keywords: "hayot hisoboti, PDF hisobot, shaxsiy tahlil",
  },
};
