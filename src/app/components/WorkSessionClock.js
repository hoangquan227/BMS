"use client";

import { useEffect, useMemo, useState } from "react";

const employee = {
  name: "Nguyễn Minh",
  title: "Kế toán dịch vụ",
};

const todayGoals = [
  "Hoàn tất hồ sơ thuế tháng 04 cho 3 khách hàng trọng điểm.",
  "Giảm việc trễ hạn bằng cách xử lý trước nhóm việc đến hạn hôm nay.",
  "Cập nhật đủ tiến độ công việc để leader hỗ trợ kịp thời.",
];

const unfinishedTasks = [
  "Bổ sung chứng từ còn thiếu cho Công ty An Phát.",
  "Gửi lại báo giá dịch vụ BHXH cho khách hàng mới.",
  "Đối chiếu 2 giao dịch ngân hàng chưa khớp sao kê.",
];

const incomeActions = [
  "Hoàn thành 2 việc trễ hạn trước 16:00.",
  "Bổ sung minh chứng đang chờ leader duyệt.",
  "Giảm việc làm lại bằng kiểm tra chéo.",
];

const displayModes = [
  {
    id: "hidden",
    label: "Tự động ẩn thanh thông tin",
    description: "Ẩn gần hết, chỉ còn nút mở lại.",
  },
  {
    id: "compact",
    label: "Chỉ hiện thanh nhỏ",
    description: "Giữ số liệu chính trên một thanh gọn.",
  },
  {
    id: "full",
    label: "Luôn hiện đầy đủ",
    description: "Hiện rõ mục tiêu, việc chưa xong và thu nhập.",
  },
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

function readSavedDisplayMode() {
  if (typeof window === "undefined") {
    return "full";
  }

  return window.localStorage.getItem("tckn-bms-work-strip-display-v3") || "full";
}

function ClockPill({ label, value, tone = "primary" }) {
  const toneClass = {
    primary: "text-bms-primary",
    danger: "text-bms-danger",
    success: "text-bms-success",
  }[tone];

  return (
    <div className="min-w-0 rounded-[10px] bg-white px-3 py-1.5 ring-1 ring-bms-border">
      <p className="truncate text-[12px] font-extrabold uppercase text-slate-700">{label}</p>
      <p className={`text-[16px] font-extrabold leading-5 ${toneClass}`}>{value}</p>
    </div>
  );
}

function FocusList({ title, tone = "primary", items }) {
  const toneClass = {
    primary: "border-blue-100 bg-blue-50 text-bms-primary",
    success: "border-green-100 bg-green-50 text-bms-success",
    danger: "border-red-100 bg-red-50 text-bms-danger",
  }[tone];

  return (
    <section className={`rounded-[12px] border p-3 ${toneClass}`}>
      <p className="mb-2 text-[13px] font-extrabold uppercase">{title}</p>
      <ol className="space-y-1">
        {items.map((item, index) => (
          <li className="rounded-[8px] bg-white px-3 py-2 text-[13px] font-extrabold leading-5 text-slate-950" key={item}>
            {index + 1}. {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function WorkSessionClock() {
  const [displayMode, setDisplayMode] = useState(readSavedDisplayMode);
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondsInSystem, setSecondsInSystem] = useState(0);
  const [secondsOutsideSystem, setSecondsOutsideSystem] = useState(0);
  const [secondsGovernmentWork, setSecondsGovernmentWork] = useState(0);
  const [governmentMode, setGovernmentMode] = useState(false);
  const [position, setPosition] = useState(null);
  const [locationMessage, setLocationMessage] = useState("Chưa bật định vị DMS");

  useEffect(() => {
    window.localStorage.setItem("tckn-bms-work-strip-display-v3", displayMode);
  }, [displayMode]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsInSystem((current) => current + 1);
      setSecondsOutsideSystem((current) => (document.hidden ? current + 1 : current));
      setSecondsGovernmentWork((current) => (governmentMode ? current + 1 : current));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [governmentMode]);

  function updateDisplayMode(nextMode) {
    setDisplayMode(nextMode);
    setMenuOpen(false);
  }

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

  if (displayMode === "hidden") {
    return (
      <section className="mt-2 flex justify-end">
        <DisplayMenu
          currentMode={displayMode}
          menuOpen={menuOpen}
          onChange={updateDisplayMode}
          onToggle={() => setMenuOpen((current) => !current)}
        />
      </section>
    );
  }

  return (
    <section className="mt-2 rounded-[12px] border border-bms-border bg-bms-subtle px-3 py-2">
      <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-[14px] font-extrabold text-slate-950">
            <span>
              Thu nhập tháng: <span className="text-bms-success">11.900.000 đ</span>
            </span>
            <span>
              Cơ hội tăng: <span className="text-bms-primary">+650.000 đ</span>
            </span>
            <span>
              Nhân viên: <span className="text-bms-primary">{employee.name}</span>
            </span>
            <span>
              Chức danh: <span className="text-bms-primary">{employee.title}</span>
            </span>
          </div>

          <div className="grid min-w-0 gap-2 sm:grid-cols-3">
            <ClockPill label="Giờ đăng nhập" value={formatDuration(secondsInSystem)} />
            <ClockPill label="Giờ ngoài hệ thống" tone="danger" value={formatDuration(secondsOutsideSystem)} />
            <div className="flex min-w-0 items-center gap-2 rounded-[10px] bg-white px-3 py-1.5 ring-1 ring-bms-border">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-extrabold uppercase text-slate-700">Giờ làm cơ quan nhà nước</p>
                <p className="text-[16px] font-extrabold leading-5 text-bms-success">{formatDuration(secondsGovernmentWork)}</p>
              </div>
              <button
                className={`shrink-0 rounded-bms-pill px-3 py-1.5 text-[13px] font-extrabold transition hover:-translate-y-0.5 active:translate-y-px ${
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

        <DisplayMenu
          currentMode={displayMode}
          menuOpen={menuOpen}
          onChange={updateDisplayMode}
          onToggle={() => setMenuOpen((current) => !current)}
        />
      </div>

      {displayMode === "compact" ? (
        <div className="mt-2 rounded-[10px] bg-white px-3 py-2 text-[13px] font-extrabold text-slate-900 ring-1 ring-bms-border">
          3 mục tiêu hôm nay · 3 công việc chưa hoàn thành · 3 việc cải thiện thu nhập
        </div>
      ) : null}

      {displayMode === "full" ? (
        <div className="mt-2 grid gap-2 xl:grid-cols-3">
          <FocusList items={todayGoals} title="3 mục tiêu hôm nay" tone="success" />
          <FocusList items={unfinishedTasks} title="3 công việc chưa hoàn thành" tone="danger" />
          <FocusList items={incomeActions} title="3 việc cải thiện thu nhập" tone="primary" />
          <div className="rounded-[10px] bg-white px-3 py-2 text-[13px] font-bold text-slate-800 ring-1 ring-bms-border xl:col-span-3">
            <span className="font-black text-bms-success">Làm việc trong hạnh phúc:</span>{" "}
            rõ việc quan trọng, biết việc còn nợ, thấy cơ hội tăng thu nhập và có quyền thu gọn khi cần tập trung.
            <span className="ml-3">DMS: <span className="text-bms-money">{locationText}</span></span>
            <span className="ml-3">Trạng thái: <span className="text-bms-primary">{locationMessage}</span></span>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function DisplayMenu({ currentMode, menuOpen, onChange, onToggle }) {
  return (
    <div className="relative ml-auto shrink-0">
      <button
        aria-expanded={menuOpen}
        className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-bms-border bg-white text-lg font-black leading-none text-slate-800 shadow-sm transition hover:border-bms-primary hover:text-bms-primary active:translate-y-px"
        onClick={onToggle}
        title="Tùy chọn hiển thị thanh thông tin"
        type="button"
      >
        ˅
      </button>

      {menuOpen ? (
        <div className="absolute right-0 z-50 mt-2 w-[280px] rounded-[10px] border border-bms-border bg-white p-2 shadow-bms">
          <p className="px-3 py-2 text-[13px] font-extrabold uppercase text-slate-700">Hiển thị thanh thông tin</p>
          {displayModes.map((mode) => (
            <button
              className="flex w-full gap-2 rounded-[8px] px-3 py-2 text-left transition hover:bg-blue-50"
              key={mode.id}
              onClick={() => onChange(mode.id)}
              type="button"
            >
              <span className="w-4 text-[14px] font-extrabold text-bms-primary">{currentMode === mode.id ? "✓" : ""}</span>
              <span>
                <span className="block text-[14px] font-extrabold text-slate-950">{mode.label}</span>
                <span className="block text-[13px] font-semibold text-slate-600">{mode.description}</span>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
