import type { EventItem, Post, Ticket } from "@/lib/types";

export const posts: Post[] = [
  {
    id: "p1",
    title: "借冲击钻 2 小时，今晚归还",
    category: "互助",
    author: "Aiden",
    building: "3栋",
    createdAt: "10分钟前",
    content: "安装书架急用，有偿也可以，优先同楼栋。",
    status: "进行中",
  },
  {
    id: "p2",
    title: "95新婴儿推车转让，300元自提",
    category: "闲置",
    author: "Luna",
    building: "6栋",
    createdAt: "35分钟前",
    content: "品牌：XX，附送雨罩，适合 0-3 岁。",
  },
  {
    id: "p3",
    title: "周六亲子跳蚤市场报名中",
    category: "活动",
    author: "业委会",
    building: "物业",
    createdAt: "1小时前",
    content: "地点在中庭，摊位有限，先到先得。",
  },
  {
    id: "p4",
    title: "地下车库 B2 临停区本周维护",
    category: "通知",
    author: "物业客服",
    building: "物业",
    createdAt: "2小时前",
    content: "预计周三 10:00-17:00 施工，请提前规划出行。",
  },
];

export const events: EventItem[] = [
  {
    id: "e1",
    title: "周末亲子跳蚤市场",
    date: "2026-03-14 10:00",
    location: "中庭草坪",
    capacity: 30,
    signed: 18,
    organizer: "业委会",
  },
  {
    id: "e2",
    title: "宠物文明交流会",
    date: "2026-03-16 19:30",
    location: "会所二层",
    capacity: 40,
    signed: 26,
    organizer: "宠物友好小组",
  },
];

export const tickets: Ticket[] = [
  {
    id: "t1",
    type: "报修",
    title: "5栋电梯异响",
    status: "处理中",
    createdAt: "今天 09:12",
    latestUpdate: "工程部已到场检查，预计今晚完成",
  },
  {
    id: "t2",
    type: "投诉",
    title: "北门快递堆放占道",
    status: "已完成",
    createdAt: "昨天 18:30",
    latestUpdate: "已新增临时分拣位并完成清理",
  },
];
