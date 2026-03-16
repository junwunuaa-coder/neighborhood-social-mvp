"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  ClipboardList,
  Compass,
  HandHelping,
  House,
  ShieldCheck,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";

const links: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/", label: "首页", icon: House },
  { href: "/feed", label: "广场", icon: Compass },
  { href: "/help", label: "互助", icon: HandHelping },
  { href: "/market", label: "闲置", icon: ShoppingBag },
  { href: "/events", label: "活动", icon: CalendarDays },
  { href: "/property", label: "工单", icon: ClipboardList },
  { href: "/onboarding", label: "认证", icon: ShieldCheck },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-semibold text-slate-100">Neighbor Hub</p>
            <p className="text-xs text-slate-400">Dark Modern Community Interface</p>
          </div>
          <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-medium text-indigo-200">
            Modern Dark
          </span>
        </div>

        <nav className="hidden gap-2 overflow-x-auto pb-1 sm:flex">
          {links.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-indigo-500 text-white shadow-sm"
                    : "border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
