export default function LoadingState({ label = "Đang tải dữ liệu, vui lòng chờ trong giây lát." }) {
  return (
    <div className="rounded-bms-card border border-bms-border bg-white p-6">
      <div className="h-4 w-40 animate-pulse rounded-bms-pill bg-slate-200" />
      <div className="mt-4 h-10 animate-pulse rounded-bms-control bg-slate-200" />
      <div className="mt-3 h-10 animate-pulse rounded-bms-control bg-slate-200" />
      <p className="mt-4 text-sm text-bms-muted">{label}</p>
    </div>
  );
}
