import Card from "../../components/design-system/Card";
import ScreenHeader from "./ScreenHeader";
import StatGrid from "./StatGrid";
import RecordTable from "./RecordTable";

export default function DashboardPage({ screen }) {
  return (
    <section className="space-y-6">
      <ScreenHeader description={screen.description} title={screen.title} />
      <StatGrid stats={screen.stats} />
      <div className="grid gap-4 lg:grid-cols-2">
        {screen.sections.map((section) => (
          <Card key={section.title} title={section.title}>
            <RecordTable columns={section.columns} rows={section.rows} />
          </Card>
        ))}
      </div>
    </section>
  );
}

