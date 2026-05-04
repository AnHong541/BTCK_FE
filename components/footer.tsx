import Link from "next/link";
import { FacebookOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const SOCIALS = [
  { href: "https://facebook.com", icon: FacebookOutlined, label: "Facebook", target: "_blank" as const },
  { href: "mailto:contact@company.com", icon: MailOutlined, label: "Email" },
  { href: "tel:+1234567890", icon: PhoneOutlined, label: "Phone" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#d4a500] to-[#ffd700] px-8 py-6">
      <div className="max-w-[2280px] mx-auto flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <img src="/logo.png" alt="Logo" className="w-20 h-20" />
          <div className="flex flex-col gap-2">
            {SOCIALS.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.label} href={link.href} {...(link.target && { target: link.target })}>
                  <Icon className="text-xl text-white cursor-pointer hover:opacity-80" />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="text-white text-sm font-medium text-center">©2026 - 2026 Two-member limited liability company Inc.</p>
      </div>
    </footer>
  );
}