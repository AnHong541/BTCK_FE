"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useAuth } from "@/app/context/AuthContext";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MENU_ITEMS = [
  { href: "/", label: "Trang chủ" },
  { href: "/timeline", label: "Dòng thời gian" },
  { href: "/tran-chien", label: "Trận chiến" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push("/");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-[100] w-full border-b border-gold-400/20 bg-wood-900/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold-400 shadow-[0_0_20px_rgba(140,109,49,0.3)] transition-transform group-hover:scale-105">
            <img
              src="/logo.png"
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

        {/* Action Button / User Menu */}
        <div className="flex items-center gap-4">
          {!isClient || !user ? (
            <Link href="/login" className="rounded-full border border-gold-400/40 bg-gold-400/10 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-gold-200 transition-all hover:bg-gold-400 hover:text-wood-900 active:scale-95 inline-block">
              Đăng nhập
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-200 transition-all hover:bg-gold-400 hover:text-wood-900 active:scale-95"
              >
                <UserOutlined className="text-sm" />
                <span>{user.username}</span>
              </button>

              {/* User Menu Dropdown */}
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 rounded-lg border border-gold-400/20 bg-wood-800 shadow-xl overflow-hidden z-[1000]"
                >
                  <div className="px-4 py-3 border-b border-gold-400/10">
                    <p className="text-xs text-gold-400 font-semibold">Tài khoản</p>
                    <p className="text-sm text-gold-200 font-bold mt-1">{user.username}</p>
                    <p className="text-xs text-gold-100/60 mt-1">
                      {user.role === "admin" ? "Quản trị viên" : "Người dùng thường"}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 text-left text-sm font-semibold text-gold-200 hover:bg-wood-700/50 transition flex items-center gap-2"
                  >
                    <LogoutOutlined className="text-base" />
                    Đăng xuất
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}