import type { Metadata } from "next";
import { Cairo, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-display",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Operette — الأتمتة الذكية بدون تعقيد",
  description:
    "Operette منصة عربية تساعد الشركات الصغيرة والمتوسطة على تبسيط العمل الداخلي، ورفع الإنتاجية، واتخاذ القرار بثقة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${notoSansArabic.variable}`}>
        {children}
      </body>
    </html>
  );
}
