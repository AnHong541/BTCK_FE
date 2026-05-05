"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import VietnamMap from "@/components/VietnamMap";
import { MAP_DATA, ALL_PROVINCES, BATTLE_TIMELINE } from "@/lib/data";
import { Era, BattleInfo, BattleDetail } from "@/types";
import { 
  SearchOutlined, 
  EnvironmentOutlined, 
  ThunderboltOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
  CompassOutlined,
  HistoryOutlined,
  BookOutlined
} from "@ant-design/icons";

export default function TrangChu() {
  const router = useRouter();
  const [era, setEra] = useState<Era>("khangmy");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<BattleInfo | null>(null);
  const [selectedBattle, setSelectedBattle] = useState<BattleDetail | null>(null);
  const [mapPosition, setMapPosition] = useState({ center: [106, 16] as [number, number], zoom: 1 });

  const provinces = useMemo(() => {
    const eraData = MAP_DATA[era] || {};
    return ALL_PROVINCES.map(name => {
      if (eraData[name]) return eraData[name];
      return {
        name: name,
        role: name.includes("Quần đảo") ? "Lãnh thổ thiêng liêng" : "Địa danh lịch sử Việt Nam",
        summary: `Tỉnh ${name} luôn đồng hành cùng dân tộc trong suốt chiều dài lịch sử dựng nước và giữ nước.`,
        hot: false,
        totalBattles: 0,
        battles: []
      } as BattleInfo;
    }).sort((a, b) => a.name.localeCompare(b.name, 'vi'));
  }, [era]);

  const filteredProvinces = provinces.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const normalize = (s: string) => {
    if (!s) return "";
    return s.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/\s+/g, "")
      .trim();
  };

  const provinceCoords: Record<string, [number, number]> = {
  "An Giang": [105.12, 10.37], "Bà Rịa - Vũng Tàu": [107.17, 10.45],
  "Bạc Liêu": [105.72, 9.29], "Bắc Giang": [106.20, 21.27],
  "Bắc Kạn": [105.83, 22.15], "Bắc Ninh": [106.07, 21.18],
  "Bến Tre": [106.38, 10.24], "Bình Dương": [106.66, 11.14],
  "Bình Định": [109.22, 13.77], "Bình Phước": [106.88, 11.75],
  "Bình Thuận": [108.10, 10.93], "Cà Mau": [105.15, 9.18],
  "Cao Bằng": [106.25, 22.67], "Cần Thơ": [105.78, 10.03],
  "Đà Nẵng": [108.20, 16.05], "Đắk Lắk": [108.04, 12.67],
  "Đắk Nông": [107.69, 12.00], "Điện Biên": [103.01, 21.39],
  "Đồng Nai": [106.82, 10.95], "Đồng Tháp": [105.64, 10.43],
  "Gia Lai": [108.01, 13.98], "Hà Giang": [104.98, 22.82],
  "Hà Nam": [105.92, 20.54], "Hà Nội": [105.84, 21.03],
  "Hà Tĩnh": [105.90, 18.34], "Hải Dương": [106.31, 20.94],
  "Hải Phòng": [106.68, 20.86], "Hậu Giang": [105.76, 9.78],
  "Hòa Bình": [105.33, 20.82], "Hưng Yên": [106.05, 20.65],
  "Khánh Hòa": [109.19, 12.25], "Kiên Giang": [105.08, 10.01],
  "Kon Tum": [108.00, 14.35], "Lai Châu": [103.46, 22.36],
  "Lạng Sơn": [106.76, 21.85], "Lào Cai": [103.97, 22.48],
  "Lâm Đồng": [108.44, 11.94], "Long An": [106.41, 10.53],
  "Nam Định": [106.17, 20.42], "Nghệ An": [105.68, 18.67],
  "Ninh Bình": [105.98, 20.25], "Ninh Thuận": [108.99, 11.56],
  "Phú Thọ": [105.22, 21.32], "Phú Yên": [109.30, 13.09],
  "Quảng Bình": [106.62, 17.47], "Quảng Nam": [108.48, 15.57],
  "Quảng Ngãi": [108.80, 15.12], "Quảng Ninh": [107.57, 21.01],
  "Quảng Trị": [107.19, 16.74], "Sóc Trăng": [105.97, 9.60],
  "Sơn La": [103.92, 21.33], "Tây Ninh": [106.10, 11.31],
  "Thái Bình": [106.34, 20.45], "Thái Nguyên": [105.85, 21.59],
  "Thanh Hóa": [105.78, 19.81], "Thừa Thiên Huế": [107.59, 16.46],
  "Tiền Giang": [106.36, 10.36], "TP. Hồ Chí Minh": [106.63, 10.82],
  "Trà Vinh": [106.34, 9.93], "Tuyên Quang": [105.22, 21.82],
  "Vĩnh Long": [105.97, 10.25], "Vĩnh Phúc": [105.60, 21.31],
  "Yên Bái": [104.87, 21.70], "Quần đảo Hoàng Sa": [112.5, 16.5],
  "Quần đảo Trường Sa": [114.5, 10.5],
};

const handleSelectProvince = (province: BattleInfo) => {
  const coords = provinceCoords[province.name] || [106, 16];
  setSelectedBattle(null);
  setSelectedProvince(province);
  setMapPosition({ center: coords, zoom: 8 });
};

const handleMapClick = (name: string, centroid: [number, number]) => {
  console.log("Tên từ bản đồ:", name);
  console.log("Normalize:", normalize(name));
  const info = provinces.find(p => normalize(p.name) === normalize(name));
  console.log("Tìm thấy:", info?.name);
  if (info) {
    setSelectedProvince(info);
    setSelectedBattle(null);
    setMapPosition({ center: centroid, zoom: 8 });
  } else {
    setSelectedProvince(null);
    setMapPosition({ center: [106, 16], zoom: 1 });
  }
};

  return (
    <div className="min-h-screen bg-wood-900 font-body text-gold-100 flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gold-400/10 bg-wood-900/90 backdrop-blur-md py-4 px-8 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-gold-400 flex items-center justify-center text-wood-900 text-xl font-black">
            VN
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-gold-100 tracking-tight cursor-pointer" onClick={() => { setSelectedProvince(null); setSelectedBattle(null); setMapPosition({center:[106, 16], zoom: 1}); }}>VIỆT NAM SỬ VIỆT</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/60 font-bold">Bản đồ tương tác lịch sử</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <EraButton active={era === 'khangphap'} onClick={() => {setEra("khangphap"); setSelectedProvince(null); setSelectedBattle(null);}} label="Chống Pháp" />
          <EraButton active={era === 'khangmy'} onClick={() => {setEra("khangmy"); setSelectedProvince(null); setSelectedBattle(null);}} label="Chống Mỹ" />
        </nav>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="sticky top-32 w-full h-[500px] md:h-[700px] rounded-3xl border border-gold-400/20 bg-wood-800/20 overflow-visible shadow-2xl">
              <VietnamMap 
                center={mapPosition.center} 
                zoom={mapPosition.zoom} 
                onProvinceClick={handleMapClick}
                selectedName={selectedProvince?.name || null}
              />
              
              <button 
                onClick={() => { setSelectedProvince(null); setSelectedBattle(null); setMapPosition({ center: [106, 16], zoom: 1 }); }}
                className="absolute bottom-6 left-6 p-4 rounded-xl border border-gold-400/20 bg-wood-900/90 text-gold-400 hover:bg-gold-400 hover:text-wood-900 transition-all backdrop-blur-md shadow-xl"
              >
                <CompassOutlined className="text-xl" />
              </button>

              <div className="absolute top-6 left-6 p-4 rounded-2xl border border-gold-400/10 bg-wood-900/80 backdrop-blur-md">
                <div className="text-[10px] font-black text-gold-400 uppercase tracking-widest flex items-center gap-2">
                  <ThunderboltOutlined className="animate-pulse" />
                  Đang xem: {era === 'khangmy' ? 'Kháng chiến chống Mỹ' : 'Kháng chiến chống Pháp'}
                </div>
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[450px] order-1 lg:order-2">
            <div className="bg-wood-800/40 rounded-3xl border border-gold-400/10 p-8 shadow-xl backdrop-blur-md min-h-[600px]">
              
              <AnimatePresence mode="wait">
                {selectedBattle ? (
                  <motion.div 
                    key="battle-detail"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    <button 
                      onClick={() => setSelectedBattle(null)}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gold-400 text-wood-900 hover:bg-gold-200 transition-all text-xs font-black uppercase tracking-widest shadow-lg"
                    >
                      <ArrowLeftOutlined /> Trở về trang tỉnh
                    </button>

                    <div>
                      <h2 className="text-3xl font-display font-bold text-gold-100 mb-4">{selectedBattle.name}</h2>
                      <div className="h-1 w-16 bg-gold-400 mb-8 rounded-full" />
                      
                      <div className="grid grid-cols-2 gap-4 mb-10">
                        <StatCard label="Lực lượng" value={selectedBattle.troops} icon={<TeamOutlined />} />
                        <StatCard label="Kết quả" value={selectedBattle.result} icon={<InfoCircleOutlined />} />
                      </div>

                      <div className="space-y-8">
                        <SectionHeader icon={<ThunderboltOutlined />} title="Diễn biến chính" />
                        <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gold-400/10">
                          {selectedBattle.events.map((ev, i) => (
                            <div key={i} className="relative pl-10">
                              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-gold-400 bg-wood-900" />
                              <span className="block text-xs font-black text-gold-400 mb-1 uppercase tracking-widest">{ev.year}</span>
                              <p className="text-sm leading-relaxed text-gold-100/80 font-light">{ev.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : selectedProvince ? (
                  <motion.div 
                    key="province-overview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-10"
                  >
                    <button 
                      onClick={() => { setSelectedProvince(null); setMapPosition({ center: [106, 16], zoom: 1 }); }}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 transition-all text-xs font-black uppercase tracking-widest"
                    >
                      <ArrowLeftOutlined /> Về danh sách tỉnh
                    </button>

                    <div>
                      <h2 className="text-4xl font-display font-bold text-gold-100 mb-2">{selectedProvince.name}</h2>
                      <p className="text-xs uppercase tracking-[0.2em] text-gold-400 font-black mb-8 opacity-80 italic">
                        {selectedProvince.role}
                      </p>
                      <p className="text-sm text-gold-100/70 leading-loose font-light mb-6 border-l-2 border-gold-400/20 pl-4">
                        {selectedProvince.summary}
                      </p>

                      <button 
                        onClick={() => router.push(`/tinh/${encodeURIComponent(selectedProvince.name)}`)}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gold-400/5 border border-gold-400/20 text-gold-400 hover:bg-gold-400 hover:text-wood-900 transition-all text-xs font-black uppercase tracking-widest mb-12 group"
                      >
                        <BookOutlined className="text-lg" />
                        Xem chi tiết bài viết
                      </button>

                      {/* Timeline trận chiến */}
                      {BATTLE_TIMELINE[selectedProvince.name] && (
                        <div style={{ marginTop: 24 }}>
                          <div style={{ fontSize: 10, color: "var(--gold-500)", textTransform: "uppercase", letterSpacing: 2, fontFamily: "sans-serif", marginBottom: 12, fontWeight: "bold" }}>
                            Các trận chiến
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {BATTLE_TIMELINE[selectedProvince.name].map((b) => (
                              <Link
                                key={b.slug}
                                href={`/tran-chien/${b.slug}`}
                                className="flex items-center gap-3 px-4 py-3 bg-wood-800 border border-gold-400/20 rounded-lg no-underline hover:border-gold-400/50 transition-colors"
                              >
                                <span className="text-[10px] text-gold-400 font-sans whitespace-nowrap font-bold">{b.year}</span>
                                <span className="text-[13px] text-gold-100 font-sans">{b.name} →</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="province-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="mb-8">
                      <h2 className="text-xs font-black text-gold-400 uppercase tracking-[0.3em] mb-4">Chọn tỉnh thành (63 tỉnh + Đảo)</h2>
                      <div className="relative">
                        <SearchOutlined className="absolute left-5 top-1/2 -translate-y-1/2 text-gold-400/30 text-xl" />
                        <input 
                          type="text" 
                          placeholder="Tìm kiếm..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full rounded-2xl border border-gold-400/10 bg-wood-900/70 px-12 py-4 text-base focus:border-gold-400/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                      {filteredProvinces.map((p, i) => (
                        <button
                          key={p.name}
                          onClick={() => handleSelectProvince(p)}
                          className="flex w-full items-center gap-4 rounded-2xl px-6 py-4 text-left transition-all hover:bg-gold-400/10 group bg-wood-900/40"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-gold-400/20 bg-wood-900 text-xs font-bold text-gold-400">
                            {i + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-bold text-gold-100 group-hover:text-gold-200">{p.name}</div>
                          </div>
                          <EnvironmentOutlined className="text-gold-400/20 group-hover:text-gold-400" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </main>

      <footer className="w-full border-t border-gold-400/10 bg-wood-950 py-16 px-8 mt-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold-400/30 font-bold">Việt Nam Sử Việt © 2024</p>
      </footer>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <h3 className="text-xs font-black text-gold-400 uppercase tracking-[0.3em] flex items-center gap-4 py-2">
      <span className="h-[1px] w-8 bg-gold-400/20" /> {icon} {title}
    </h3>
  );
}

function EraButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${active ? 'bg-gold-400 text-wood-900 border-gold-400 shadow-lg' : 'border-gold-400/10 text-gold-400 hover:bg-gold-400/10'}`}
    >
      {label}
    </button>
  );
}

function StatCard({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gold-400/10 bg-wood-900/60 p-6 flex flex-col items-center text-center group">
      <div className="text-gold-400 mb-3">{icon}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-gold-400/40 mb-2">{label}</div>
      <div className="text-sm font-bold text-gold-200">{value}</div>
    </div>
  );
}
