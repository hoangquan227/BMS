import CrmDetailPage from "../../../components/CrmDetailPage";
import { crmModules, findCrmRecord } from "../../../data/crm-data";

const tabTitles = {
  "tong-quan": "Tổng quan",
  "cong-viec": "Công việc",
  "yeu-cau-ho-tro": "Yêu cầu hỗ trợ",
  "lich-su-trao-doi": "Lịch sử trao đổi",
  "tu-ho-so": "Tủ hồ sơ",
  "chung-tu": "Chứng từ",
  "tai-khoan-truy-cap": "Tài khoản truy cập",
  "hop-dong": "Hợp đồng",
  "tai-chinh": "Tài chính",
  "ghi-chu-noi-bo": "Ghi chú nội bộ",
  "lich-su": "Lịch sử",
};

export async function generateMetadata({ params }) {
  const { id, tabKey } = await params;
  const record = findCrmRecord("contacts", id);
  const tabTitle = tabTitles[tabKey] || "Nghiệp vụ liên quan";

  return {
    title: `${tabTitle} liên hệ ${record?.name || id}`,
    description: `Xem ${tabTitle.toLowerCase()} được liên kết với liên hệ ${record?.name || id}.`,
  };
}

export default async function Page({ params }) {
  const { id, tabKey } = await params;
  const record = findCrmRecord("contacts", id);

  return <CrmDetailPage activeTabKey={tabKey} module={crmModules.contacts} moduleKey="contacts" record={record} />;
}
