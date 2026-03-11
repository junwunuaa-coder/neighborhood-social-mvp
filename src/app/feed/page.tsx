import { posts } from "@/lib/mock-data";

export default function FeedPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">邻里广场</h1>
      <p className="text-sm text-slate-600">按频道聚合，替代微信群信息碎片化。</p>

      {posts.map((post) => (
        <article key={post.id} className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs">{post.category}</span>
              <span className="text-xs text-slate-500">{post.building}</span>
            </div>
            <span className="text-xs text-slate-400">{post.createdAt}</span>
          </div>
          <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
          <p className="mt-1 text-sm text-slate-700">{post.content}</p>
          <p className="mt-2 text-xs text-slate-500">发布者：{post.author}</p>
        </article>
      ))}
    </div>
  );
}
