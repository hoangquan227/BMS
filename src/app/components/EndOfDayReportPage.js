import Button from "../../components/design-system/Button";
import Card from "../../components/design-system/Card";
import Input from "../../components/design-system/Input";
import StatusBadge from "../../components/design-system/StatusBadge";
import ScreenHeader from "./ScreenHeader";

const mitItems = [
  { name: "MIT 1: Nộp tờ khai thuế tháng", status: "Hoàn thành" },
  { name: "MIT 2: Đối chiếu sao kê khách hàng", status: "Đang làm" },
  { name: "MIT 3: Nhắc khách bổ sung chứng từ", status: "Chờ khách" },
];

export default function EndOfDayReportPage() {
  return (
    <section className="space-y-6">
      <ScreenHeader
        description="Ghi nhận kết quả MIT, việc phát sinh, khó khăn cần hỗ trợ và ghi chú bàn giao cuối ngày."
        title="Báo cáo cuối ngày"
      />
      <Card title="Kết quả MIT hôm nay">
        <div className="space-y-3">
          {mitItems.map((item) => (
            <div className="flex flex-col gap-2 rounded-bms-control bg-bms-subtle p-4 sm:flex-row sm:items-center sm:justify-between" key={item.name}>
              <p className="font-semibold text-bms-text">{item.name}</p>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      </Card>
      <Card title="Thông tin bàn giao">
        <div className="grid gap-4 lg:grid-cols-3">
          <Input label="Việc phát sinh" placeholder="Nhập việc phát sinh trong ngày" />
          <Input label="Khó khăn cần hỗ trợ" placeholder="Nhập khó khăn cần quản lý hỗ trợ" />
          <Input label="Ghi chú bàn giao" placeholder="Nhập nội dung cần bàn giao" />
        </div>
        <div className="mt-4">
          <Button>Gửi báo cáo cuối ngày</Button>
        </div>
      </Card>
    </section>
  );
}

