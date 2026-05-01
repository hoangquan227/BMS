import Card from "./Card";
import StatusBadge from "./StatusBadge";

export default function TaskCard({
  title = "Nộp tờ khai thuế tháng",
  assignee = "Trần Hà",
  dueDate = "Hôm nay",
  status = "Chưa làm",
}) {
  return (
    <Card title={title}>
      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <p className="text-bms-muted">Người phụ trách: <span className="font-semibold text-bms-text">{assignee}</span></p>
        <p className="text-bms-muted">Thời hạn: <span className="font-semibold text-bms-text">{dueDate}</span></p>
      </div>
      <div className="mt-4">
        <StatusBadge status={status} />
      </div>
    </Card>
  );
}

