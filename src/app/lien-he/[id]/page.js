import CrmDetailPage from "../../components/CrmDetailPage";
import { crmModules, findCrmRecord } from "../../data/crm-data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const record = findCrmRecord("contacts", id);

  return {
    title: `Chi tiết liên hệ ${record?.name || id}`,
    description: `Quan sát tổng thể liên hệ ${record?.name || id}, công ty liên quan, email, hoạt động, hồ sơ, chứng từ và thanh toán.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const record = findCrmRecord("contacts", id);

  return <CrmDetailPage module={crmModules.contacts} moduleKey="contacts" record={record} />;
}
