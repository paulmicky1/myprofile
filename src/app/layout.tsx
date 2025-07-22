import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";
import DynamicNetworkBG from "../components/DynamicNetworkBG";

export const metadata: Metadata = {
  title: "Paul Micky D Costa | Software Engineer & Data Scientist",
  description: "Portfolio of Paul Micky D Costa - Full-stack Developer, Data Scientist, ML Enthusiast.",
  keywords: [
    "Paul Micky D Costa",
    "Software Engineer",
    "Data Scientist",
    "Full-stack",
    "Machine Learning",
    "Portfolio",
    "Google",
    "YouTube"
  ],
  authors: [{ name: "Paul Micky D Costa" }],
  openGraph: {
    title: "Paul Micky D Costa | Software Engineer & Data Scientist",
    description: "Portfolio of Paul Micky D Costa - Full-stack Developer, Data Scientist, ML Enthusiast.",
    url: "https://paulmickydcosta.com/",
    siteName: "paulmickydcosta.com",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
        {/* Out-of-the-box animated data science background */}
        <DynamicNetworkBG />
        <div className="relative z-10 bg-white/10 dark:bg-black/20 backdrop-blur-xl min-h-screen rounded-2xl shadow-2xl mx-auto max-w-7xl p-2 md:p-8 border border-white/20 dark:border-gray-800">
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
