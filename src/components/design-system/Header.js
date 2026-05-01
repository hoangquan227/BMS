import Button from "./Button";
import SearchInput from "./SearchInput";

export default function Header({
  title = "Tổng quan",
  description = "Xem nhanh việc hôm nay, việc trễ hạn và khách hàng cần chú ý.",
}) {
  return (
    <header className="border-b border-bms-border bg-white px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-bms-text">{title}</h1>
          <p className="mt-1 text-base text-bms-muted">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SearchInput />
          <Button>Thêm mới</Button>
        </div>
      </div>
    </header>
  );
}

