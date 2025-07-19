"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full gap-0 md:gap-8 px-4">
        {/* Left Cover Image */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/4 h-full">
          <div className="relative w-full h-[350px] max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white/10 dark:bg-black/30">
            <Image
              src="/img/WhatsApp Image 2025-06-27 at 3.11.31 PM.jpeg"
              alt="Left cover painting"
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        </div>
        {/* Center Profile Info and Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col items-center justify-center gap-6 py-12 z-10 bg-white/80 dark:bg-black/60 rounded-2xl shadow-xl backdrop-blur-md"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg bg-white bg-opacity-80 dark:bg-black/80 mx-auto">
            <Image src="/img/WhatsApp Image 2025-06-27 at 3.17.43 PM.jpeg" alt="Profile picture" width={224} height={224} className="object-cover w-full h-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white drop-shadow-lg">Paul Micky D Costa</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-200 drop-shadow">Software Engineer & Data Scientist</h2>
          <p className="max-w-xl text-lg text-gray-700 dark:text-gray-200 mt-2 drop-shadow">
            Passionate about building scalable full-stack applications and leveraging machine learning to solve real-world problems. Experienced in Python, C++, JavaScript, and modern frameworks. Seeking opportunities at top tech companies to make an impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link href="/PaulMickyDCosta_CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-800">View CV</button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-800">Contact Me</button>
            </Link>
            <Link href="/projects">
              <button className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-800">View Projects</button>
            </Link>
          </div>
        </motion.div>
        {/* Right Cover Image */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/4 h-full">
          <div className="relative w-full h-[350px] max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white/10 dark:bg-black/30">
            <Image
              src="/img/IMG_20250611_200002.jpg"
              alt="Right cover painting"
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
