import Card from "./Card";
import StatusBadge from "./StatusBadge";

export default function AccessAccountCard({
  systemName = "Tài khoản thuế điện tử",
  username = "mst-0312345678",
  owner = "Công ty An Phát",
  status = "Cần kiểm tra",
}) {
  return (
    <Card title={systemName}>
      <div className="space-y-3 text-sm text-bms-muted">
        <p>Tên đăng nhập: <span className="font-semibold text-bms-text">{username}</span></p>
        <p>Đơn vị sử dụng: <span className="font-semibold text-bms-text">{owner}</span></p>
        <StatusBadge status={status} />
      </div>
    </Card>
  );
}

