import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hayot Kalkulyator Pro | 50+ Kalkulyator - Moliyaviy, Salomatlik, Hayot",
  description: "50 dan ortiq bepul kalkulyatorlar: oylik soliq, kredit, investitsiya, BMI, hayot davomiyligi, nafas, yurak urishi hisoblagichlari. SEO optimallashtirilgan traffic platforma.",
  keywords: "kalkulyator, soliq hisoblagich, kredit kalkulyatori, investitsiya, BMI, hayot davomiyligi, oylik hisoblagich, Uzbekistan",
  authors: [{ name: "Hayot Kalkulyator Pro" }],
  openGraph: {
    title: "Hayot Kalkulyator Pro - 50+ Kalkulyator Platforma",
    description: "Barcha hayotiy hisob-kitoblaringiz bir joyda. Moliyaviy, salomatlik va hayot kalkulyatorlari.",
    type: "website",
    locale: "uz_UZ",
  },
  verification: {
    google: "yepGVIoDwXjQ2ykxxZKjbJA8mguDEdBWu5XmjUMGUCs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark">
      <head>
        <meta name="google-site-verification" content="yepGVIoDwXjQ2ykxxZKjbJA8mguDEdBWu5XmjUMGUCs" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"></script>
      </head>
      <body className="bg-dark-bg text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
