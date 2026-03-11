export type PostCategory = "互助" | "闲置" | "通知" | "活动";

export interface Post {
  id: string;
  title: string;
  category: PostCategory;
  author: string;
  building: string;
  createdAt: string;
  content: string;
  status?: "进行中" | "已完成";
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  capacity: number;
  signed: number;
  organizer: string;
}

export interface Ticket {
  id: string;
  type: "报修" | "投诉" | "建议";
  title: string;
  status: "已提交" | "处理中" | "已完成";
  createdAt: string;
  latestUpdate: string;
}
