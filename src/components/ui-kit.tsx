import Link from "next/link";
import { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <h1 className="text-[26px] font-semibold tracking-tight text-slate-900">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function ActionButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
    >
      {children}
    </Link>
  );
}

export function SectionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`wechat-card p-4 sm:p-5 ${className}`.trim()}>{children}</section>;
}

export function DotTag({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "green" | "blue" | "amber" | "purple" | "slate";
}) {
  const styles: Record<string, string> = {
    green: "bg-emerald-50 text-emerald-700",
    blue: "bg-indigo-50 text-indigo-700",
    amber: "bg-amber-50 text-amber-700",
    purple: "bg-violet-50 text-violet-700",
    slate: "bg-slate-100 text-slate-700",
  };

  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles[tone]}`}>{children}</span>;
}

export function AvatarPill({ name, meta }: { name: string; meta?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-content-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
        {name.slice(0, 1)}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-800">{name}</p>
        {meta ? <p className="text-xs text-slate-500">{meta}</p> : null}
      </div>
    </div>
  );
}

export function KpiStrip({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3">
          <p className="text-xs text-indigo-700">{item.label}</p>
          <p className="mt-1 text-xl font-semibold text-slate-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
