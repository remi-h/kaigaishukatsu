import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-zen-kaku-gothic-new',
})

export const metadata: Metadata = {
  title: "海外新卒就活",
  description: "海外での新卒就活を見据える中高大学生の皆さんへ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKakuGothicNew.className} ${notoSansJP.className}`}>
        <Header />
        <div className="wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
