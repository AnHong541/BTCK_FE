"use client";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LOGO_SVG = "M22 2C11.5 2 3 10.5 3 21s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19zm0 35c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm8-20h-7v-7h-2v7h-7v2h7v7h2v-7h7v-2z";
const MENU = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

function Logo() {
  return (
    <div className="flex items-center gap-4 min-w-[200px]">
      <img src="/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
      <svg width="50" height="50" viewBox="0 0 45 45" className="text-[#ac7c01]">
        <path fill="currentColor" d={LOGO_SVG} />
      </svg>
    </div>
  );
}

function Navigation() {
  const router = useRouter();
  return (
    <nav className="flex items-center gap-[50px]">
      {MENU.map(({ href, label }) => (
        <Button key={href} type="text" onClick={() => router.push(href)} className="!text-white !font-medium">
          {label}
        </Button>
      ))}
    </nav>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");
  const handleSearch = () => query.trim() && console.log("Search:", query);
  return (
    <div className="flex items-center gap-2 px-[6px] py-[6px] bg-white rounded-lg w-[400px]">
      <input
        type="text"
        placeholder="Bạn đang tìm gì..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 px-3 py-2 border-none bg-transparent outline-none text-[#333]"
      />
      <button onClick={handleSearch} className="px-[14px] py-2 bg-gradient-to-r from-[#d4a500] to-[#f0d11e] border-none rounded-md cursor-pointer text-white text-lg hover:opacity-90">
        <SearchOutlined />
      </button>
    </div>
  );
}

export default function AppHeader() {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-[#d4a500] to-[#f0d11e] px-8 h-[70px] shadow-md">
      <Logo />
      <div className="flex items-center gap-5">
        <SearchBar />
        <Navigation />
      </div>
    </header>
  );
}