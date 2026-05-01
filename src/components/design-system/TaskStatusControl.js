"use client";

import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import StatusBadge from "./StatusBadge";
import ToastHost from "./ToastHost";

export default function TaskStatusControl({
  title = "Nộp tờ khai thuế tháng",
  initialStatus = "Đang làm",
}) {
  const [status, setStatus] = useState(initialStatus);
  const [toast, setToast] = useState(null);

  function changeStatus(nextStatus) {
    setStatus(nextStatus);
    setToast({
      title: "Đã cập nhật công việc",
      description:
        nextStatus === "Hoàn thành"
          ? "Công việc đã chuyển sang trạng thái hoàn thành."
          : `Công việc đã chuyển sang trạng thái ${nextStatus.toLowerCase()}.`,
      status: nextStatus,
    });
  }

  return (
    <Card title={title} className={status === "Trễ hạn" ? "ring-2 ring-red-100" : ""}>
      <div className="flex flex-col gap-4">
        <StatusBadge status={status} />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => changeStatus("Đang làm")} variant="secondary">
            Đang làm
          </Button>
          <Button onClick={() => changeStatus("Hoàn thành")}>Hoàn thành</Button>
          <Button onClick={() => changeStatus("Trễ hạn")} variant="danger">
            Đánh dấu trễ hạn
          </Button>
        </div>
      </div>
      <ToastHost toast={toast} />
    </Card>
  );
}

