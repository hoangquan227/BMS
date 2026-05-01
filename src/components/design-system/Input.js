import { joinClassNames } from "./utils";

export default function Input({
  label = "Tên công ty",
  helperText = "Nhập thông tin chính xác để dễ tra cứu sau này.",
  error = "",
  className = "",
  ...props
}) {
  return (
    <label className={joinClassNames("block", className)}>
      <span className="mb-2 block text-sm font-semibold text-bms-text">{label}</span>
      <input
        className={joinClassNames(
          "min-h-12 w-full rounded-bms-control border bg-white px-4 text-base text-bms-text outline-none transition placeholder:text-slate-400 focus:border-bms-primary focus:ring-4 focus:ring-blue-100",
          error ? "border-bms-danger" : "border-bms-border"
        )}
        placeholder="Nhập nội dung"
        {...props}
      />
      {error ? (
        <span className="mt-2 block text-sm font-medium text-bms-danger">{error}</span>
      ) : (
        <span className="mt-2 block text-sm text-bms-muted">{helperText}</span>
      )}
    </label>
  );
}

