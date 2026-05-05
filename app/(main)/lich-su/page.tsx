import PageLayout, { HistoryCard } from "@/components/PageLayout";
import { HISTORY_ITEMS } from "@/lib/data";

export default function LichSuPage() {
  return (
    <PageLayout 
      icon="⚑" 
      title="Lịch Sử Đấu Tranh" 
      subtitle="Những mốc son chói lọi trong sự nghiệp giải phóng dân tộc và thống nhất đất nước"
    >
      <div className="grid grid-cols-1 gap-6">
        {HISTORY_ITEMS.map((h) => (
          <HistoryCard key={h.id} tag={h.era} title={h.title} sub={h.date} desc={h.description} />
        ))}
      </div>
    </PageLayout>
  );
}
