import Card from "../../components/design-system/Card";
import StatusBadge from "../../components/design-system/StatusBadge";
import ScreenHeader from "./ScreenHeader";

export default function KanbanPage({ screen }) {
  return (
    <section className="space-y-6">
      <ScreenHeader description={screen.description} title={screen.title} />
      <div className="grid gap-4 xl:grid-cols-6">
        {screen.columns.map((column) => (
          <Card key={column.title} title={column.title}>
            <div className="space-y-3">
              {column.items.map((item) => (
                <article className="rounded-bms-control border border-bms-border bg-bms-subtle p-4" key={item.name}>
                  <p className="font-semibold text-bms-text">{item.name}</p>
                  <p className="mt-1 text-sm text-bms-muted">{item.customer}</p>
                  <p className="mt-2 text-sm font-semibold text-bms-money">{item.value}</p>
                  <div className="mt-3">
                    <StatusBadge status={item.status} />
                  </div>
                </article>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

