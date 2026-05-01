import StatusBadge from "../../components/design-system/StatusBadge";

export default function RecordTable({ columns = [], rows = [] }) {
  return (
    <div className="overflow-hidden rounded-bms-card border border-bms-border bg-white">
      <div className="grid gap-3 p-4 md:hidden">
        {rows.map((row, index) => (
          <article className="rounded-bms-control border border-bms-border bg-bms-subtle p-4" key={row.id || index}>
            {columns.map((column) => (
              <div className="mb-3 last:mb-0" key={column.key}>
                <p className="text-xs font-semibold uppercase text-bms-muted">{column.label}</p>
                <div className="mt-1 text-base font-medium text-bms-text">
                  {column.type === "status" ? <StatusBadge status={row[column.key]} /> : row[column.key]}
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-bms-subtle text-bms-muted">
            <tr>
              {columns.map((column) => (
                <th className="px-4 py-3 font-semibold" key={column.key}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-bms-border">
            {rows.map((row, index) => (
              <tr className="transition-colors hover:bg-bms-subtle" key={row.id || index}>
                {columns.map((column) => (
                  <td className="px-4 py-4 text-bms-text" key={column.key}>
                    {column.type === "status" ? <StatusBadge status={row[column.key]} /> : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

