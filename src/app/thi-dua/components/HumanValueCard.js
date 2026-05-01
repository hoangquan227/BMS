import Card from "../../../components/design-system/Card";
import StatusBadge from "../../../components/design-system/StatusBadge";

export default function HumanValueCard({ value }) {
  return (
    <Card title={value.tenGiaTri}>
      <p className="text-base leading-7 text-bms-text">{value.moTa}</p>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="rounded-bms-control bg-green-50 p-4">
          <p className="font-extrabold text-bms-success">Hành vi nên có</p>
          <p className="mt-2 text-sm leading-6 text-bms-text">{value.hanhViNenCo}</p>
        </div>
        <div className="rounded-bms-control bg-red-50 p-4">
          <p className="font-extrabold text-bms-danger">Hành vi cần tránh</p>
          <p className="mt-2 text-sm leading-6 text-bms-text">{value.hanhViCanTranh}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-bms-muted">
        <span>Điểm tối đa: {value.diemToiDa}</span>
        <span>Minh chứng: {value.coCanMinhChung ? "Cần có" : "Không bắt buộc"}</span>
        <StatusBadge status={value.trangThai} />
      </div>
    </Card>
  );
}
