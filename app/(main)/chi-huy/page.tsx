import Link from "next/link";
import PageLayout, { HistoryCard } from "@/components/PageLayout";
import { COMMANDERS } from "@/lib/data";

export default function ChiHuyPage() {
  return (
    <PageLayout 
      icon="⚔" 
      title="Người Chỉ Huy" 
      subtitle="Những vị tướng lĩnh lãnh đạo các chiến dịch lịch sử của dân tộc Việt Nam"
    >
      <div className="grid grid-cols-1 gap-6">
        {COMMANDERS.map((c) => (
          <Link key={c.id} href={`/chi-huy/${c.id}`} className="block transition-transform active:scale-[0.98]">
            <HistoryCard 
              tag={c.era} 
              title={c.name} 
              sub={`${c.title} · ${c.province}`} 
              desc={c.description} 
            />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
