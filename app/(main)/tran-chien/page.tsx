"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BATTLE_DETAILS } from "@/lib/data";
import { BATTLE_IMAGES } from "@/lib/media";
import {
  SearchOutlined,
  ThunderboltOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  RightOutlined,
  FireOutlined,
} from "@ant-design/icons";

const ERA_KEYWORDS: Record<string, string[]> = {
  "Kháng Pháp": ["1946", "1947", "1950", "1951", "1952", "1953", "1954", "1945", "Pháp", "Genève"],
  "Kháng Mỹ": ["1960", "1963", "1965", "1968", "1971", "1972", "1973", "1975", "Mỹ", "Sài Gòn", "Paris"],
  "Biên giới": ["1974", "1979", "1984", "1988", "1989", "Hoàng Sa", "Trường Sa", "Gạc Ma", "biên giới"],
};

function detectEra(battle: { period: string; location: string; name: string; description: string }): string {
  for (const [era, keywords] of Object.entries(ERA_KEYWORDS)) {
    for (const kw of keywords) {
      if (
        battle.period.includes(kw) ||
        battle.name.includes(kw) ||
        battle.location.includes(kw) ||
        battle.description.includes(kw)
      ) {
        return era;
      }
    }
  }
  return "Khác";
}

const ERA_COLORS: Record<string, string> = {
  "Kháng Pháp": "bg-amber-500/15 text-amber-400 border-amber-400/25",
  "Kháng Mỹ": "bg-red-500/15 text-red-400 border-red-400/25",
  "Biên giới": "bg-cyan-500/15 text-cyan-400 border-cyan-400/25",
  "Khác": "bg-gold-400/10 text-gold-400 border-gold-400/20",
};

export default function BattleListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeEra, setActiveEra] = useState<string | null>(null);

  const battles = useMemo(() => {
    return Object.entries(BATTLE_DETAILS).map(([slug, battle]) => ({
      slug,
      ...battle,
      era: detectEra(battle),
      image: BATTLE_IMAGES[slug]?.[0] || null,
    }));
  }, []);

  const eras = useMemo(() => {
    const eraSet = new Set(battles.map((b) => b.era));
    return Array.from(eraSet);
  }, [battles]);

  const filtered = useMemo(() => {
    return battles.filter((b) => {
      const matchSearch =
        !searchQuery ||
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.commander.toLowerCase().includes(searchQuery.toLowerCase());
      const matchEra = !activeEra || b.era === activeEra;
      return matchSearch && matchEra;
    });
  }, [battles, searchQuery, activeEra]);

  return (
    <div className="min-h-screen bg-wood-900 font-body text-gold-100">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-gold-400/20 bg-gradient-to-b from-wood-700/80 to-wood-900">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #c8a96e 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 container mx-auto max-w-5xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-400/30 bg-gold-400/10 text-4xl text-gold-400"
          >
            <FireOutlined />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 font-display text-5xl font-bold tracking-tight text-gold-200"
          >
            Các Trận Chiến Lịch Sử
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-gold-100/60 leading-relaxed italic"
          >
            Tổng hợp các trận đánh tiêu biểu trong lịch sử đấu tranh giữ nước của dân tộc Việt Nam
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-3 text-sm text-gold-400/60"
          >
            <ThunderboltOutlined />
            <span className="font-bold">{battles.length}</span> trận chiến
          </motion.div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="container mx-auto max-w-5xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10"
        >
          <div className="relative flex-1 w-full">
            <SearchOutlined className="absolute left-5 top-1/2 -translate-y-1/2 text-gold-400/30 text-lg" />
            <input
              type="text"
              placeholder="Tìm kiếm trận chiến, địa điểm, chỉ huy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gold-400/10 bg-wood-800/50 px-12 py-4 text-sm focus:border-gold-400/40 focus:outline-none transition-all placeholder:text-gold-100/25"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveEra(null)}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                !activeEra
                  ? "bg-gold-400 text-wood-900 border-gold-400 shadow-lg"
                  : "border-gold-400/10 text-gold-400 hover:bg-gold-400/10"
              }`}
            >
              Tất cả
            </button>
            {eras.map((era) => (
              <button
                key={era}
                onClick={() => setActiveEra(activeEra === era ? null : era)}
                className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                  activeEra === era
                    ? "bg-gold-400 text-wood-900 border-gold-400 shadow-lg"
                    : "border-gold-400/10 text-gold-400 hover:bg-gold-400/10"
                }`}
              >
                {era}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Battle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((battle, i) => (
            <motion.div
              key={battle.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * Math.min(i, 10) }}
            >
              <Link
                href={`/tran-chien/${battle.slug}`}
                className="group flex flex-col rounded-2xl border border-gold-400/10 bg-wood-800/40 hover:border-gold-400/30 hover:bg-wood-800/70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,169,110,0.06)] h-full overflow-hidden"
              >
                {battle.image && (
                  <div className="w-full h-48 overflow-hidden relative border-b border-gold-400/10 shrink-0">
                    <div className="absolute inset-0 bg-wood-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={battle.image} alt={battle.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest border ${ERA_COLORS[battle.era]}`}>
                      {battle.era}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gold-400/50">
                      <ClockCircleOutlined /> {battle.period}
                    </span>
                  </div>
                  <RightOutlined className="text-gold-400/20 group-hover:text-gold-400 transition-colors mt-1" />
                </div>

                <h3 className="font-display text-xl font-bold text-gold-200 mb-2 group-hover:text-gold-100 transition-colors leading-tight">
                  {battle.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-gold-400/50 mb-4">
                  <EnvironmentOutlined />
                  <span>{battle.location}</span>
                </div>

                <p className="text-sm text-gold-100/50 leading-relaxed line-clamp-2 group-hover:text-gold-100/70 transition-colors">
                  {battle.description}
                </p>

                <div className="mt-5 pt-4 border-t border-gold-400/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gold-400/40 uppercase tracking-widest">
                    {battle.commander}
                  </span>
                  <span className="text-[10px] font-black text-gold-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Xem chi tiết →
                  </span>
                </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gold-100/30 text-sm">Không tìm thấy trận chiến nào phù hợp.</p>
          </div>
        )}
      </div>
    </div>
  );
}
