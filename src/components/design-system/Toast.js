"use client";

import { useEffect, useState } from "react";
import StatusBadge from "./StatusBadge";
import { joinClassNames } from "./utils";

export default function Toast({
  title = "Đã lưu thành công",
  description = "Thông tin đã được cập nhật vào hệ thống.",
  status = "Hoàn thành",
  duration = 3500,
  onClose,
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={joinClassNames(
        "flex max-w-md gap-3 rounded-bms-card border border-bms-border bg-white p-4 shadow-[var(--shadow-card)]",
        "animate-[toastIn_160ms_ease-out]"
      )}
      role="status"
    >
      <StatusBadge status={status} />
      <div>
        <p className="font-semibold text-bms-text">{title}</p>
        <p className="mt-1 text-sm text-bms-muted">{description}</p>
      </div>
    </div>
  );
}
