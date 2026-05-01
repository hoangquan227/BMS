"use client";

import { useEffect, useMemo, useState } from "react";

const employee = {
  name: "Nguyễn Minh",
  title: "Kế toán dịch vụ",
};

const incomeActions = [
  "Hoàn thành 2 việc trễ hạn trước 16:00 hôm nay.",
  "Bổ sung minh chứng cho 1 ghi nhận đang chờ leader duyệt.",
  "Giảm 1 việc phải làm lại bằng cách kiểm tra chéo trước khi gửi khách.",
];

function formatDuration(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

function convertToDms(value, positiveSuffix, negativeSuffix) {
  const absolute = Math.abs(value);
  const degrees = Math.floor(absolute);
  const minutesFloat = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = Math.round((minutesFloat - minutes) * 60);
  const suffix = value >= 0 ? positiveSuffix : negativeSuffix;

  return `${degrees}°${minutes}'${seconds}"${suffix}`;
}

function formatDms(position) {
  if (!position) {
    return "Chưa bật định vị DMS";
  }

  const latitude = convertToDms(position.latitude, "B", "N");
  const longitude = convertToDms(position.longitude, "Đ", "T");

  return `${latitude}, ${longitude}`;
}

export default function WorkSessionClock() {
  const [secondsInSystem, setSecondsInSystem] = useState(0);
  const [secondsOutsideSystem, setSecondsOutsideSystem] = useState(0);
  const [secondsGovernmentWork, setSecondsGovernmentWork] = useState(0);
  const [governmentMode, setGovernmentMode] = useState(false);
  const [position, setPosition] = useState(null);
  const [locationMessage, setLocationMessage] = useState("Chưa bật định vị DMS");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsInSystem((current) => current + 1);
      setSecondsOutsideSystem((current) => (document.hidden ? current + 1 : current));
      setSecondsGovernmentWork((current) => (governmentMode ? current + 1 : current));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [governmentMode]);

  function enableGovernmentWork() {
    setGovernmentMode((current) => !current);

    if (!governmentMode && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (currentPosition) => {
          setPosition({
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
          });
          setLocationMessage("Đã bật định vị DMS");
        },
        () => {
          setLocationMessage("Không lấy được định vị DMS");
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    }
  }

  const locationText = useMemo(() => formatDms(position), [position]);

  return (
    <section className="mt-4 space-y-3 rounded-bms-card border border-bms-border bg-bms-subtle p-4">
      <div className="grid gap-3 xl:grid-cols-[320px_1fr]">
        <div className="rounded-bms-control bg-white p-4 ring-1 ring-green-100">
          <p className="text-xs font-extrabold uppercase text-bms-muted">Thu nhập trong tháng tới hiện tại</p>
          <p className="mt-2 text-3xl font-black text-bms-success">11.900.000 đ</p>
          <p className="mt-1 text-xs font-semibold text-slate-700">
            Tạm tính theo bảng công, điểm thi đua và khoản đã duyệt.
          </p>
        </div>

        <div className="rounded-bms-control bg-white p-4 ring-1 ring-blue-100">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase text-bms-muted">3 việc cần làm để cải thiện thu nhập</p>
              <p className="text-sm font-semibold text-slate-700">Ưu tiên việc có thể làm ngay trong hôm nay.</p>
            </div>
            <span className="rounded-bms-pill bg-blue-50 px-3 py-1 text-sm font-extrabold text-bms-primary">
              Cơ hội tăng: +650.000 đ
            </span>
          </div>
          <ol className="mt-3 grid gap-2 lg:grid-cols-3">
            {incomeActions.map((action, index) => (
              <li className="rounded-[12px] bg-bms-subtle px-3 py-2 text-sm font-bold leading-6 text-slate-900" key={action}>
                {index + 1}. {action}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-bms-control bg-white p-3">
          <p className="text-xs font-bold uppercase text-bms-muted">Giờ đăng nhập hệ thống</p>
          <p className="mt-1 text-xl font-extrabold text-bms-primary">{formatDuration(secondsInSystem)}</p>
          <p className="mt-1 text-xs font-semibold text-slate-700">Có tính theo thời gian trong hệ thống</p>
        </div>

        <div className="rounded-bms-control bg-white p-3">
          <p className="text-xs font-bold uppercase text-bms-muted">Giờ không ở trong hệ thống</p>
          <p className="mt-1 text-xl font-extrabold text-bms-danger">{formatDuration(secondsOutsideSystem)}</p>
          <p className="mt-1 text-xs font-semibold text-slate-700">Không tính công</p>
        </div>

        <div className="rounded-bms-control bg-white p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase text-bms-muted">Giờ làm với cơ quan nhà nước</p>
              <p className="mt-1 text-xl font-extrabold text-bms-success">{formatDuration(secondsGovernmentWork)}</p>
            </div>
            <button
              className={`shrink-0 rounded-bms-pill px-3 py-1.5 text-xs font-bold transition active:translate-y-px ${
                governmentMode ? "bg-bms-success text-white" : "bg-blue-50 text-bms-primary"
              }`}
              onClick={enableGovernmentWork}
              type="button"
            >
              {governmentMode ? "Đang bật" : "Bật DMS"}
            </button>
          </div>
          <p className="mt-1 text-xs font-semibold text-slate-700">Có tính công khi bật định vị DMS</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-bms-border pt-3 text-sm font-semibold text-slate-900 lg:flex-row lg:items-center lg:justify-between">
        <p>
          Nhân viên: <span className="text-bms-primary">{employee.name}</span> · Chức danh:{" "}
          <span className="text-bms-primary">{employee.title}</span>
        </p>
        <p className="text-xs font-bold text-slate-700">
          {locationMessage}: <span className="text-bms-money">{locationText}</span>
        </p>
      </div>
    </section>
  );
}
