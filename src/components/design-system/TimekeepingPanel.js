"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import ToastHost from "./ToastHost";

export default function TimekeepingPanel() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [toast, setToast] = useState(null);
  const [now, setNow] = useState("");

  useEffect(() => {
    function updateTime() {
      setNow(
        new Intl.DateTimeFormat("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date())
      );
    }

    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  function checkIn() {
    setCheckedIn(true);
    setToast({
      title: "Chấm công thành công",
      description: "Đã chấm công vào ca.",
      status: "Hoàn thành",
    });
  }

  function checkOut() {
    setCheckedOut(true);
    setToast({
      title: "Chấm công thành công",
      description: "Đã chấm công ra ca.",
      status: "Hoàn thành",
    });
  }

  return (
    <Card title="Chấm công">
      <div className="mb-4 rounded-bms-control bg-bms-subtle px-4 py-3">
        <p className="text-sm font-semibold text-bms-muted">Giờ hiện tại</p>
        <p className="mt-1 text-xl font-bold text-bms-text">{now || "Đang lấy giờ hiện tại"}</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button disabled={checkedIn} onClick={checkIn}>
          {checkedIn ? "Đã vào ca" : "Chấm công vào ca"}
        </Button>
        <Button disabled={!checkedIn || checkedOut} onClick={checkOut} variant="secondary">
          {checkedOut ? "Đã ra ca" : "Chấm công ra ca"}
        </Button>
        {checkedIn ? (
          <span className="inline-flex items-center gap-2 rounded-bms-pill bg-green-50 px-3 py-2 text-sm font-semibold text-bms-success">
            <span
              aria-hidden="true"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-bms-success text-xs text-white"
            >
              ✓
            </span>
            Đã ghi nhận vào ca
          </span>
        ) : null}
      </div>
      <ToastHost toast={toast} />
    </Card>
  );
}
