import Card from "../../components/design-system/Card";
import ScreenHeader from "./ScreenHeader";
import ThiDuaStatGrid from "../thi-dua/components/ThiDuaStatGrid";
import ThiDuaTable from "../thi-dua/components/ThiDuaTable";
import { activityScreens } from "../data/activity-analytics-data";

function columnsFromRows(rows = []) {
  const first = rows[0] || {};
  return Object.keys(first)
    .filter((key) => !["id", "nhanVienId", "teamId"].includes(key))
    .map((key) => ({
      key,
      label: key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase()),
      type:
        key.toLowerCase().includes("trangthai") ||
        key.toLowerCase().includes("mucdo") ||
        key.toLowerCase().includes("phanloai")
          ? "status"
          : undefined,
    }));
}

export function getActivityMetadata(screenKey) {
  const screen = activityScreens[screenKey];
  return {
    title: screen?.title || "Phân tích hoạt động",
    description: screen?.description || "Phân tích hoạt động làm việc minh bạch trong TCKN BMS.",
  };
}

export default function ActivityAnalyticsPage({ screenKey }) {
  const screen = activityScreens[screenKey];

  if (!screen) {
    return (
      <ScreenHeader
        description="Route phân tích hoạt động chưa có cấu hình hiển thị."
        title="Chưa có dữ liệu"
      />
    );
  }

  return (
    <>
      <ScreenHeader description={screen.description} title={screen.title} />

      <Card className="mb-5 border-blue-100 bg-blue-50" title="Nguyên tắc minh bạch">
        <p className="text-base font-semibold leading-7 text-slate-900">
          Dữ liệu hoạt động chỉ dùng để phân tích vận hành, cải thiện quy trình và hỗ trợ leader giao việc tốt hơn.
          Hệ thống không keylogger, không đọc nội dung cá nhân, không tự động chụp màn hình, không tự động trừ lương
          và không tự động phạt.
        </p>
      </Card>

      {screen.stats ? (
        <div className="mb-6">
          <ThiDuaStatGrid stats={screen.stats} />
        </div>
      ) : null}

      <Card title={screen.title}>
        <ThiDuaTable columns={columnsFromRows(screen.rows)} rows={screen.rows} />
      </Card>
    </>
  );
}
