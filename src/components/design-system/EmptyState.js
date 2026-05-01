import Button from "./Button";

export default function EmptyState({
  title = "Chưa có dữ liệu",
  description = "Khi có thông tin mới, danh sách sẽ hiển thị tại đây.",
  action = "Thêm mới",
}) {
  return (
    <div className="rounded-bms-card border border-dashed border-bms-border bg-white p-8 text-center">
      <h2 className="text-xl font-bold text-bms-text">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-base text-bms-muted">{description}</p>
      <div className="mt-6">
        <Button>{action}</Button>
      </div>
    </div>
  );
}

