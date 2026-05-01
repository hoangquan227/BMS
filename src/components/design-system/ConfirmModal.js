import Button from "./Button";

export default function ConfirmModal({
  title = "Xác nhận thao tác",
  description = "Bạn có chắc muốn lưu thay đổi này không?",
  cancelText = "Hủy",
  confirmText = "Xác nhận",
  onCancel,
  onConfirm,
}) {
  return (
    <div className="rounded-bms-card border border-bms-border bg-white p-6 shadow-[var(--shadow-card)]">
      <h2 className="text-xl font-bold text-bms-text">{title}</h2>
      <p className="mt-3 text-base text-bms-muted">{description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button onClick={onCancel} variant="secondary">
          {cancelText}
        </Button>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </div>
    </div>
  );
}
