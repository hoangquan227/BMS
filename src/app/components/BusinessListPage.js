import Button from "../../components/design-system/Button";
import Card from "../../components/design-system/Card";
import Input from "../../components/design-system/Input";
import ScreenHeader from "./ScreenHeader";
import RecordTable from "./RecordTable";

export default function BusinessListPage({ screen }) {
  return (
    <section className="space-y-6">
      <ScreenHeader
        action={<Button>{screen.action || "Thêm mới"}</Button>}
        description={screen.description}
        title={screen.title}
      />
      {screen.filters ? (
        <Card title="Bộ lọc">
          <div className="grid gap-4 md:grid-cols-3">
            {screen.filters.map((filter) => (
              <Input helperText={filter.helperText} key={filter.label} label={filter.label} placeholder={filter.placeholder} />
            ))}
          </div>
        </Card>
      ) : null}
      <RecordTable columns={screen.columns} rows={screen.rows} />
    </section>
  );
}

