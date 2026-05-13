import { Press_Start_2P, VT323, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "ACME Lab | Acme Computational Molecular Evolution Group",
  description: "High-performance software and statistical models for molecular evolution, phylogenetics, and epidemiology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${pressStart2P.variable} ${vt323.variable} ${shareTechMono.variable} font-body bg-black text-green-500 min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
