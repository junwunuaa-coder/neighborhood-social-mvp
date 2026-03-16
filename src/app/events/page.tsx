import { events } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/ui-kit";

export default function EventsPage() {
  return (
    <div className="space-y-4">
      <PageHeader title="活动报名" subtitle="支持活动发布、报名、提醒、签到，沉淀社区活跃氛围。" />

      <div className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <SectionCard key={event.id}>
            <h2 className="text-lg font-semibold text-slate-900">{event.title}</h2>
            <p className="mt-2 text-sm text-slate-600">时间：{event.date}</p>
            <p className="text-sm text-slate-600">地点：{event.location}</p>
            <p className="text-sm text-slate-600">组织：{event.organizer}</p>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-[#07C160]"
                style={{ width: `${Math.min((event.signed / event.capacity) * 100, 100)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              已报名 {event.signed} / {event.capacity}
            </p>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
