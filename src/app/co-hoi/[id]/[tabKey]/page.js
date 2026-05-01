import CrmDetailPage from "../../../components/CrmDetailPage";
import { crmModules, findCrmRecord } from "../../../data/crm-data";

const tabTitles = {
  "tong-quan": "Tổng quan",
  "nhu-cau-dich-vu": "Nhu cầu dịch vụ",
  "cong-viec-ban-hang": "Công việc bán hàng",
  "lich-hen": "Lịch hẹn",
  "bao-gia": "Báo giá",
  "ho-so-khao-sat": "Hồ sơ khảo sát",
  "tai-lieu-khach-gui": "Tài liệu khách gửi",
  "lich-su-trao-doi": "Lịch sử trao đổi",
  "chuyen-doi": "Chuyển đổi",
  "ghi-chu-noi-bo": "Ghi chú nội bộ",
  "lich-su": "Lịch sử",
};

export async function generateMetadata({ params }) {
  const { id, tabKey } = await params;
  const record = findCrmRecord("deals", id);
  const tabTitle = tabTitles[tabKey] || "Nghiệp vụ liên quan";

  return {
    title: `${tabTitle} cơ hội ${record?.name || id}`,
    description: `Xem ${tabTitle.toLowerCase()} được liên kết với cơ hội ${record?.name || id}.`,
  };
}

export default async function Page({ params }) {
  const { id, tabKey } = await params;
  const record = findCrmRecord("deals", id);

  return <CrmDetailPage activeTabKey={tabKey} module={crmModules.deals} moduleKey="deals" record={record} />;
}
