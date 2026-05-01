import CrmDetailPage from "../../components/CrmDetailPage";
import { crmModules, findCrmRecord } from "../../data/crm-data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const record = findCrmRecord("companies", id);

  return {
    title: `Chi tiết công ty ${record?.name || id}`,
    description: `Quan sát tổng thể công ty ${record?.name || id}, bao gồm liên hệ, hồ sơ, chứng từ, tài khoản, hóa đơn, hợp đồng và thanh toán.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const record = findCrmRecord("companies", id);

  return <CrmDetailPage module={crmModules.companies} moduleKey="companies" record={record} />;
}
