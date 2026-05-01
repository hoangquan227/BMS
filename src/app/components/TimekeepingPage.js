import TimekeepingPanel from "../../components/design-system/TimekeepingPanel";
import ScreenHeader from "./ScreenHeader";

export default function TimekeepingPage() {
  return (
    <section className="space-y-6">
      <ScreenHeader
        description="Chấm công vào ca, ra ca và xem trạng thái chấm công hôm nay."
        title="Chấm công"
      />
      <TimekeepingPanel />
    </section>
  );
}

