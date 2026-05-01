import Card from "./Card";
import StatusBadge from "./StatusBadge";

export default function CustomerCard({
  name = "Công ty An Phát",
  contact = "Nguyễn Minh",
  phone = "0901 234 567",
  status = "Đang làm",
}) {
  return (
    <Card title={name}>
      <div className="space-y-3 text-sm">
        <p className="text-bms-muted">Người liên hệ: <span className="font-semibold text-bms-text">{contact}</span></p>
        <p className="text-bms-muted">Số điện thoại: <span className="font-semibold text-bms-text">{phone}</span></p>
        <StatusBadge status={status} />
      </div>
    </Card>
  );
}

