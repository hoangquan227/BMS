import Link from "next/link";
import StatusBadge from "../../components/design-system/StatusBadge";

function renderCell(row, column, module) {
  const value = row[column.key] || "--";

  if (column.primary) {
    return (
      <Link className="font-black text-slate-950 hover:text-bms-primary" href={`${module.route}/${row.id}`}>
        {value}
      </Link>
    );
  }

  if (column.key === "status" || column.key === "paymentStatus") {
    return <StatusBadge className="text-xs" status={value} />;
  }

  if (column.key === "tagsText") {
    return (
      <div className="flex flex-wrap gap-1">
        {(row.tags || [value]).slice(0, 3).map((tag) => (
          <span className="rounded-bms-pill bg-blue-50 px-2 py-1 text-[13px] font-bold text-bms-primary" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    );
  }

  return <span className="line-clamp-1">{value}</span>;
}

export default function CrmListPage({ module }) {
  return (
    <section className="overflow-hidden rounded-[14px] border border-bms-border bg-white">
      <div className="flex flex-col gap-3 border-b border-bms-border bg-slate-50 px-4 py-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-bms-pill bg-green-50 px-3 py-2 text-[14px] font-extrabold text-bms-success" type="button">
            Lọc
          </button>
          <button className="rounded-bms-pill border border-bms-border bg-white px-4 py-2 text-[14px] font-extrabold text-slate-900" type="button">
            {module.filterLabel}
          </button>
          <input
            className="min-h-10 w-full min-w-[220px] rounded-bms-pill border border-bms-border px-4 text-[14px] font-semibold outline-none focus:border-bms-primary sm:w-[320px]"
            placeholder="Tìm kiếm trong danh sách"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-bms-pill border border-bms-border bg-white px-3 py-2 text-[14px] font-extrabold text-slate-700" type="button">
            Dạng bảng
          </button>
          <button className="rounded-bms-pill bg-bms-success px-4 py-2 text-[14px] font-extrabold text-white" type="button">
            + {module.createLabel}
          </button>
        </div>
      </div>

      <div className="overflow-auto">
        <table className="w-full min-w-[980px] text-left text-[14px]">
          <thead className="border-b border-bms-border bg-white text-[13px] uppercase text-slate-700">
            <tr>
              <th className="w-10 px-4 py-3">
                <input className="h-4 w-4 rounded border-bms-border" type="checkbox" />
              </th>
              {module.columns.map((column) => (
                <th className="border-l border-bms-border px-4 py-3 font-black" key={column.key}>
                  {column.label}
                </th>
              ))}
              <th className="border-l border-bms-border px-4 py-3 font-black">Tác vụ nhanh</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bms-border">
            {module.rows.map((row) => (
              <tr className="transition hover:bg-blue-50/60" key={row.id}>
                <td className="px-4 py-3">
                  <input className="h-4 w-4 rounded border-bms-border" type="checkbox" />
                </td>
                {module.columns.map((column) => (
                  <td className="border-l border-bms-border px-4 py-3 font-semibold text-slate-900" key={column.key}>
                    {renderCell(row, column, module)}
                  </td>
                ))}
                <td className="border-l border-bms-border px-4 py-3">
                  <Link className="font-black text-bms-primary hover:underline" href={`${module.route}/${row.id}`}>
                    Mở chi tiết
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="flex flex-col gap-2 border-t border-bms-border bg-white px-4 py-2 text-[13px] font-bold text-slate-800 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-5">
          {module.stats.map(([label, value]) => (
            <span key={label}>
              {label} <span className="text-bms-primary">{value}</span>
            </span>
          ))}
        </div>
        <span>Số bản ghi mỗi trang: 100 · 1 thành 100</span>
      </footer>
    </section>
  );
}
