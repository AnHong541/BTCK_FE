"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMMANDERS } from "@/lib/data";
import { 
  ArrowLeftOutlined, 
  UserOutlined, 
  EnvironmentOutlined, 
  HistoryOutlined,
  ThunderboltOutlined
} from "@ant-design/icons";

interface Props {
  params: Promise<{ id: string }>;
}

export default function CommanderDetailPage({ params }: Props) {
  const { id } = use(params);
  const commander = COMMANDERS.find((c) => c.id === id);

  if (!commander) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-wood-900 font-body text-gold-100">
      {/* Navigation */}
      <div className="container mx-auto max-w-5xl px-6 pt-12">
        <Link 
          href="/chi-huy" 
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400 transition-colors hover:text-gold-200"
        >
          <ArrowLeftOutlined className="transition-transform group-hover:-translate-x-1" />
          Danh sách chỉ huy
        </Link>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Avatar/Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border-4 border-gold-400/20 shadow-2xl">
              {commander.imageUrl ? (
                <img 
                  src={commander.imageUrl} 
                  alt={commander.name} 
                  className="h-full w-full object-cover grayscale transition-all hover:grayscale-0" 
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-wood-800 text-gold-400/20">
                  <UserOutlined className="text-9xl" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                  {commander.era}
                </span>
                <h1 className="font-display text-4xl font-bold text-gold-200">{commander.name}</h1>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-gold-400/10 bg-gold-400/5 px-4 py-2 text-xs font-bold text-gold-400">
                <HistoryOutlined /> {commander.title}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-gold-400/10 bg-gold-400/5 px-4 py-2 text-xs font-bold text-gold-400">
                <EnvironmentOutlined /> {commander.province}
              </div>
            </div>

            <h2 className="mb-6 font-display text-2xl font-bold text-gold-200 underline decoration-gold-400/20 underline-offset-8">
              Tiểu sử & Cống hiến
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-gold-100/70 italic">
              "{commander.description}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard 
                icon={<ThunderboltOutlined />} 
                title="Chiến dịch lớn" 
                content={commander.province} 
              />
              <InfoCard 
                icon={<HistoryOutlined />} 
                title="Thời kỳ" 
                content={commander.era} 
              />
            </div>
            
            <div className="mt-12 p-8 rounded-2xl border border-gold-400/10 bg-wood-800/30">
               <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">Ghi chú lịch sử</h4>
               <p className="text-sm text-gold-100/50 leading-relaxed">
                 Dữ liệu đang được tiếp tục cập nhật từ các nguồn tư liệu chính thống của Quân đội Nhân dân Việt Nam và Viện Lịch sử Quân sự.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="rounded-xl border border-gold-400/10 bg-wood-800/50 p-6 transition-all hover:border-gold-400/30">
      <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold-400/50">
        {icon} {title}
      </div>
      <div className="text-lg font-bold text-gold-200">{content}</div>
    </div>
  );
}
