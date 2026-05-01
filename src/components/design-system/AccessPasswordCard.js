"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import ConfirmModal from "./ConfirmModal";
import ToastHost from "./ToastHost";

export default function AccessPasswordCard({
  systemName = "Tài khoản thuế điện tử",
  username = "mst-0312345678",
  password = "MatKhauBaoMat123",
  loginLink = "https://thuedientu.gdt.gov.vn",
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [visible, setVisible] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const timer = window.setTimeout(() => setVisible(false), 15000);
    return () => window.clearTimeout(timer);
  }, [visible]);

  async function copyPassword() {
    await navigator.clipboard?.writeText(password);
    setToast({
      title: "Đã sao chép",
      description: "Đã sao chép. Vui lòng bảo mật thông tin.",
      status: "Cần kiểm tra",
    });
  }

  return (
    <Card title={systemName}>
      <div className="space-y-4 text-sm">
        <p className="text-bms-muted">
          Tên đăng nhập: <span className="font-semibold text-bms-text">{username}</span>
        </p>
        <p className="text-bms-muted">
          Mật khẩu:{" "}
          <span className="font-semibold text-bms-text">{visible ? password : "••••••••••••"}</span>
        </p>
        <p className="text-bms-muted">
          Link đăng nhập:{" "}
          <a className="font-semibold text-bms-primary underline-offset-4 hover:underline" href={loginLink}>
            Mở trang đăng nhập
          </a>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => setShowConfirm(true)} variant="secondary">
            Xem mật khẩu
          </Button>
          <Button disabled={!visible} onClick={copyPassword}>
            Sao chép mật khẩu
          </Button>
        </div>
      </div>
      {showConfirm ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4"
          role="dialog"
        >
          <ConfirmModal
            confirmText="Tôi hiểu và muốn xem"
            description="Mật khẩu là thông tin nhạy cảm. Chỉ xem khi cần xử lý công việc được giao."
            onCancel={() => setShowConfirm(false)}
            onConfirm={() => {
              setVisible(true);
              setShowConfirm(false);
            }}
            title="Xác nhận xem mật khẩu"
          />
        </div>
      ) : null}
      <ToastHost toast={toast} />
    </Card>
  );
}
