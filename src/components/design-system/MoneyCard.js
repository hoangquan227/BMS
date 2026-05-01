import Card from "./Card";
import StatusBadge from "./StatusBadge";
import { joinClassNames } from "./utils";

const successStatuses = ["Đã thanh toán", "Đã đối chiếu", "Đã duyệt", "Đã xuất hóa đơn"];
const dangerStatuses = ["Quá hạn"];

export default function MoneyCard({
  title = "Khoản tiền cần đối chiếu",
  customer = "Công ty An Phát",
  amount = "0 đ",
  status = "Chờ duyệt",
}) {
  const isSuccess = successStatuses.includes(status);
  const isDanger = dangerStatuses.includes(status);

  return (
    <Card
      title={title}
      className={joinClassNames(
        "border-l-4 transition-shadow hover:shadow-[var(--shadow-card)]",
        isDanger ? "border-l-bms-danger ring-2 ring-red-100" : "",
        isSuccess ? "border-l-bms-success" : "",
        !isDanger && !isSuccess ? "border-l-bms-money" : ""
      )}
    >
      <div className="space-y-4">
        <p className="text-sm text-bms-muted">
          Khách hàng: <span className="font-semibold text-bms-text">{customer}</span>
        </p>
        <p className="text-2xl font-bold text-bms-money">{amount}</p>
        <StatusBadge status={status} />
      </div>
    </Card>
  );
}
