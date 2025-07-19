"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="font-bold text-lg text-blue-700 dark:text-blue-400">Paul Micky D Costa</div>
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={`font-medium transition-colors px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 ${pathname === link.href ? 'text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-200'}`}>{link.label}</Link>
        ))}
        {/* Dark/Light mode toggle placeholder */}
        <button
          className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <span className={resolvedTheme === "dark" ? "" : "hidden"}>🌙</span>
          <span className={resolvedTheme === "light" ? "" : "hidden"}>☀️</span>
        </button>
      </div>
    </nav>
  );
} 