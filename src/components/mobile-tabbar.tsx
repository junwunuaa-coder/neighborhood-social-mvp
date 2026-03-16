"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "首页", icon: "🏠" },
  { href: "/feed", label: "广场", icon: "🧭" },
  { href: "/help", label: "互助", icon: "🆘" },
  { href: "/market", label: "闲置", icon: "🛍️" },
  { href: "/property", label: "工单", icon: "🧰" },
];

export function MobileTabbar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200/80 bg-white/95 px-2 pb-[max(env(safe-area-inset-bottom),10px)] pt-2 backdrop-blur sm:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
        {items.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center rounded-xl py-1.5 text-[11px] ${
                active ? "text-[#07C160]" : "text-slate-500"
              }`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
