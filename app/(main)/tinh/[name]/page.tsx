"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MAP_DATA } from "@/lib/data";
import { BattleDetail } from "@/types";
import { 
  ArrowLeftOutlined, 
  ThunderboltOutlined, 
  CompassOutlined, 
  CommentOutlined, 
  BookOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  HistoryOutlined
} from "@ant-design/icons";

export default function ProvinceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const provinceName = decodeURIComponent(params.name as string);
  const [selectedBattle, setSelectedBattle] = useState<BattleDetail | null>(null);

  const findProvinceData = () => {
    const khangphap = MAP_DATA.khangphap[provinceName];
    const khangmy = MAP_DATA.khangmy[provinceName];
    return khangphap || khangmy || null;
  };

  const data = findProvinceData();

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-wood-900 text-gold-200 p-6">
        <h1 className="text-xl font-display mb-4">Không tìm thấy dữ liệu cho {provinceName}</h1>
        <button 
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded-xl border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-wood-900 transition-all text-sm"
        >
          Quay lại bản đồ
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wood-900 text-gold-100 font-body flex flex-col">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 border-b border-gold-400/10 bg-wood-900/90 backdrop-blur-md px-8 py-4 flex items-center justify-between shadow-lg">
        <button 
          onClick={() => selectedBattle ? setSelectedBattle(null) : router.push("/")}
          className="flex items-center gap-2 text-gold-400 hover:text-gold-200 transition-all text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeftOutlined /> {selectedBattle ? "Trở về trang tỉnh" : "Về bản đồ"}
        </button>
        <div className="text-center">
          <h1 className="text-xl font-display font-bold text-gold-200 tracking-tight">{data.name}</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400/60 font-bold">{data.role}</p>
        </div>
        <div className="w-20" />
      </header>

      <main className="max-w-5xl mx-auto w-full px-6 py-12">
        <AnimatePresence mode="wait">
          {selectedBattle ? (
            <motion.div 
              key="battle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-4xl font-display font-bold text-gold-100 tracking-tight mb-4">{selectedBattle.name}</h2>
                <div className="h-1 w-20 bg-gold-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DetailStatCard label="Lực lượng" value={selectedBattle.troops} icon={<TeamOutlined />} />
                <DetailStatCard label="Kết quả" value={selectedBattle.result} icon={<InfoCircleOutlined />} />
              </div>

              <section className="space-y-8">
                <SectionTitle icon={<ThunderboltOutlined />} title="Diễn biến chính" />
                <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gold-400/10">
                  {selectedBattle.events.map((ev, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-gold-400 bg-wood-900" />
                      <span className="block text-xs font-black text-gold-400 mb-1 uppercase tracking-widest">{ev.year}</span>
                      <p className="text-base leading-relaxed text-gold-100/80 font-light">{ev.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div 
              key="province"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-16"
            >
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-lg text-gold-100/70 leading-loose font-light italic border-l-4 border-gold-400/20 pl-6 text-left">
                  {data.summary}
                </p>
              </div>

              <div className="space-y-8">
                <SectionTitle icon={<HistoryOutlined />} title={`Các trận giao tranh (${data.totalBattles})`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.battles.map((battle) => (
                    <button
                      key={battle.id}
                      onClick={() => setSelectedBattle(battle)}
                      className="p-8 rounded-3xl border border-gold-400/10 bg-wood-800/40 hover:bg-gold-400/10 transition-all text-left group shadow-lg"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full border border-gold-400/10">
                          {battle.year}
                        </span>
                        <ArrowLeftOutlined className="rotate-180 text-xl text-gold-400/20 group-hover:text-gold-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gold-100 mb-2 group-hover:text-gold-200">{battle.name}</h3>
                      <p className="text-sm text-gold-100/40 line-clamp-2 font-light italic">{battle.summary}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-auto border-t border-gold-400/10 p-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold-400/30 font-bold">Việt Nam Sử Việt © 2024</p>
      </footer>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <h3 className="text-sm font-black text-gold-400 uppercase tracking-[0.3em] flex items-center gap-4">
      <span className="h-[1px] w-8 bg-gold-400/20" /> {icon} {title}
    </h3>
  );
}

function DetailStatCard({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="p-8 rounded-3xl border border-gold-400/10 bg-wood-900/60 shadow-lg flex flex-col items-center text-center group">
      <div className="text-gold-400 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-400/40 mb-2">{label}</div>
      <div className="text-base font-bold text-gold-100">{value}</div>
    </div>
  );
}
