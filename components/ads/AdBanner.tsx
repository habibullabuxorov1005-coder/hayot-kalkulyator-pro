"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  position: "top" | "in-content" | "bottom" | "sidebar";
}

export default function AdBanner({ position }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (e) {
        console.log("AdSense error:", e);
      }
    }
  }, []);

  const getAdSize = () => {
    switch (position) {
      case "top":
      case "bottom":
        return { width: "728px", height: "90px", className: "mx-auto" };
      case "in-content":
        return { width: "728px", height: "90px", className: "mx-auto" };
      case "sidebar":
        return { width: "300px", height: "250px", className: "" };
      default:
        return { width: "728px", height: "90px", className: "mx-auto" };
    }
  };

  const size = getAdSize();

  return (
    <div className={`my-6 ${size.className}`}>
      <div 
        ref={adRef}
        className="bg-dark-card/50 border border-dashed border-dark-border rounded-xl overflow-hidden"
        style={{ maxWidth: size.width, minHeight: size.height }}
      >
        <ins
          className="adsbygoogle block"
          style={{ display: "block", width: size.width, height: size.height }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <div className="flex items-center justify-center h-full min-h-[90px] text-gray-500 text-sm">
          <span className="bg-primary-500/10 px-3 py-1 rounded-full text-primary-400 text-xs">
            📢 Reklama joyi - AdSense tayyor
          </span>
        </div>
      </div>
    </div>
  );
}
