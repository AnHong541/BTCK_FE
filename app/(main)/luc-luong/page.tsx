import PageLayout, { HistoryCard } from "@/components/PageLayout";
import { MILITARY_FORCES } from "@/lib/data";

export default function LucLuongPage() {
  return (
    <PageLayout icon="⚙" title="Các Lực Lượng" subtitle="Các đơn vị, binh chủng và lực lượng tham chiến qua các thời kỳ lịch sử">
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {MILITARY_FORCES.map((m) => (
          <HistoryCard key={m.id} tag={m.tag} title={m.name} sub={`Thành lập: ${m.founded} · ${m.role}`} desc={m.description} />
        ))}
      </div>
    </PageLayout>
  );
}
