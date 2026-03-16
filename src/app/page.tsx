import Link from "next/link";
import { events, posts, tickets } from "@/lib/mock-data";

const cards = [
  { title: "认证住户", value: "128", desc: "本周新增 17" },
  { title: "互助响应率", value: "83%", desc: "目标 > 75%" },
  { title: "闲置成交", value: "46", desc: "近7天" },
  { title: "工单平均响应", value: "2.1h", desc: "较上周 -18%" },
];

const categoryStyle: Record<string, string> = {
  互助: "bg-emerald-50 text-emerald-700",
  闲置: "bg-sky-50 text-sky-700",
  活动: "bg-violet-50 text-violet-700",
  通知: "bg-amber-50 text-amber-700",
};

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="wechat-card overflow-hidden">
        <div className="bg-gradient-to-r from-[#07C160] to-[#22c55e] p-6 text-white">
          <p className="text-sm text-emerald-100">小区社交试点 · 微信社区风</p>
          <h1 className="mt-1 text-3xl font-bold">邻里连接，不靠刷屏</h1>
          <p className="mt-3 max-w-3xl text-sm text-emerald-50">
            把微信群里的碎片信息，变成可检索、可追踪、可协作的社区工作台。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-emerald-700"
              href="/onboarding"
            >
              完成住户认证
            </Link>
            <Link
              className="rounded-lg border border-white/50 px-4 py-2 text-sm font-semibold text-white"
              href="/feed"
            >
              进入邻里广场
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item) => (
          <article key={item.title} className="wechat-card p-4">
            <p className="text-xs text-slate-500">{item.title}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="wechat-card p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">今日最新动态</h2>
            <Link href="/feed" className="text-sm text-emerald-600 hover:text-emerald-700">
              查看全部
            </Link>
          </div>
          <div className="mt-3 space-y-3">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${categoryStyle[post.category] ?? "bg-slate-100 text-slate-700"}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.createdAt}</span>
                </div>
                <p className="mt-2 font-medium text-slate-900">{post.title}</p>
                <p className="mt-1 text-sm text-slate-600">{post.content}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="space-y-4">
          <div className="wechat-card p-4">
            <h3 className="font-semibold">本周活动</h3>
            <div className="mt-3 space-y-2 text-sm">
              {events.map((event) => (
                <div key={event.id} className="rounded-lg bg-emerald-50/50 p-2">
                  <p className="font-medium text-slate-900">{event.title}</p>
                  <p className="text-xs text-slate-600">
                    {event.date} · {event.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="wechat-card p-4">
            <h3 className="font-semibold">工单进度</h3>
            <div className="mt-3 space-y-2 text-sm">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="rounded-lg bg-slate-50 p-2">
                  <p className="font-medium text-slate-900">{ticket.title}</p>
                  <p className="text-xs text-slate-600">
                    {ticket.status} · {ticket.createdAt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
