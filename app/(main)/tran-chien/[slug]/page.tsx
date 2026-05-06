"use client";

import { BATTLE_DETAILS, BATTLE_TIMELINE } from "@/lib/data";
import { BATTLE_IMAGES, BATTLE_MAPS } from "@/lib/media";
import { fetchBattleImages, addBattleImage, deleteBattleImage, BattleImageApi } from "@/app/services/imageService";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeftOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  AlertOutlined,
  UserOutlined,
  ClockCircleOutlined,
  RightOutlined,
  PlusOutlined,
  CheckOutlined,
  LoadingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export default function BattlePage() {
  const params = useParams<{ slug: string }>();
  const battle = BATTLE_DETAILS[params.slug];
  const { user } = useAuth();
  
  const [apiImages, setApiImages] = useState<BattleImageApi[]>([]);
  const [showAddImage, setShowAddImage] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const imagesFromApi = await fetchBattleImages();
      if (imagesFromApi[params.slug]) {
        setApiImages(imagesFromApi[params.slug]);
      }
    };
    loadImages();
  }, [params.slug]);

  if (!battle) return notFound();

  type MediaItem = { url: string; isApi: boolean; id?: string };

  const battleImages: MediaItem[] = BATTLE_IMAGES[params.slug]?.map(url => ({ url, isApi: false })) || [];
  const battleMaps: MediaItem[] = BATTLE_MAPS[params.slug]?.map(url => ({ url, isApi: false })) || [];
  const apiImagesMapped: MediaItem[] = apiImages.map(img => ({ url: img.url, isApi: true, id: img.id }));
  const allMedia: MediaItem[] = [...apiImagesMapped, ...battleImages, ...battleMaps];

  const handleAddImage = async () => {
    if (!newImageUrl) return;
    setIsSubmitting(true);
    const addedImage = await addBattleImage(params.slug, newImageUrl);
    if (addedImage) {
      setApiImages([...apiImages, addedImage]);
      setNewImageUrl("");
      setShowAddImage(false);
    } else {
      alert("Lỗi khi lưu ảnh. Vui lòng thử lại!");
    }
    setIsSubmitting(false);
  };

  const handleDeleteImage = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa ảnh này không?")) return;
    setDeletingId(id);
    const success = await deleteBattleImage(id);
    if (success) {
      setApiImages(apiImages.filter(img => img.id !== id));
    } else {
      alert("Lỗi khi xóa ảnh. Vui lòng thử lại!");
    }
    setDeletingId(null);
  };

  const allSlugs = Object.keys(BATTLE_DETAILS);
  const currentIndex = allSlugs.indexOf(params.slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const stats = [
    { label: "Chỉ huy", value: battle.commander, icon: <UserOutlined /> },
    { label: "Lực lượng", value: battle.troops, icon: <TeamOutlined /> },
    { label: "Thương vong", value: battle.casualty, icon: <AlertOutlined /> },
    { label: "Kết quả", value: battle.result, icon: <TrophyOutlined /> },
  ];

  return (
    <div className="min-h-screen bg-wood-900 font-body text-gold-100">
      {/* Hero Banner */}
      <div className="relative overflow-hidden border-b border-gold-400/20">
        <div className="absolute inset-0 bg-gradient-to-b from-wood-700/80 via-wood-800/60 to-wood-900" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #c8a96e 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 container mx-auto max-w-5xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/tran-chien"
              className="group mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400 transition-colors hover:text-gold-200"
            >
              <ArrowLeftOutlined className="transition-transform group-hover:-translate-x-1" />
              Tất cả trận chiến
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 border border-gold-400/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-gold-400">
                <ClockCircleOutlined /> {battle.period}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/5 border border-gold-400/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-gold-400/60">
                <EnvironmentOutlined /> {battle.location}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-200 mb-4 leading-tight">
              {battle.name}
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-400/0 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-6 py-12">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="group rounded-2xl border border-gold-400/15 bg-gradient-to-br from-wood-800/80 to-wood-800/40 p-6 hover:border-gold-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.08)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400 text-sm group-hover:bg-gold-400/20 transition-colors">
                  {s.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-400/50">
                  {s.label}
                </span>
              </div>
              <p className="text-sm font-medium text-gold-200 leading-relaxed">
                {s.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Left 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Image Gallery */}
            {allMedia.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="rounded-2xl border border-gold-400/20 overflow-hidden bg-wood-800/50">
                  {allMedia.map((media, idx) => (
                    <div key={idx} className="relative group border-b border-gold-400/10 last:border-b-0">
                      <img 
                        src={media.url} 
                        alt={`Minh họa trận chiến ${battle.name}`} 
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: '500px' }}
                      />
                      {media.isApi && media.id && (
                        <button
                          onClick={() => handleDeleteImage(media.id!)}
                          disabled={deletingId === media.id}
                          className="absolute top-4 right-4 bg-red-500/80 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 disabled:opacity-50"
                          title="Xóa ảnh"
                        >
                          {deletingId === media.id ? <LoadingOutlined /> : <DeleteOutlined />}
                        </button>
                      )}
                    </div>
                  ))}
                  <div className="bg-wood-900/80 p-3 text-center text-[10px] text-gold-400/60 uppercase tracking-widest font-bold">
                    Tư liệu minh họa trận chiến
                  </div>
                </div>
              </motion.div>
            )}

            {/* Thêm ảnh mới */}
            {user?.role === 'admin' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gold-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                    {allMedia.length === 0 ? "Chưa có ảnh tư liệu" : "Tư liệu minh họa"}
                  </h3>
                  <button 
                    onClick={() => setShowAddImage(!showAddImage)} 
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-wood-900 bg-gold-400 px-3 py-1.5 rounded-lg hover:bg-gold-300 transition-colors"
                  >
                    <PlusOutlined /> Thêm ảnh
                  </button>
                </div>

                {showAddImage && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex gap-2 mb-8">
                    <input 
                      type="text" 
                      value={newImageUrl} 
                      onChange={(e) => setNewImageUrl(e.target.value)} 
                      placeholder="Dán đường link ảnh (URL) vào đây..."
                      className="flex-1 bg-wood-800/80 border border-gold-400/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-400/50 text-gold-100 placeholder:text-gold-100/30"
                    />
                    <button 
                      onClick={handleAddImage} 
                      disabled={isSubmitting || !newImageUrl}
                      className="bg-gold-400 text-wood-900 px-5 py-3 rounded-xl text-sm font-bold hover:bg-gold-300 disabled:opacity-50 transition-all flex items-center justify-center min-w-[60px]"
                    >
                      {isSubmitting ? <LoadingOutlined /> : <CheckOutlined />}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <SectionTitle icon={<ThunderboltOutlined />} title="Tổng quan trận chiến" />
              <div className="rounded-2xl border border-gold-400/10 bg-wood-800/30 p-8">
                <p className="text-base leading-[1.9] text-gold-100/75 font-light">
                  {battle.description}
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <SectionTitle icon={<ClockCircleOutlined />} title="Diễn biến chính" />
              <div className="space-y-0 relative">
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold-400/30 via-gold-400/15 to-transparent" />

                {battle.events.map((ev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="relative flex gap-6 py-6 group"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-400/40 bg-wood-900 text-gold-400 text-xs font-bold group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(200,169,110,0.3)] transition-all duration-300">
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-xl border border-gold-400/10 bg-wood-800/40 p-5 group-hover:border-gold-400/25 transition-all">
                      <span className="inline-block text-[10px] font-black text-gold-400 mb-2 uppercase tracking-widest bg-gold-400/10 px-3 py-1 rounded-full">
                        {ev.year}
                      </span>
                      <p className="text-sm leading-relaxed text-gold-100/80">
                        {ev.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right 1/3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Quick Info Card */}
            <div className="rounded-2xl border border-gold-400/15 bg-gradient-to-b from-wood-800/60 to-wood-800/20 p-6 sticky top-28">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gold-400 mb-6 flex items-center gap-2">
                <span className="h-[1px] w-4 bg-gold-400/30" />
                Thông tin nhanh
              </h3>

              <div className="space-y-5">
                <InfoRow label="Thời gian" value={battle.period} />
                <InfoRow label="Địa điểm" value={battle.location} />
                <InfoRow label="Chỉ huy" value={battle.commander} />
                <InfoRow label="Kết quả" value={battle.result} highlight />
              </div>

              {/* Navigation */}
              <div className="mt-8 pt-6 border-t border-gold-400/10 space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gold-400/40 mb-4">
                  Trận chiến khác
                </h4>
                {prevSlug && (
                  <Link
                    href={`/tran-chien/${prevSlug}`}
                    className="flex items-center gap-3 rounded-xl border border-gold-400/10 bg-wood-900/50 px-4 py-3 text-xs text-gold-100/70 hover:border-gold-400/30 hover:text-gold-200 transition-all group"
                  >
                    <ArrowLeftOutlined className="text-gold-400/40 group-hover:text-gold-400" />
                    <span className="truncate">{BATTLE_DETAILS[prevSlug].name}</span>
                  </Link>
                )}
                {nextSlug && (
                  <Link
                    href={`/tran-chien/${nextSlug}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-gold-400/10 bg-wood-900/50 px-4 py-3 text-xs text-gold-100/70 hover:border-gold-400/30 hover:text-gold-200 transition-all group"
                  >
                    <span className="truncate">{BATTLE_DETAILS[nextSlug].name}</span>
                    <RightOutlined className="text-gold-400/40 group-hover:text-gold-400" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h2 className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.25em] text-gold-400 mb-6">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/10">
        {icon}
      </span>
      {title}
      <span className="flex-1 h-[1px] bg-gold-400/10" />
    </h2>
  );
}

function InfoRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[10px] font-black uppercase tracking-widest text-gold-400/40 mb-1">
        {label}
      </div>
      <div className={`text-sm leading-relaxed ${highlight ? "text-gold-200 font-bold" : "text-gold-100/70"}`}>
        {value}
      </div>
    </div>
  );
}