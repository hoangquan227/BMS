import Card from "../../components/design-system/Card";
import StatusBadge from "../../components/design-system/StatusBadge";
import Tabs from "../../components/design-system/Tabs";
import AccessPasswordCard from "../../components/design-system/AccessPasswordCard";
import FolderDisclosureCard from "../../components/design-system/FolderDisclosureCard";
import ScreenHeader from "./ScreenHeader";
import RecordTable from "./RecordTable";

const tabs = [
  "Tổng quan",
  "Liên hệ",
  "Cơ hội",
  "Báo giá",
  "Hợp đồng",
  "Đề nghị thanh toán",
  "Hóa đơn thuế",
  "Thanh toán",
  "Sao kê",
  "Việc cần làm",
  "Tủ hồ sơ",
  "Tài khoản truy cập",
  "Hỗ trợ",
  "Lịch sử",
];

export default function CompanyDetailPage({ id }) {
  return (
    <section className="space-y-6">
      <ScreenHeader
        description="Tập trung toàn bộ dữ liệu liên quan đến công ty, từ liên hệ, hợp đồng, hồ sơ đến thanh toán."
        title={`Chi tiết công ty ${id}`}
      />
      <Tabs active="Tổng quan" tabs={tabs} />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Thông tin chính">
          <div className="space-y-3 text-sm text-bms-muted">
            <p>Mã số thuế: <span className="font-semibold text-bms-text">0312345678</span></p>
            <p>Dịch vụ: <span className="font-semibold text-bms-text">Kế toán trọn gói, BHXH</span></p>
            <p>Phụ trách: <span className="font-semibold text-bms-text">Nguyễn Minh</span></p>
            <StatusBadge status="Đang làm" />
          </div>
        </Card>
        <FolderDisclosureCard status="Thiếu hồ sơ" title="Tủ hồ sơ công ty" />
        <AccessPasswordCard />
      </div>
      <RecordTable
        columns={[
          { key: "name", label: "Hạng mục" },
          { key: "owner", label: "Người phụ trách" },
          { key: "due", label: "Thời hạn" },
          { key: "status", label: "Trạng thái", type: "status" },
        ]}
        rows={[
          { name: "Gửi báo giá dịch vụ", owner: "Trần Hà", due: "Hôm nay", status: "Đang làm" },
          { name: "Đối chiếu thanh toán", owner: "Lê Bình", due: "Quá hạn", status: "Quá hạn" },
          { name: "Bổ sung giấy phép", owner: "Nguyễn Minh", due: "Tuần này", status: "Thiếu hồ sơ" },
        ]}
      />
    </section>
  );
}

