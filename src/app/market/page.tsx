import { posts } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/ui-kit";

const marketPosts = posts.filter((p) => p.category === "闲置");

export default function MarketPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="闲置交易" subtitle="标准化模板 + 本小区交易，降低放鸽子与沟通成本。" />

      <SectionCard>
        <h2 className="font-semibold">发布规范</h2>
        <div className="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-2">必填：价格、成色、可交易时间</div>
          <div className="rounded-lg bg-slate-50 p-2">建议：实拍图 3 张以上</div>
          <div className="rounded-lg bg-slate-50 p-2">交易方式：自提点优先</div>
          <div className="rounded-lg bg-slate-50 p-2">完成后互评，累计信誉分</div>
        </div>
      </SectionCard>

      {marketPosts.map((post) => (
        <SectionCard key={post.id}>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              {post.author} · {post.building}
            </span>
            <span>{post.createdAt}</span>
          </div>
          <h3 className="mt-2 font-semibold text-slate-900">{post.title}</h3>
          <p className="mt-1 text-sm text-slate-700">{post.content}</p>
        </SectionCard>
      ))}
    </div>
  );
}
