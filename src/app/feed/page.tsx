import { posts } from "@/lib/mock-data";

const categoryStyle: Record<string, string> = {
  互助: "bg-emerald-50 text-emerald-700",
  闲置: "bg-sky-50 text-sky-700",
  活动: "bg-violet-50 text-violet-700",
  通知: "bg-amber-50 text-amber-700",
};

export default function FeedPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">邻里广场</h1>
        <p className="text-sm text-slate-600">按频道聚合，替代微信群信息碎片化。</p>
      </div>

      {posts.map((post) => (
        <article key={post.id} className="wechat-card p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${categoryStyle[post.category] ?? "bg-slate-100 text-slate-700"}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-slate-500">{post.building}</span>
            </div>
            <span className="text-xs text-slate-400">{post.createdAt}</span>
          </div>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h2>
          <p className="mt-1 text-sm text-slate-700">{post.content}</p>
          <p className="mt-2 text-xs text-slate-500">发布者：{post.author}</p>
        </article>
      ))}
    </div>
  );
}
