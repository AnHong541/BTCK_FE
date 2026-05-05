"use client";

import React from "react";
import Link from "next/link";
import { FacebookOutlined, MailOutlined, PhoneOutlined, GithubOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gold-400/20 bg-wood-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="https://i.pinimg.com/originals/bf/79/0a/bf790a83f973ccba362e4c8ff0d6b352.jpg"
                alt="Logo"
                className="h-10 w-10 rounded-full border border-gold-400/50"
              />
              <span className="text-xl font-display font-bold tracking-wider text-gold-200">VIỆT NAM</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-gold-100/60">
              Trang web lưu trữ và tái hiện các mốc lịch sử hào hùng của dân tộc Việt Nam thông qua bản đồ tương tác và các tư liệu quý giá. Chúng tôi mong muốn khơi dậy lòng tự hào dân tộc trong mỗi người dân Việt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-display text-sm font-bold uppercase tracking-widest text-gold-400">Liên kết</h4>
            <ul className="space-y-4 text-sm text-gold-100/60">
              <li><Link href="/lich-su" className="transition-colors hover:text-gold-200">Lịch sử đấu tranh</Link></li>
              <li><Link href="/chi-huy" className="transition-colors hover:text-gold-200">Người chỉ huy</Link></li>
              <li><Link href="/mat-tran" className="transition-colors hover:text-gold-200">Mặt trận trọng điểm</Link></li>
              <li><Link href="/timeline" className="transition-colors hover:text-gold-200">Dòng thời gian</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-6 font-display text-sm font-bold uppercase tracking-widest text-gold-400">Kết nối</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-200 transition-all hover:bg-gold-400 hover:text-wood-900">
                <FacebookOutlined className="text-lg" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-200 transition-all hover:bg-gold-400 hover:text-wood-900">
                <GithubOutlined className="text-lg" />
              </a>
              <a href="mailto:contact@suviethungca.vn" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-200 transition-all hover:bg-gold-400 hover:text-wood-900">
                <MailOutlined className="text-lg" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-gold-100/60">
              <div className="flex items-center gap-2">
                <PhoneOutlined />
                <span>+84 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gold-400/10 pt-8 text-center text-xs tracking-widest text-gold-400/40 uppercase">
          © 2026 VIỆT NAM - SỬ VIỆT HÙNG CA. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.
        </div>
      </div>
    </footer>
  );
}