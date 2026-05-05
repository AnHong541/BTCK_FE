"use client";

import React from "react";
import { motion } from "framer-motion";
import { HISTORY_ITEMS } from "@/lib/data";
import { HistoryOutlined, CalendarOutlined, FlagOutlined } from "@ant-design/icons";
import { HistoryItem } from "@/types";

export default function LichSuPage() {
  return (
    <div className="min-h-screen bg-wood-900 font-body text-gold-100">
      {/* Hero Section */}
      <div className="relative border-b border-gold-400/20 bg-gradient-to-b from-wood-800 to-wood-900 py-24">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--gold-400) 1px, transparent 0)", backgroundSize: "60px 60px" }} />
        
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-400/30 bg-gold-400/10 text-4xl text-gold-400"
          >
            <HistoryOutlined />
          </motion.div>
          <h1 className="mb-4 font-display text-5xl font-bold tracking-tight text-gold-200">Dòng Thời Gian Lịch Sử</h1>
          <p className="mx-auto max-w-2xl text-gold-100/60 leading-relaxed italic">
            "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam."
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto max-w-5xl px-6 py-24 relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-gold-400/50 via-gold-400/20 to-transparent hidden md:block" />

        <div className="space-y-24 md:space-y-32">
          {HISTORY_ITEMS.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: HistoryItem, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-start justify-between gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className="absolute left-1/2 top-4 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-wood-900 bg-gold-400 text-wood-900 shadow-[0_0_20px_rgba(140,109,49,0.4)] md:flex">
        <FlagOutlined />
      </div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[42%]"
      >
        <div className="rounded-2xl border border-gold-400/20 bg-wood-800/50 p-8 hover:border-gold-400/50 transition-all shadow-xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold-400/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-gold-400 border border-gold-400/20">
              {item.era}
            </span>
            <div className="flex items-center gap-2 text-xs font-bold text-gold-400/60 uppercase tracking-widest">
              <CalendarOutlined /> {item.date}
            </div>
          </div>

          <h2 className="mb-3 font-display text-2xl font-bold text-gold-200">{item.title}</h2>
          <p className="text-sm leading-relaxed text-gold-100/60 mb-6">{item.description}</p>

          {/* Thông tin chi tiết */}
          <div className="grid grid-cols-1 gap-3 border-t border-gold-400/10 pt-6">
            {item.commander && (
              <div className="flex gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-400/40 w-24 shrink-0 pt-0.5">Chỉ huy</span>
                <span className="text-xs text-gold-100/70">{item.commander}</span>
              </div>
            )}
            {item.troops && (
              <div className="flex gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-400/40 w-24 shrink-0 pt-0.5">Lực lượng</span>
                <span className="text-xs text-gold-100/70">{item.troops}</span>
              </div>
            )}
            {item.casualty && (
              <div className="flex gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-400/40 w-24 shrink-0 pt-0.5">Thương vong</span>
                <span className="text-xs text-gold-100/70">{item.casualty}</span>
              </div>
            )}
            {item.result && (
              <div className="flex gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-400/40 w-24 shrink-0 pt-0.5">Kết quả</span>
                <span className="text-xs text-gold-200 font-bold">{item.result}</span>
              </div>
            )}
            {item.significance && (
              <div className="mt-2 rounded-xl bg-gold-400/5 border border-gold-400/10 p-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-400 block mb-2">Ý nghĩa lịch sử</span>
                <span className="text-xs text-gold-100/60 italic">{item.significance}</span>
              </div>
            )}
          </div>

          <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">{item.tag}</div>
        </div>
      </motion.div>

      <div className="hidden w-[42%] md:block" />
    </div>
  );
}
