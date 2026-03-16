import { posts } from "@/lib/mock-data";
import { DotTag, PageHeader, SectionCard } from "@/components/ui-kit";

const categoryTone: Record<string, "green" | "blue" | "amber" | "purple" | "slate"> = {
  互助: "green",
  闲置: "blue",
  活动: "purple",
  通知: "amber",
};

export default function FeedPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="邻里广场" subtitle="按频道聚合，替代微信群信息碎片化。" />

      {posts.map((post) => (
        <SectionCard key={post.id}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DotTag tone={categoryTone[post.category] ?? "slate"}>{post.category}</DotTag>
              <span className="text-xs text-slate-500">{post.building}</span>
            </div>
            <span className="text-xs text-slate-400">{post.createdAt}</span>
          </div>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h2>
          <p className="mt-1 text-sm text-slate-700">{post.content}</p>
          <p className="mt-2 text-xs text-slate-500">发布者：{post.author}</p>
        </SectionCard>
      ))}
    </div>
  );
}
