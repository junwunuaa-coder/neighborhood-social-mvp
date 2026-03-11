import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/feed", label: "邻里广场" },
  { href: "/help", label: "求助互助" },
  { href: "/market", label: "闲置交易" },
  { href: "/events", label: "活动报名" },
  { href: "/property", label: "物业工单" },
  { href: "/onboarding", label: "住户认证" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto px-4 py-3">
        <span className="whitespace-nowrap text-sm font-semibold text-slate-900">小区社交 MVP</span>
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
