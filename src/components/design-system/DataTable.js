import StatusBadge from "./StatusBadge";

const defaultRows = [
  { name: "Công ty An Phát", owner: "Nguyễn Minh", due: "Hôm nay", status: "Đang làm" },
  { name: "Hóa đơn tháng 4", owner: "Trần Hà", due: "Ngày mai", status: "Chờ duyệt" },
  { name: "Thanh toán dịch vụ", owner: "Lê Bình", due: "Quá hạn", status: "Quá hạn" },
];

export default function DataTable({ rows = defaultRows }) {
  return (
    <div className="overflow-hidden rounded-bms-card border border-bms-border bg-white">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-bms-subtle text-bms-muted">
          <tr>
            <th className="px-4 py-3 font-semibold">Tên mục</th>
            <th className="px-4 py-3 font-semibold">Người phụ trách</th>
            <th className="px-4 py-3 font-semibold">Thời hạn</th>
            <th className="px-4 py-3 font-semibold">Trạng thái</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-bms-border">
          {rows.map((row) => (
            <tr key={`${row.name}-${row.owner}`}>
              <td className="px-4 py-4 font-semibold text-bms-text">{row.name}</td>
              <td className="px-4 py-4 text-bms-muted">{row.owner}</td>
              <td className="px-4 py-4 text-bms-muted">{row.due}</td>
              <td className="px-4 py-4">
                <StatusBadge status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

