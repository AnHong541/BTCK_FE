import PageLayout, { HistoryCard } from "@/components/PageLayout";
import { CASUALTIES } from "@/lib/data";

export default function TonThatPage() {
  return (
    <PageLayout icon="✦" title="Tổn Thất" subtitle="Thống kê thương vong và tổn thất qua các chiến dịch lớn của lịch sử kháng chiến">
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {CASUALTIES.map((c) => (
          <HistoryCard key={c.id} tag={c.result} title={c.battle} sub={`${c.period} · Tổng thương vong: ${c.casualties}`} desc={c.note} />
        ))}
      </div>
    </PageLayout>
  );
}
