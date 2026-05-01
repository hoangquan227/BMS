"use client";

import { useState } from "react";

const releaseNotes = [
  {
    date: "01/05/2026",
    version: "Bản cập nhật giao diện làm việc",
    groups: [
      {
        name: "Không gian làm việc",
        items: [
          "Thêm chế độ ẩn, thanh nhỏ và đầy đủ cho khu vực thu nhập, đồng hồ và việc cần làm.",
          "Bổ sung thông điệp làm việc trong hạnh phúc để nhắc tinh thần sử dụng hệ thống.",
        ],
      },
      {
        name: "Thu nhập & cải thiện",
        items: [
          "Hiển thị thu nhập trong tháng tới thời điểm hiện tại.",
          "Làm rõ 3 việc cần làm để cải thiện thu nhập trong ngày.",
        ],
      },
      {
        name: "Thi đua & ghi nhận",
        items: [
          "Bổ sung chức năng in giấy chứng nhận thi đua theo tuần, tháng, quý, năm.",
          "Giữ cách trình bày nhẹ nhàng, hướng đến ghi nhận và cải thiện.",
        ],
      },
    ],
  },
  {
    date: "30/04/2026",
    version: "Bản cập nhật phân tích hoạt động",
    groups: [
      {
        name: "Phân tích hoạt động",
        items: [
          "Thêm nhóm màn hình phân tích hoạt động làm việc minh bạch.",
          "Bổ sung trang chính sách dữ liệu để nhân viên biết rõ dữ liệu nào được thu thập.",
        ],
      },
      {
        name: "Cá nhân hóa giao diện",
        items: [
          "Cho phép bật hoặc tắt nhóm chức năng theo nhu cầu từng vị trí.",
          "Thêm mẫu hiển thị cho nhân viên kinh doanh, kế toán dịch vụ và leader.",
        ],
      },
    ],
  },
];

export default function ReleaseNotesButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="rounded-bms-pill border border-bms-border bg-white px-3 py-2 text-xs font-black text-bms-primary shadow-sm transition hover:border-bms-primary hover:bg-blue-50 active:translate-y-px"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        Cập nhật
      </button>

      {open ? (
        <div className="absolute right-0 z-50 mt-2 max-h-[70vh] w-[min(92vw,520px)] overflow-auto rounded-[14px] border border-bms-border bg-white p-4 shadow-bms">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase text-bms-primary">Release note</p>
              <h2 className="text-lg font-black text-slate-950">Những cập nhật mới</h2>
              <p className="text-sm font-semibold text-slate-700">Phân loại theo ngày và nhóm chức năng.</p>
            </div>
            <button
              className="rounded-[8px] px-2 py-1 text-sm font-black text-slate-700 transition hover:bg-slate-100"
              onClick={() => setOpen(false)}
              type="button"
            >
              Đóng
            </button>
          </div>

          <div className="space-y-4">
            {releaseNotes.map((release) => (
              <article className="rounded-[12px] border border-bms-border p-3" key={`${release.date}-${release.version}`}>
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-black text-slate-950">{release.version}</h3>
                  <span className="rounded-bms-pill bg-blue-50 px-3 py-1 text-xs font-black text-bms-primary">
                    {release.date}
                  </span>
                </div>

                <div className="space-y-3">
                  {release.groups.map((group) => (
                    <section key={group.name}>
                      <p className="text-sm font-black text-slate-900">{group.name}</p>
                      <ul className="mt-1 space-y-1">
                        {group.items.map((item) => (
                          <li className="text-sm font-semibold leading-6 text-slate-700" key={item}>
                            - {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
