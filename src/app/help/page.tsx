import { posts } from "@/lib/mock-data";

const helpPosts = posts.filter((p) => p.category === "互助");

export default function HelpPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">求助互助</h1>
        <p className="text-sm text-slate-600">支持紧急求助、借物、临时协助，按楼栋优先触达。</p>
      </div>

      <section className="wechat-card p-4">
        <h2 className="font-semibold">发布模板（建议）</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>需求类型：借物 / 帮看 / 搬运 / 代取快递</li>
          <li>时间窗口：例如 20:00-21:00</li>
          <li>报酬说明：无偿 / 有偿</li>
          <li>优先范围：同楼栋 / 全小区</li>
        </ul>
      </section>

      {helpPosts.map((post) => (
        <article key={post.id} className="wechat-card p-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              {post.author} · {post.building}
            </span>
            <span>{post.createdAt}</span>
          </div>
          <h3 className="mt-2 font-semibold text-slate-900">{post.title}</h3>
          <p className="mt-1 text-sm text-slate-700">{post.content}</p>
          <span className="mt-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
            {post.status ?? "进行中"}
          </span>
        </article>
      ))}
    </div>
  );
}
