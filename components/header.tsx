"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MENU_ITEMS = [
  { href: "/", label: "Trang chủ" },
  { href: "/timeline", label: "Dòng thời gian" },
  { href: "/chi-huy", label: "Chỉ huy" },
  { href: "/mat-tran", label: "Mặt trận" },
  { href: "/lich-su", label: "Lịch sử" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-gold-400/20 bg-wood-900/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold-400 shadow-[0_0_15px_rgba(200,169,110,0.3)] transition-transform group-hover:scale-105">
            <img
              src="https://i.pinimg.com/originals/bf/79/0a/bf790a83f973ccba362e4c8ff0d6b352.jpg"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold tracking-wider text-gold-200">VIỆT NAM</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/80">Sử Việt Hùng Ca</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-gold-100/70 transition-colors hover:text-gold-200 group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
           <button className="rounded-full border border-gold-400/40 bg-gold-400/10 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-gold-200 transition-all hover:bg-gold-400 hover:text-wood-900 active:scale-95">
            Khám phá
          </button>
        </div>
      </div>
    </motion.header>
  );
}