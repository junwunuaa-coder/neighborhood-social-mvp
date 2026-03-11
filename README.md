# 邻里社交 Web 应用（小区试点 MVP）

这是一个面向小区内部试点的社交类 Web 应用，目标是解决：

- 信息只在微信群流动、难检索
- 邻里互助响应慢
- 闲置交易效率低
- 物业工单不透明
- 活动组织难沉淀

当前版本为 **MVP 骨架**，可直接本地运行并快速迭代。

---

## 1. 当前已落地内容

### 页面
- `/` 首页看板
- `/feed` 邻里广场
- `/help` 求助互助
- `/market` 闲置交易
- `/events` 活动报名
- `/property` 物业工单
- `/onboarding` 住户认证流程说明

### 数据与工程文件
- `src/lib/mock-data.ts`：演示数据
- `src/lib/types.ts`：类型定义
- `supabase/schema.sql`：数据库建表脚本
- `.env.example`：环境变量模板
- `src/lib/supabase.ts`：Supabase 客户端入口

---

## 2. 技术栈

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase（建议作为 Auth + DB + Storage）

---

## 3. 本地启动

```bash
npm install
npm run dev
```

打开：`http://localhost:3000`

---

## 4. 接入 Supabase（推荐）

1. 在 Supabase 新建项目
2. 执行 `supabase/schema.sql`
3. 复制环境变量：

```bash
cp .env.example .env.local
```

填入：

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. 后续将 mock 数据替换为 Supabase 查询

---

## 5. MVP 建议范围（P0）

1. 住户认证（手机号 + 楼栋门牌 + 审核）
2. 邻里广场（互助/闲置/通知/活动）
3. 评论 + 私信
4. 物业工单（提交、流转、进度）

---

## 6. 试点成功指标（建议）

- 7日留存 > 25%
- 每周有效互助单 > 30
- 工单平均响应时长下降 > 20%

---

## 7. 快速部署

### 方案A：GitHub Pages（已内置工作流）

仓库包含 `.github/workflows/deploy-pages.yml`，推送到 `main` 会自动发布静态站点。

1. 推送到 GitHub（默认分支 `main`）
2. 在仓库 Settings → Pages 中确认 Source 为 GitHub Actions
3. 等待 Actions 执行完成
4. 访问：`https://<你的GitHub用户名>.github.io/<仓库名>/`

### 方案B：Vercel（推荐正式对外）

1. 推送到 GitHub
2. Vercel 导入仓库
3. 配置环境变量（Supabase）
4. 一键部署并绑定域名

---

## 8. 下一步迭代（建议顺序）

- P1：真实登录、权限与认证审核后台
- P1：发帖发布/编辑/删除、评论、举报
- P1：活动签到与提醒
- P2：信誉分系统、推荐流、通知中心

---

## 9. 注意事项

- 试点阶段优先验证“真实使用频次”，不要过早做复杂功能
- 处理用户隐私：前台不展示完整门牌，手机号仅系统可见
- 任何自动化通知都要支持退订
