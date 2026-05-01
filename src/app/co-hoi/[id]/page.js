import CrmDetailPage from "../../components/CrmDetailPage";
import { crmModules, findCrmRecord } from "../../data/crm-data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const record = findCrmRecord("deals", id);

  return {
    title: `Chi tiết deal ${record?.name || id}`,
    description: `Quan sát tổng thể deal ${record?.name || id}, công ty, liên hệ, hồ sơ, hợp đồng, hóa đơn và đề nghị thanh toán liên quan.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const record = findCrmRecord("deals", id);

  return <CrmDetailPage module={crmModules.deals} moduleKey="deals" record={record} />;
}
