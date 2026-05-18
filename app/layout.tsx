import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Redeem Giftcode CFL 2026 - Nhập Code Crossfire Mobile Tự Động",
  description:
    "Công cụ Auto Redeem Giftcode CFL (Crossfire Legends) nhanh nhất 2026. Hỗ trợ nhập hàng loạt code, lưu danh sách ID nhân vật an toàn và hiệu quả.",
  keywords: ["CFL", "CFM", "giftcode cfm", "auto redeem cfm", "nhập code cf mobile", "minh quốc cfm"],
  authors: [{ name: "Trần Minh Quốc", url: "https://www.facebook.com/tranminhquocreal" }],
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000"),
  icons: {
    icon: "https://cdn-mainsite-aka.vnggames.com/products/cfl/favicon.png",
    shortcut: "https://cdn-mainsite-aka.vnggames.com/products/cfl/favicon.png",
  },
  openGraph: {
    title: "Auto Redeem Giftcode CFL 2026 - Nhập Code Tự Động",
    description: "Nhập hàng loạt Giftcode Crossfire LEGENDS chỉ trong 1 click. Tool cực mượt bởi Minh Quốc.",
    type: "website",
    images: [
      {
        url: "https://cdn-mainsite-aka.vnggames.com/products/cfl/mainsite/dist/assets/cfl-ms-25-header/images/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Auto Redeem Giftcode CFL 2026",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative min-h-screen bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
        <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed fixed inset-y-0 left-4 sm:left-10 w-10 pointer-events-none"></div>
        <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed fixed inset-y-0 right-4 sm:right-10 w-10 pointer-events-none"></div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

