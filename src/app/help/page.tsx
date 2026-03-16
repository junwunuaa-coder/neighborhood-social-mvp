import { posts } from "@/lib/mock-data";
import { DotTag, PageHeader, SectionCard } from "@/components/ui-kit";

const helpPosts = posts.filter((p) => p.category === "互助");

export default function HelpPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="求助互助" subtitle="支持紧急求助、借物、临时协助，按楼栋优先触达。" />

      <SectionCard>
        <h2 className="font-semibold">发帖模板</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>需求类型：借物 / 帮看 / 搬运 / 代取快递</li>
          <li>时间窗口：例如 20:00-21:00</li>
          <li>报酬说明：无偿 / 有偿</li>
          <li>优先范围：同楼栋 / 全小区</li>
        </ul>
      </SectionCard>

      {helpPosts.map((post) => (
        <SectionCard key={post.id}>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              {post.author} · {post.building}
            </span>
            <span>{post.createdAt}</span>
          </div>
          <h3 className="mt-2 font-semibold text-slate-900">{post.title}</h3>
          <p className="mt-1 text-sm text-slate-700">{post.content}</p>
          <div className="mt-2">
            <DotTag tone="amber">{post.status ?? "进行中"}</DotTag>
          </div>
        </SectionCard>
      ))}
    </div>
  );
}
