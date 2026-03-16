"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/feed", label: "广场" },
  { href: "/help", label: "互助" },
  { href: "/market", label: "闲置" },
  { href: "/events", label: "活动" },
  { href: "/property", label: "工单" },
  { href: "/onboarding", label: "认证" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-semibold text-slate-900">Neighbor Hub</p>
            <p className="text-xs text-slate-500">Modern Community Interface</p>
          </div>
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
            Modern UI
          </span>
        </div>

        <nav className="hidden gap-2 overflow-x-auto pb-1 sm:flex">
          {links.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
