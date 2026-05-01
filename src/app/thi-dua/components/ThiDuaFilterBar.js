import Card from "../../../components/design-system/Card";

const filters = [
  { label: "Kỳ thi đua", value: "Thi đua tháng 05/2026" },
  { label: "Team", value: "Tất cả team" },
  { label: "Nhân viên", value: "Tất cả nhân viên" },
  { label: "Nhóm tiêu chí", value: "Tất cả nhóm tiêu chí" },
  { label: "Trạng thái", value: "Tất cả trạng thái" },
];

export default function ThiDuaFilterBar() {
  return (
    <Card className="mb-5" title="Bộ lọc nhanh">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {filters.map((filter) => (
          <label className="block" key={filter.label}>
            <span className="text-sm font-semibold text-bms-muted">{filter.label}</span>
            <select className="mt-1 min-h-11 w-full rounded-bms-control border border-bms-border bg-white px-3 text-base font-semibold text-bms-text">
              <option>{filter.value}</option>
            </select>
          </label>
        ))}
      </div>
    </Card>
  );
}
