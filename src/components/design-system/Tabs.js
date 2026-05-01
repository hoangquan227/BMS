import { joinClassNames } from "./utils";

export default function Tabs({
  tabs = ["Tất cả", "Cần xử lý", "Chờ duyệt", "Hoàn thành"],
  active = "Tất cả",
}) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-bms-control bg-bms-subtle p-1" role="tablist">
      {tabs.map((tab) => (
        <button
          className={joinClassNames(
            "min-h-10 shrink-0 rounded-xl px-4 text-sm font-semibold",
            active === tab ? "bg-white text-bms-primary shadow-sm" : "text-bms-muted"
          )}
          key={tab}
          role="tab"
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

