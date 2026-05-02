import Link from "next/link";
import { FacebookOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

// ===== CONSTANTS & STYLES =====
const COLORS = {
  gradient: "linear-gradient(90deg, #d4a500 0%, #ffd700 100%)",
  white: "#fff",
};

const STYLES = {
  footer: {
    background: COLORS.gradient,
    padding: "24px 32px",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "16px",
  },
  topSection: {
    display: "flex" as const,
    alignItems: "flex-start" as const,
    gap: "16px",
  },
  logo: {
    width: 60,
    height: 60,
    objectFit: "contain" as const,
  },
  socialIcons: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "8px",
  },
  icon: {
    fontSize: "20px",
    color: COLORS.white,
    cursor: "pointer",
  },
  copyright: {
    color: COLORS.white,
    fontSize: "14px",
    fontWeight: 500,
    margin: 0,
    textAlign: "center" as const,
  },
};

const SOCIAL_LINKS = [
  {
    href: "https://facebook.com",
    icon: FacebookOutlined,
    label: "Facebook",
    target: "_blank" as const,
  },
  {
    href: "mailto:contact@company.com",
    icon: MailOutlined,
    label: "Email",
  },
  {
    href: "tel:+1234567890",
    icon: PhoneOutlined,
    label: "Phone",
  },
];

const COPYRIGHT_TEXT = "©2026 - 2026 Two-member limited liability company Inc.";

// ===== COMPONENTS =====
function LogoSection() {
  return (
    <img
      src="https://i.pinimg.com/originals/bf/79/0a/bf790a83f973ccba362e4c8ff0d6b352.jpg"
      alt="Logo"
      style={STYLES.logo}
    />
  );
}

function SocialMediaIcons() {
  return (
    <div style={STYLES.socialIcons}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            {...(link.target && { target: link.target })}
          >
            <Icon style={STYLES.icon} />
          </Link>
        );
      })}
    </div>
  );
}

function CopyrightText() {
  return <p style={STYLES.copyright}>{COPYRIGHT_TEXT}</p>;
}

// ===== MAIN COMPONENT =====
export default function Footer() {
  return (
    <footer style={STYLES.footer}>
      <div style={STYLES.container}>
        <div style={STYLES.topSection}>
          <LogoSection />
          <SocialMediaIcons />
        </div>
        <CopyrightText />
      </div>
    </footer>
  );
}