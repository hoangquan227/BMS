import CrmDetailPage from "../../../components/CrmDetailPage";
import { crmModules, findCrmRecord } from "../../../data/crm-data";

const tabTitles = {
  "tong-quan": "Tổng quan",
  "lien-he": "Liên hệ",
  "cong-viec": "Công việc",
  "yeu-cau-ho-tro": "Yêu cầu hỗ trợ",
  "dich-vu-dang-dung": "Dịch vụ đang dùng",
  "hop-dong": "Hợp đồng",
  "tai-chinh": "Tài chính",
  "ho-so-chung-tu": "Hồ sơ và chứng từ",
  "tai-khoan-truy-cap": "Tài khoản truy cập",
  "lich-su-trao-doi": "Lịch sử trao đổi",
  "ghi-chu-noi-bo": "Ghi chú nội bộ",
  "lich-su": "Lịch sử",
};

export async function generateMetadata({ params }) {
  const { id, tabKey } = await params;
  const record = findCrmRecord("companies", id);
  const tabTitle = tabTitles[tabKey] || "Nghiệp vụ liên quan";

  return {
    title: `${tabTitle} công ty ${record?.name || id}`,
    description: `Xem ${tabTitle.toLowerCase()} được liên kết với công ty ${record?.name || id}.`,
  };
}

export default async function Page({ params }) {
  const { id, tabKey } = await params;
  const record = findCrmRecord("companies", id);

  return <CrmDetailPage activeTabKey={tabKey} module={crmModules.companies} moduleKey="companies" record={record} />;
}
