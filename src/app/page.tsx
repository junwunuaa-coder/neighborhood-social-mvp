import Link from "next/link";
import { events, posts, tickets } from "@/lib/mock-data";
import { ActionButton, DotTag, PageHeader, SectionCard } from "@/components/ui-kit";

const cards = [
  { title: "认证住户", value: "128", desc: "本周新增 17", emoji: "🪪" },
  { title: "互助响应率", value: "83%", desc: "目标 > 75%", emoji: "🤝" },
  { title: "闲置成交", value: "46", desc: "近7天", emoji: "📦" },
  { title: "工单平均响应", value: "2.1h", desc: "较上周 -18%", emoji: "🧰" },
];

const categoryTone: Record<string, "green" | "blue" | "amber" | "purple" | "slate"> = {
  互助: "green",
  闲置: "blue",
  活动: "purple",
  通知: "amber",
};

const shortcuts = [
  { href: "/help", label: "发起求助", desc: "借物 / 临时协助", icon: "🆘" },
  { href: "/market", label: "发布闲置", desc: "本小区放心交易", icon: "🛍️" },
  { href: "/events", label: "创建活动", desc: "报名 + 签到", icon: "🎉" },
  { href: "/property", label: "提交工单", desc: "报修 / 投诉", icon: "🛠️" },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <SectionCard className="overflow-hidden p-0">
        <div className="bg-gradient-to-r from-[#07C160] to-[#22c55e] p-6 text-white sm:p-8">
          <p className="text-sm text-emerald-100">小区社交试点 · 微信社区风 v2</p>
          <h1 className="mt-1 text-3xl font-bold">邻里连接，不靠刷屏</h1>
          <p className="mt-3 max-w-3xl text-sm text-emerald-50">
            把微信群里的碎片信息，变成可检索、可追踪、可协作的社区工作台。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ActionButton href="/onboarding">完成住户认证</ActionButton>
            <Link
              className="rounded-full border border-white/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              href="/feed"
            >
              进入邻里广场
            </Link>
          </div>
        </div>
      </SectionCard>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item) => (
          <article key={item.title} className="wechat-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">{item.title}</p>
              <span className="text-lg">{item.emoji}</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
          </article>
        ))}
      </section>

      <SectionCard>
        <PageHeader title="快捷入口" subtitle="常用动作一键直达" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-3 transition hover:border-emerald-200 hover:bg-emerald-50/40"
            >
              <p className="text-lg">{item.icon}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </SectionCard>

      <section className="grid gap-4 lg:grid-cols-3">
        <SectionCard className="lg:col-span-2">
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
                  <DotTag tone={categoryTone[post.category] ?? "slate"}>{post.category}</DotTag>
                  <span className="text-xs text-slate-400">{post.createdAt}</span>
                </div>
                <p className="mt-2 font-medium text-slate-900">{post.title}</p>
                <p className="mt-1 text-sm text-slate-600">{post.content}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <article className="space-y-4">
          <SectionCard>
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
          </SectionCard>

          <SectionCard>
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
          </SectionCard>
        </article>
      </section>
    </div>
  );
}
