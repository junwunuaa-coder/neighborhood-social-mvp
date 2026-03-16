import { ActionButton, PageHeader, SectionCard } from "@/components/ui-kit";

export default function OnboardingPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="住户认证"
        subtitle="试点阶段建议“手机号 + 楼栋门牌 + 审核”三步认证。"
        action={<ActionButton href="/">返回首页</ActionButton>}
      />

      <SectionCard>
        <h2 className="font-semibold">认证流程（MVP）</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
          <li>手机号验证码登录</li>
          <li>提交楼栋 / 单元 / 门牌（后台可见，前台只显示楼栋）</li>
          <li>物业或管理员审核通过后，解锁发帖与私信权限</li>
        </ol>
      </SectionCard>

      <SectionCard>
        <h2 className="font-semibold">隐私建议</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>前台不展示完整门牌，仅显示“已认证住户”与楼栋</li>
          <li>交易场景默认私信，不公开手机号</li>
          <li>敏感举报与纠纷信息仅管理员可见</li>
        </ul>
      </SectionCard>
    </div>
  );
}
