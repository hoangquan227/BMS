import { joinClassNames } from "./utils";

const buttonStyles = {
  primary: "bg-bms-primary text-white hover:bg-bms-primary-strong",
  secondary: "border border-bms-border bg-white text-bms-text hover:bg-bms-subtle",
  danger: "bg-bms-danger text-white hover:bg-red-700",
  ghost: "text-bms-primary hover:bg-blue-50",
};

const sizeStyles = {
  sm: "min-h-10 px-3 text-[14px]",
  md: "min-h-11 px-4 text-[15px]",
  lg: "min-h-12 px-5 text-[16px]",
};

export default function Button({
  children = "Lưu thông tin",
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  loading = false,
  disabled = false,
  loadingText = "Đang xử lý",
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      aria-busy={loading}
      className={joinClassNames(
        "inline-flex items-center justify-center gap-2 rounded-bms-control font-extrabold transition duration-150",
        "active:translate-y-px active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100",
        "disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none",
        buttonStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      <span>{loading ? loadingText : children}</span>
    </button>
  );
}
