"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, Compass, HandHelping, House, ShoppingBag, LucideIcon } from "lucide-react";

const items: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/", label: "首页", icon: House },
  { href: "/feed", label: "广场", icon: Compass },
  { href: "/help", label: "互助", icon: HandHelping },
  { href: "/market", label: "闲置", icon: ShoppingBag },
  { href: "/property", label: "工单", icon: ClipboardList },
];

export function MobileTabbar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-800/80 bg-slate-950/90 px-2 pb-[max(env(safe-area-inset-bottom),10px)] pt-2 backdrop-blur sm:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center rounded-xl py-1.5 text-[11px] ${
                active ? "text-indigo-300" : "text-slate-500"
              }`}
            >
              <span
                className={`grid h-6 w-6 place-content-center rounded-full ${
                  active ? "bg-indigo-500/20 text-indigo-200" : "bg-slate-800 text-slate-400"
                }`}
              >
                <Icon size={13} />
              </span>
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
