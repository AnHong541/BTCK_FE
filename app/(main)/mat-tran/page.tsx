import PageLayout, { HistoryCard } from "@/components/PageLayout";
import { FRONTS } from "@/lib/data";

export default function MatTranPage() {
  return (
    <PageLayout icon="🗺" title="Mặt Trận" subtitle="Các chiến trường và mặt trận trọng yếu qua các thời kỳ lịch sử kháng chiến">
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {FRONTS.map((f) => (
          <HistoryCard 
            key={f.id} 
            tag={f.era} 
            title={f.name} 
            sub={`${f.province} · ${f.period} · ${f.result}`} 
            desc={f.description}
            href={`/tinh/${encodeURIComponent(f.province.split(',')[0].trim())}`}
          />
        ))}
      </div>
    </PageLayout>
  );
}
