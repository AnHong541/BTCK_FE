"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

// ===== CONSTANTS & STYLES =====
const COLORS = {
  gradient: "linear-gradient(90deg, #d4a500 0%, #f0d11e 100%)",
  white: "#fff",
  accent: "#ac7c01",
};

const STYLES = {
  header: {
    background: COLORS.gradient,
    padding: "0 32px",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    height: "70px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  logoContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: "16px",
    minWidth: "200px",
  },
  logo: {
    width: 50,
    height: 50,
    objectFit: "contain" as const,
  },
  nav: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: "50px",
    marginLeft: "auto",
  },
  navButton: {
    background: "transparent",
    border: "none",
    color: COLORS.white,
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    padding: "8px 12px",
    height: "auto",
  },
};

const MENU_ITEMS = [
  { ref: "/", label: "Home" },
  { ref: "/about", label: "About" },
  { ref: "/contact", label: "Contact" },
  { ref: "/login", label: "Login" },
];

// ===== COMPONENTS =====
function LogoSection() {
  return (
    <div style={STYLES.logoContainer}>
      <img
        src="https://i.pinimg.com/originals/bf/79/0a/bf790a83f973ccba362e4c8ff0d6b352.jpg"
        alt="Logo"
        style={STYLES.logo}
      />
      <svg width="50" height="50" viewBox="0 0 45 45" style={{ color: COLORS.accent }}>
        <path
          fill="currentColor"
          d="M22 2C11.5 2 3 10.5 3 21s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19zm0 35c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm8-20h-7v-7h-2v7h-7v2h7v7h2v-7h7v-2z"
        />
      </svg>
    </div>
  );
}

function NavMenu() {
  const router = useRouter();

  return (
    <nav style={STYLES.nav}>
      {MENU_ITEMS.map((item) => (
        <Button
          key={item.ref}
          type="text"
          onClick={() => router.push(item.ref)}
          style={STYLES.navButton}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}

// ===== MAIN COMPONENT =====
export default function AppHeader() {
  return (
    <header style={STYLES.header}>
      <LogoSection />
      <NavMenu />
    </header>
  );
}