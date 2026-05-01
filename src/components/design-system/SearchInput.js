export default function SearchInput({
  label = "Tìm kiếm",
  placeholder = "Tìm theo tên công ty, mã số thuế hoặc người liên hệ",
  ...props
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <div className="flex min-h-12 items-center gap-3 rounded-bms-control border border-bms-border bg-white px-4 focus-within:border-bms-primary focus-within:ring-4 focus-within:ring-blue-100">
        <span className="text-sm font-semibold text-bms-muted" aria-hidden="true">
          Tìm
        </span>
        <input
          className="w-full bg-transparent text-base text-bms-text outline-none placeholder:text-slate-400"
          placeholder={placeholder}
          type="search"
          {...props}
        />
      </div>
    </label>
  );
}

