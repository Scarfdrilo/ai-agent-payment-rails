import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Agent Payment Rails | Decentralized AI Commerce",
  description: "Decentralized payment infrastructure for autonomous AI agents to transact value securely across networks. Built on Monad blockchain.",
  keywords: ["AI agents", "blockchain", "payments", "Monad", "stablecoins", "USDC", "DAI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
