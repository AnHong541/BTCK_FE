import { BATTLE_DETAILS, BATTLE_TIMELINE } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BattlePage({ params }: { params: { slug: string } }) {
  const battle = BATTLE_DETAILS[params.slug];
  if (!battle) return notFound();

  return (
    <div style={{ background: "#1a0f07", minHeight: "100vh", fontFamily: "Georgia, serif", padding: "0 0 60px" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(180deg, #2c1a0e, #1a0f07)", padding: "32px", borderBottom: "1px solid #c8a96e33" }}>
        <Link href="/" style={{ color: "#9a7d5a", fontSize: 12, fontFamily: "sans-serif", textDecoration: "none" }}>
          ← Trang chủ
        </Link>
        <h1 style={{ color: "#f5d48a", fontSize: 28, fontWeight: 400, marginTop: 16, letterSpacing: 2 }}>
          {battle.name}
        </h1>
        <div style={{ color: "#c8a96e", fontSize: 13, marginTop: 6, fontFamily: "sans-serif" }}>
          {battle.period} · {battle.location}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
          {[
            { label: "Chỉ huy", value: battle.commander },
            { label: "Lực lượng", value: battle.troops },
            { label: "Thương vong", value: battle.casualty },
            { label: "Kết quả", value: battle.result },
          ].map(s => (
            <div key={s.label} style={{ background: "#2c1a0e", border: "0.5px solid #c8a96e33", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 10, color: "#9a7d5a", textTransform: "uppercase", letterSpacing: 1, fontFamily: "sans-serif", marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "#f0e6d3", fontFamily: "sans-serif" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Mô tả */}
        <p style={{ color: "#c8a96e", fontSize: 15, lineHeight: 1.8, marginBottom: 32, borderLeft: "2px solid #c8a96e33", paddingLeft: 16 }}>
          {battle.description}
        </p>

        {/* Timeline sự kiện */}
        <div style={{ color: "#9a7d5a", fontSize: 11, textTransform: "uppercase", letterSpacing: 2, fontFamily: "sans-serif", marginBottom: 16 }}>
          Diễn biến
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {battle.events.map((ev, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ background: "#4a5e3a", color: "#c0dd97", fontSize: 10, padding: "3px 10px", borderRadius: 10, whiteSpace: "nowrap", fontFamily: "sans-serif", marginTop: 2 }}>
                {ev.year}
              </span>
              <span style={{ color: "#f0e6d3", fontSize: 13, lineHeight: 1.7, fontFamily: "sans-serif" }}>{ev.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}