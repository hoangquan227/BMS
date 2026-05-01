"use client";

import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import StatusBadge from "./StatusBadge";
import ToastHost from "./ToastHost";

const actions = [
  {
    label: "Tạo đề nghị thanh toán",
    status: "Chờ thanh toán",
    message: "Đã tạo đề nghị thanh toán.",
  },
  {
    label: "Đánh dấu đã gửi hóa đơn",
    status: "Đã gửi hóa đơn",
    message: "Đã cập nhật trạng thái hóa đơn.",
  },
  {
    label: "Ghi nhận thanh toán",
    status: "Đã thanh toán",
    message: "Đã ghi nhận thanh toán khách hàng.",
  },
  {
    label: "Đối chiếu sao kê",
    status: "Đã đối chiếu",
    message: "Đã đối chiếu giao dịch.",
  },
];

export default function FinanceActionPanel() {
  const [status, setStatus] = useState("Chờ duyệt");
  const [toast, setToast] = useState(null);

  function runAction(action) {
    setStatus(action.status);
    setToast({
      title: "Cập nhật thành công",
      description: action.message,
      status: action.status,
    });
  }

  return (
    <Card title="Tài chính khách hàng" className={status === "Quá hạn" ? "ring-2 ring-red-100" : ""}>
      <div className="space-y-4">
        <StatusBadge status={status} />
        <div className="grid gap-3 sm:grid-cols-2">
          {actions.map((action) => (
            <Button key={action.label} onClick={() => runAction(action)} variant="secondary">
              {action.label}
            </Button>
          ))}
          <Button onClick={() => setStatus("Quá hạn")} variant="danger">
            Đánh dấu quá hạn
          </Button>
        </div>
      </div>
      <ToastHost toast={toast} />
    </Card>
  );
}
