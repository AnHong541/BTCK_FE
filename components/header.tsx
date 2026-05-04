"use client";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ====== CONSTANTS ======
const LOGO_SVG_PATH =
  "M22 2C11.5 2 3 10.5 3 21s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19zm0 35c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm8-20h-7v-7h-2v7h-7v2h7v7h2v-7h7v-2z";

const MENU_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

// ====== STYLE UTILITIES ======
const flexCenter = {
  display: "flex" as const,
  alignItems: "center" as const,
};

const colors = {
  gradient: "linear-gradient(90deg, #d4a500 0%, #f0d11e 100%)",
  white: "#fff",
  accent: "#ac7c01",
};

// ====== COMPONENT STYLES ======
const headerStyle = {
  ...flexCenter,
  justifyContent: "space-between" as const,
  background: colors.gradient,
  padding: "0 32px",
  height: "70px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
};

const logoContainerStyle = {
  ...flexCenter,
  gap: "16px",
  minWidth: "200px",
};

const logoImageStyle = {
  width: 50,
  height: 50,
  objectFit: "contain" as const,
};

const rightSectionStyle = {
  ...flexCenter,
  gap: "20px",
};

const navStyle = {
  ...flexCenter,
  gap: "50px",
};

const navButtonStyle = {
  background: "transparent",
  border: "none",
  color: colors.white,
  fontSize: "16px",
  fontWeight: 500,
  cursor: "pointer",
  padding: "8px 12px",
  height: "auto",
};

const searchContainerStyle = {
  ...flexCenter,
  gap: "8px",
  padding: "6px 6px",
  backgroundColor: colors.white,
  borderRadius: "8px",
  width: "400px",
};

const searchInputStyle = {
  flex: 1,
  padding: "8px 12px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  backgroundColor: "transparent",
  outline: "none" as any,
  color: "#333",
};

const searchButtonStyle = {
  ...flexCenter,
  justifyContent: "center" as const,
  background: colors.gradient,
  border: "none",
  borderRadius: "6px",
  padding: "8px 14px",
  cursor: "pointer",
  color: colors.white,
  fontSize: "18px",
  transition: "opacity 0.2s",
};

// ====== COMPONENTS ======
function Logo() {
  return (
    <div style={logoContainerStyle}>
      <img src="/logo.png" alt="Logo" style={logoImageStyle} />
      <svg
        width="50"
        height="50"
        viewBox="0 0 45 45"
        style={{ color: colors.accent }}
      >
        <path fill="currentColor" d={LOGO_SVG_PATH} />
      </svg>
    </div>
  );
}

function Navigation() {
  const router = useRouter();

  return (
    <nav style={navStyle}>
      {MENU_ITEMS.map(({ href, label }) => (
        <Button
          key={href}
          type="text"
          onClick={() => router.push(href)}
          style={navButtonStyle}
        >
          {label}
        </Button>
      ))}
    </nav>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Search for:", query);
      // TODO: Implement search API
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isHover: boolean) => {
    (e.currentTarget).style.opacity = isHover ? "0.9" : "1";
  };

  return (
    <div style={searchContainerStyle}>
      <input
        type="text"
        placeholder="Bạn đang tìm gì..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        style={searchInputStyle}
      />
      <button
        onClick={handleSearch}
        onMouseEnter={(e) => handleButtonHover(e, true)}
        onMouseLeave={(e) => handleButtonHover(e, false)}
        style={searchButtonStyle}
      >
        <SearchOutlined />
      </button>
    </div>
  );
}

// ====== MAIN COMPONENT ======
export default function AppHeader() {
  return (
    <header style={headerStyle}>
      <Logo />
      <div style={rightSectionStyle}>
        <Search />
        <Navigation />
      </div>
    </header>
  );
}