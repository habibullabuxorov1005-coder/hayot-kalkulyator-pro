import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hayot Kalkulyator Pro | Life Calculator Pro - 50+ Calculators",
  description: "50+ free calculators: salary tax, loan, investment, BMI, life expectancy. SEO optimized traffic platform. 50 dan ortiq bepul kalkulyatorlar.",
  keywords: "calculator, tax calculator, loan calculator, investment, BMI, life expectancy, salary calculator, Uzbekistan, kalkulyator, soliq, kredit",
  authors: [{ name: "Hayot Kalkulyator Pro" }],
  openGraph: {
    title: "Hayot Kalkulyator Pro / Life Calculator Pro",
    description: "50+ calculators for finance, health and life. All in one place.",
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
