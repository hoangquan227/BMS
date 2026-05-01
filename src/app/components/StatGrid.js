import Card from "../../components/design-system/Card";
import StatusBadge from "../../components/design-system/StatusBadge";

export default function StatGrid({ stats = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card className={stat.status === "Quá hạn" || stat.status === "Trễ hạn" ? "ring-2 ring-red-100" : ""} key={stat.label} title={stat.label}>
          <div className="flex items-end justify-between gap-3">
            <p className="text-3xl font-bold text-bms-text">{stat.value}</p>
            {stat.status ? <StatusBadge status={stat.status} /> : null}
          </div>
          {stat.note ? <p className="mt-3 text-sm text-bms-muted">{stat.note}</p> : null}
        </Card>
      ))}
    </div>
  );
}

