import { events } from "@/lib/mock-data";

export default function EventsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">活动报名</h1>
      <p className="text-sm text-slate-600">支持活动发布、报名、提醒、签到，沉淀社区活跃氛围。</p>

      <div className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <article key={event.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p className="mt-2 text-sm text-slate-600">时间：{event.date}</p>
            <p className="text-sm text-slate-600">地点：{event.location}</p>
            <p className="text-sm text-slate-600">组织：{event.organizer}</p>
            <div className="mt-3 h-2 rounded bg-slate-100">
              <div
                className="h-2 rounded bg-blue-500"
                style={{ width: `${Math.min((event.signed / event.capacity) * 100, 100)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">已报名 {event.signed} / {event.capacity}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
