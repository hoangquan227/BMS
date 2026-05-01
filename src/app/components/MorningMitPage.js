import MorningMitPanel from "../../components/design-system/MorningMitPanel";
import ScreenHeader from "./ScreenHeader";

export default function MorningMitPage() {
  return (
    <section className="space-y-6">
      <ScreenHeader
        description="Nhập 3 việc quan trọng nhất trong ngày. Hệ thống chỉ cho tiếp tục khi đã nhập đủ."
        title="MIT đầu ngày"
      />
      <MorningMitPanel />
    </section>
  );
}

