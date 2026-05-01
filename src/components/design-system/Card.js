import { joinClassNames } from "./utils";

export default function Card({ title = "Thông tin cần xử lý", children, className = "" }) {
  return (
    <section
      className={joinClassNames(
        "rounded-bms-card border border-bms-border bg-bms-card p-6 shadow-[var(--shadow-card)]",
        className
      )}
    >
      <h2 className="text-lg font-semibold text-bms-text">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

