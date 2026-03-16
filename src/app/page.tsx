import Link from "next/link";
import { events, posts, tickets } from "@/lib/mock-data";
import { ActionButton, AvatarPill, DotTag, KpiStrip, SectionCard } from "@/components/ui-kit";

const cards = [
  { title: "认证住户", value: "128", desc: "本周新增 17" },
  { title: "互助响应率", value: "83%", desc: "目标 > 75%" },
  { title: "闲置成交", value: "46", desc: "近7天" },
  { title: "工单平均响应", value: "2.1h", desc: "较上周 -18%" },
];

const categoryTone: Record<string, "green" | "blue" | "amber" | "purple" | "slate"> = {
  互助: "green",
  闲置: "blue",
  活动: "purple",
  通知: "amber",
};

const shortcuts = [
  { href: "/help", label: "发起求助", desc: "借物 / 临时协助" },
  { href: "/market", label: "发布闲置", desc: "本小区放心交易" },
  { href: "/events", label: "创建活动", desc: "报名 + 签到" },
  { href: "/property", label: "提交工单", desc: "报修 / 投诉" },
];

const memberShowcase = [
  { name: "王阿姨", meta: "3栋 · 社区志愿者" },
  { name: "Luna", meta: "6栋 · 宠物互助组" },
  { name: "Jason", meta: "2栋 · 篮球活动组织者" },
];

const testimonials = [
  { quote: "以前借工具要在群里刷半天，现在发帖 5 分钟就有人回应。", author: "3栋业主 · 陈先生" },
  { quote: "闲置交易流程清楚很多，成交后互评也更放心。", author: "6栋业主 · Luna" },
  { quote: "工单状态透明，什么时候处理到哪一步都看得见。", author: "1栋业主 · 赵女士" },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <SectionCard className="overflow-hidden p-0">
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 p-6 text-white sm:p-9">
          <p className="text-sm text-indigo-100">Modern Community Layout · Minimal + Social Proof</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">邻里社区，一眼看全动态</h1>
          <p className="mt-3 max-w-3xl text-sm text-indigo-50 sm:text-base">
            用现代信息流和清晰分层，把互助、闲置、活动、工单放到一个统一入口。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href="/onboarding">加入社区</ActionButton>
            <Link
              className="rounded-full border border-white/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              href="/feed"
            >
              浏览广场
            </Link>
          </div>
        </div>
      </SectionCard>

      <KpiStrip
        items={[
          { label: "近7天活跃住户", value: "89 人" },
          { label: "今日新增帖子", value: "26 条" },
          { label: "互助平均响应", value: "8 分钟" },
        ]}
      />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item) => (
          <article key={item.title} className="wechat-card p-4">
            <p className="text-xs text-slate-500">{item.title}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
          </article>
        ))}
      </section>

      <SectionCard>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">热门主题</h2>
          <Link href="/feed" className="text-sm text-indigo-600 hover:text-indigo-700">
            查看全部
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <DotTag tone="green"># 互助借物</DotTag>
          <DotTag tone="blue"># 闲置交易</DotTag>
          <DotTag tone="purple"># 周末活动</DotTag>
          <DotTag tone="amber"># 物业通知</DotTag>
        </div>
      </SectionCard>

      <section className="grid gap-4 lg:grid-cols-3">
        <SectionCard className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">今日最新动态</h2>
            <Link href="/feed" className="text-sm text-indigo-600 hover:text-indigo-700">
              查看全部
            </Link>
          </div>
          <div className="mt-3 space-y-3">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <DotTag tone={categoryTone[post.category] ?? "slate"}>{post.category}</DotTag>
                    <span className="text-xs text-slate-400">{post.createdAt}</span>
                  </div>
                  <span className="text-xs text-slate-500">{post.building}</span>
                </div>
                <p className="mt-2 font-medium text-slate-900">{post.title}</p>
                <p className="mt-1 text-sm text-slate-600">{post.content}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.author}</span>
                  <span>评论 12 · 想参与 4</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <article className="space-y-4">
          <SectionCard>
            <h3 className="font-semibold">活跃邻居</h3>
            <div className="mt-3 space-y-3">
              {memberShowcase.map((m) => (
                <AvatarPill key={m.name} name={m.name} meta={m.meta} />
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <h3 className="font-semibold">本周活动</h3>
            <div className="mt-3 space-y-2 text-sm">
              {events.map((event) => (
                <div key={event.id} className="rounded-lg bg-indigo-50/50 p-2">
                  <p className="font-medium text-slate-900">{event.title}</p>
                  <p className="text-xs text-slate-600">
                    {event.date} · {event.location}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        </article>
      </section>

      <SectionCard>
        <h2 className="text-lg font-semibold">邻里口碑</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <p className="text-sm italic text-slate-700">“{item.quote}”</p>
              <footer className="mt-2 text-xs text-slate-500">— {item.author}</footer>
            </blockquote>
          ))}
        </div>
      </SectionCard>

      <SectionCard>
        <h2 className="text-lg font-semibold">快捷入口</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-3 transition hover:border-indigo-200 hover:bg-indigo-50/40"
            >
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </Link>
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
    </div>
  );
}
