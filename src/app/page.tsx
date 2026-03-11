import Link from "next/link";
import { events, posts, tickets } from "@/lib/mock-data";

const cards = [
  { title: "认证住户", value: "128", desc: "本周新增 17" },
  { title: "互助响应率", value: "83%", desc: "目标 > 75%" },
  { title: "闲置成交", value: "46", desc: "近7天" },
  { title: "工单平均响应", value: "2.1h", desc: "较上周 -18%" },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <p className="text-sm text-blue-100">小区社交试点 · 可落地首版</p>
        <h1 className="mt-1 text-3xl font-bold">邻里连接，不靠刷群</h1>
        <p className="mt-3 max-w-3xl text-sm text-blue-100">
          当前版本覆盖住户认证、邻里发帖、求助互助、闲置交易、活动报名和物业工单。
          目标是 2 周内跑通真实使用闭环。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-700" href="/onboarding">
            去做住户认证
          </Link>
          <Link className="rounded-lg border border-white/40 px-4 py-2 text-sm font-medium" href="/feed">
            进入邻里广场
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item) => (
          <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs text-slate-500">{item.title}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 lg:col-span-2">
          <h2 className="text-lg font-semibold">最新动态</h2>
          <div className="mt-3 space-y-3">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="rounded-lg border border-slate-100 p-3">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.createdAt}</span>
                </div>
                <p className="mt-2 font-medium">{post.title}</p>
                <p className="mt-1 text-sm text-slate-600">{post.content}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold">最近活动</h3>
            <div className="mt-3 space-y-2 text-sm">
              {events.map((event) => (
                <div key={event.id} className="rounded-lg bg-slate-50 p-2">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-slate-600">{event.date} · {event.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold">工单状态</h3>
            <div className="mt-3 space-y-2 text-sm">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="rounded-lg bg-slate-50 p-2">
                  <p className="font-medium">{ticket.title}</p>
                  <p className="text-xs text-slate-600">{ticket.status} · {ticket.createdAt}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
