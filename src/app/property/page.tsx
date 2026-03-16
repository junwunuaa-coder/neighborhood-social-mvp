import { tickets } from "@/lib/mock-data";
import { DotTag, PageHeader, SectionCard } from "@/components/ui-kit";

export default function PropertyPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="物业工单" subtitle="报修 / 投诉 / 建议统一工单化，住户可见进度与处理时效。" />

      <SectionCard>
        <h2 className="font-semibold">状态流转</h2>
        <p className="mt-2 text-sm text-slate-600">已提交 → 处理中 → 已完成（支持补充进度日志）</p>
      </SectionCard>

      {tickets.map((ticket) => (
        <SectionCard key={ticket.id}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">{ticket.title}</h3>
            <DotTag tone={ticket.status === "已完成" ? "green" : ticket.status === "处理中" ? "amber" : "slate"}>
              {ticket.status}
            </DotTag>
          </div>
          <p className="mt-1 text-sm text-slate-600">类型：{ticket.type} · 提交时间：{ticket.createdAt}</p>
          <p className="mt-2 rounded-lg bg-slate-50 p-2 text-sm text-slate-700">最新进度：{ticket.latestUpdate}</p>
        </SectionCard>
      ))}
    </div>
  );
}
