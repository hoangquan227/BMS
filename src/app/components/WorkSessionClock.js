"use client";

import { useEffect, useMemo, useState } from "react";

const employee = {
  name: "Nguyễn Minh",
  title: "Kế toán dịch vụ",
};

const incomeActions = [
  "Hoàn thành 2 việc trễ hạn trước 16:00.",
  "Bổ sung minh chứng đang chờ leader duyệt.",
  "Giảm việc làm lại bằng kiểm tra chéo.",
];

const viewModes = [
  { id: "compact", label: "Gọn" },
  { id: "minimal", label: "Mini" },
  { id: "full", label: "Đầy đủ" },
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

function readSavedMode() {
  if (typeof window === "undefined") {
    return "compact";
  }

  return window.localStorage.getItem("tckn-bms-work-clock-mode") || "compact";
}

function ClockItem({ label, value, tone = "primary", helper }) {
  const toneClass = {
    primary: "text-bms-primary",
    danger: "text-bms-danger",
    success: "text-bms-success",
    money: "text-bms-money",
  }[tone];

  return (
    <div className="min-w-0 rounded-[14px] bg-white px-3 py-2 ring-1 ring-bms-border">
      <p className="truncate text-[11px] font-extrabold uppercase text-slate-700">{label}</p>
      <p className={`mt-0.5 text-lg font-black leading-6 ${toneClass}`}>{value}</p>
      {helper ? <p className="mt-0.5 truncate text-[11px] font-semibold text-slate-700">{helper}</p> : null}
    </div>
  );
}

export default function WorkSessionClock() {
  const [mode, setMode] = useState(readSavedMode);
  const [secondsInSystem, setSecondsInSystem] = useState(0);
  const [secondsOutsideSystem, setSecondsOutsideSystem] = useState(0);
  const [secondsGovernmentWork, setSecondsGovernmentWork] = useState(0);
  const [governmentMode, setGovernmentMode] = useState(false);
  const [position, setPosition] = useState(null);
  const [locationMessage, setLocationMessage] = useState("Chưa bật định vị DMS");

  useEffect(() => {
    window.localStorage.setItem("tckn-bms-work-clock-mode", mode);
  }, [mode]);

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

  if (mode === "minimal") {
    return (
      <section className="mt-3 rounded-[14px] border border-bms-border bg-white px-3 py-2">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-extrabold text-slate-900">
            <span>Thu nhập: <span className="text-bms-success">11.900.000 đ</span></span>
            <span>Trong hệ thống: <span className="text-bms-primary">{formatDuration(secondsInSystem)}</span></span>
            <span>Nhân viên: <span className="text-bms-primary">{employee.name}</span></span>
          </div>
          <ModeSwitcher mode={mode} onChange={setMode} />
        </div>
      </section>
    );
  }

  return (
    <section className="mt-3 space-y-2 rounded-[16px] border border-bms-border bg-bms-subtle p-3">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black text-slate-950">
            Thu nhập tháng: <span className="text-bms-success">11.900.000 đ</span>
            <span className="mx-2 text-slate-400">|</span>
            Cơ hội tăng: <span className="text-bms-primary">+650.000 đ</span>
          </p>
          <p className="text-xs font-bold text-slate-700">
            Nhân viên: <span className="text-bms-primary">{employee.name}</span> · Chức danh:{" "}
            <span className="text-bms-primary">{employee.title}</span>
          </p>
        </div>
        <ModeSwitcher mode={mode} onChange={setMode} />
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        <ClockItem
          helper="Có tính công"
          label="Giờ đăng nhập"
          tone="primary"
          value={formatDuration(secondsInSystem)}
        />
        <ClockItem
          helper="Không tính công"
          label="Giờ ngoài hệ thống"
          tone="danger"
          value={formatDuration(secondsOutsideSystem)}
        />
        <div className="rounded-[14px] bg-white px-3 py-2 ring-1 ring-bms-border">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-[11px] font-extrabold uppercase text-slate-700">Giờ làm cơ quan nhà nước</p>
              <p className="mt-0.5 text-lg font-black leading-6 text-bms-success">{formatDuration(secondsGovernmentWork)}</p>
              <p className="mt-0.5 truncate text-[11px] font-semibold text-slate-700">Có tính công khi bật DMS</p>
            </div>
            <button
              className={`shrink-0 rounded-bms-pill px-3 py-1.5 text-xs font-bold transition hover:-translate-y-0.5 active:translate-y-px ${
                governmentMode ? "bg-bms-success text-white" : "bg-blue-50 text-bms-primary"
              }`}
              onClick={enableGovernmentWork}
              type="button"
            >
              {governmentMode ? "Đang bật" : "Bật DMS"}
            </button>
          </div>
        </div>
      </div>

      {mode === "full" ? (
        <div className="rounded-[14px] bg-white p-3 ring-1 ring-blue-100">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase text-slate-700">3 việc cần làm để cải thiện thu nhập</p>
              <p className="text-xs font-semibold text-slate-700">Ưu tiên việc có thể làm ngay trong hôm nay.</p>
            </div>
          </div>
          <ol className="mt-2 grid gap-2 lg:grid-cols-3">
            {incomeActions.map((action, index) => (
              <li className="rounded-[10px] bg-bms-subtle px-3 py-2 text-xs font-bold leading-5 text-slate-900" key={action}>
                {index + 1}. {action}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="flex flex-col gap-1 rounded-[12px] bg-white px-3 py-2 text-xs font-bold text-slate-900 ring-1 ring-blue-100 lg:flex-row lg:items-center lg:gap-3">
          <span className="font-black uppercase text-slate-700">3 việc tăng thu nhập:</span>
          {incomeActions.map((action, index) => (
            <span className="truncate" key={action}>
              {index + 1}. {action}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-1 border-t border-bms-border pt-2 text-xs font-bold text-slate-800 lg:flex-row lg:items-center lg:justify-between">
        <p>
          DMS: <span className="text-bms-money">{locationText}</span>
        </p>
        <p>
          Trạng thái: <span className="text-bms-primary">{locationMessage}</span>
        </p>
      </div>
    </section>
  );
}

function ModeSwitcher({ mode, onChange }) {
  return (
    <div className="flex w-fit rounded-bms-pill bg-white p-1 ring-1 ring-bms-border">
      {viewModes.map((item) => (
        <button
          className={`rounded-bms-pill px-3 py-1.5 text-xs font-extrabold transition active:translate-y-px ${
            mode === item.id ? "bg-bms-primary text-white shadow-sm" : "text-slate-700 hover:bg-blue-50 hover:text-bms-primary"
          }`}
          key={item.id}
          onClick={() => onChange(item.id)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
