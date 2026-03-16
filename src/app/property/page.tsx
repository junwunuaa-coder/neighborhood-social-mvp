import { tickets } from "@/lib/mock-data";

const statusColor: Record<string, string> = {
  已提交: "bg-slate-100 text-slate-700",
  处理中: "bg-amber-100 text-amber-700",
  已完成: "bg-emerald-100 text-emerald-700",
};

export default function PropertyPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">物业工单</h1>
        <p className="text-sm text-slate-600">报修 / 投诉 / 建议统一工单化，住户可见进度与处理时效。</p>
      </div>

      <section className="wechat-card p-4">
        <h2 className="font-semibold">状态流转</h2>
        <p className="mt-2 text-sm text-slate-600">已提交 → 处理中 → 已完成（支持补充进度日志）</p>
      </section>

      {tickets.map((ticket) => (
        <article key={ticket.id} className="wechat-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">{ticket.title}</h3>
            <span className={`rounded-full px-2 py-0.5 text-xs ${statusColor[ticket.status]}`}>
              {ticket.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-600">类型：{ticket.type} · 提交时间：{ticket.createdAt}</p>
          <p className="mt-2 rounded-lg bg-slate-50 p-2 text-sm text-slate-700">最新进度：{ticket.latestUpdate}</p>
        </article>
      ))}
    </div>
  );
}
