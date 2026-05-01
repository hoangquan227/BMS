import Card from "./Card";
import StatusBadge from "./StatusBadge";

export default function FileCabinetCard({
  title = "Hồ sơ pháp lý công ty",
  fileCount = "12 tệp",
  updatedAt = "Cập nhật hôm nay",
  status = "Đã đủ",
}) {
  return (
    <Card title={title}>
      <div className="space-y-3 text-sm text-bms-muted">
        <p>Số lượng tài liệu: <span className="font-semibold text-bms-text">{fileCount}</span></p>
        <p>Lần cập nhật: <span className="font-semibold text-bms-text">{updatedAt}</span></p>
        <StatusBadge status={status} />
      </div>
    </Card>
  );
}

