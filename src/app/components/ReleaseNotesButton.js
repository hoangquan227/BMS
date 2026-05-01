"use client";

import { useMemo, useState } from "react";

const releaseItems = [
  {
    version: "v1.4.0",
    date: "2026-05-01",
    group: "Không gian làm việc",
    type: "Cải tiến",
    title: "Thanh thông tin có 3 chế độ hiển thị",
    detail: "Cho phép tự động ẩn, chỉ hiện thanh nhỏ hoặc luôn hiện đầy đủ giống tùy chọn thanh công cụ.",
  },
  {
    version: "v1.4.0",
    date: "2026-05-01",
    group: "Không gian làm việc",
    type: "Thêm mới",
    title: "Thông điệp làm việc trong hạnh phúc",
    detail: "Bổ sung tinh thần sử dụng hệ thống: rõ việc, dễ làm, giảm áp lực và tập trung vào hỗ trợ nhau.",
  },
  {
    version: "v1.4.0",
    date: "2026-05-01",
    group: "Công việc",
    type: "Thêm mới",
    title: "Hiển thị 3 mục tiêu hôm nay",
    detail: "Mỗi ngày nhân viên nhìn thấy ngay 3 mục tiêu quan trọng để ưu tiên đúng việc.",
  },
  {
    version: "v1.4.0",
    date: "2026-05-01",
    group: "Công việc",
    type: "Thêm mới",
    title: "Làm rõ 3 công việc chưa hoàn thành",
    detail: "Các việc còn nợ được đặt thành khối riêng để không bị lẫn với đồng hồ hoặc thu nhập.",
  },
  {
    version: "v1.4.0",
    date: "2026-05-01",
    group: "Thu nhập",
    type: "Thêm mới",
    title: "Thu nhập trong tháng tới thời điểm hiện tại",
    detail: "Hiển thị số tạm tính theo bảng công, điểm thi đua và khoản đã được duyệt.",
  },
  {
    version: "v1.4.0",
    date: "2026-05-01",
    group: "Thu nhập",
    type: "Thêm mới",
    title: "3 việc cần làm để cải thiện thu nhập",
    detail: "Gợi ý việc cụ thể trong ngày để nhân viên biết làm gì thì thu nhập có cơ hội tăng.",
  },
  {
    version: "v1.3.2",
    date: "2026-04-30",
    group: "Thi đua & ghi nhận",
    type: "Thêm mới",
    title: "In giấy chứng nhận thi đua",
    detail: "Cho phép in giấy chứng nhận theo tuần, tháng, quý và năm.",
  },
  {
    version: "v1.3.2",
    date: "2026-04-30",
    group: "Thi đua & ghi nhận",
    type: "Cải tiến",
    title: "Ngôn ngữ ghi nhận nhẹ nhàng hơn",
    detail: "Ưu tiên các cụm từ ghi nhận, cải thiện, minh chứng và phản hồi thay vì gây áp lực.",
  },
  {
    version: "v1.3.1",
    date: "2026-04-29",
    group: "Phân tích hoạt động",
    type: "Thêm mới",
    title: "Module phân tích hoạt động làm việc",
    detail: "Theo dõi page BMS, thời gian sử dụng và sự kiện quan trọng với nguyên tắc minh bạch dữ liệu.",
  },
  {
    version: "v1.3.1",
    date: "2026-04-29",
    group: "Phân tích hoạt động",
    type: "Thêm mới",
    title: "Chính sách minh bạch dữ liệu",
    detail: "Nêu rõ dữ liệu được thu thập, không thu thập, ai được xem và mục đích sử dụng.",
  },
  {
    version: "v1.3.0",
    date: "2026-04-28",
    group: "Cá nhân hóa",
    type: "Thêm mới",
    title: "Bật tắt nhóm chức năng theo vai trò",
    detail: "Nhân viên kinh doanh có thể ưu tiên CRM, kế toán ưu tiên việc và hồ sơ, leader xem rộng hơn.",
  },
  {
    version: "v1.2.0",
    date: "2026-04-27",
    group: "Hồ sơ & chứng từ",
    type: "Cải tiến",
    title: "Tủ hồ sơ hiển thị dạng kho lưu trữ",
    detail: "Các nhóm Pháp lý, Sổ sách, Chứng từ, Thuế và BHXH được trình bày rõ hơn.",
  },
  {
    version: "v1.1.0",
    date: "2026-04-26",
    group: "Giao diện",
    type: "Cải tiến",
    title: "Menu lớn hơn và dễ nhìn hơn",
    detail: "Tăng độ đậm, màu chữ và khả năng thu gọn nhóm menu cho người lớn tuổi dễ sử dụng.",
  },
];

const typeStyle = {
  "Thêm mới": "border-green-200 bg-green-50 text-bms-success",
  "Cải tiến": "border-blue-200 bg-blue-50 text-bms-primary",
  "Sửa lỗi": "border-red-200 bg-red-50 text-bms-danger",
};

function getGroups() {
  const counts = releaseItems.reduce(
    (result, item) => {
      result["Tất cả"] = (result["Tất cả"] || 0) + 1;
      result[item.group] = (result[item.group] || 0) + 1;
      return result;
    },
    { "Tất cả": 0 }
  );

  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

function groupByVersion(items) {
  return items.reduce((result, item) => {
    const key = `${item.version}-${item.date}`;
    if (!result[key]) {
      result[key] = {
        version: item.version,
        date: item.date,
        items: [],
      };
    }
    result[key].items.push(item);
    return result;
  }, {});
}

export default function ReleaseNotesButton() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState("Tất cả");
  const groups = useMemo(() => getGroups(), []);
  const filteredItems = activeGroup === "Tất cả" ? releaseItems : releaseItems.filter((item) => item.group === activeGroup);
  const releases = Object.values(groupByVersion(filteredItems));

  return (
    <div className="relative">
      <button
        className="rounded-bms-pill border border-bms-border bg-white px-3 py-2 text-xs font-black text-bms-primary shadow-sm transition hover:border-bms-primary hover:bg-blue-50 active:translate-y-px"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        Nhật ký cập nhật
      </button>

      {open ? (
        <div className="absolute right-0 z-50 mt-2 flex max-h-[76vh] w-[min(94vw,760px)] flex-col overflow-hidden rounded-[16px] border border-bms-border bg-white shadow-bms">
          <div className="flex items-start justify-between gap-3 border-b border-bms-border px-5 py-4">
            <div>
              <h2 className="text-lg font-black text-slate-950">Nhật ký chỉnh sửa</h2>
              <p className="text-sm font-semibold text-slate-600">Lịch sử cập nhật tính năng TCKN BMS</p>
            </div>
            <button
              className="rounded-[8px] px-2 py-1 text-lg font-black leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              onClick={() => setOpen(false)}
              title="Đóng nhật ký cập nhật"
              type="button"
            >
              ×
            </button>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[150px_1fr] overflow-hidden">
            <aside className="border-r border-bms-border bg-slate-50 p-2">
              <div className="max-h-[58vh] space-y-1 overflow-auto pr-1">
                {groups.map((group) => (
                  <button
                    className={`flex w-full items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-left text-sm font-extrabold transition ${
                      activeGroup === group.name
                        ? "bg-white text-bms-primary shadow-sm ring-1 ring-blue-100"
                        : "text-slate-700 hover:bg-white"
                    }`}
                    key={group.name}
                    onClick={() => setActiveGroup(group.name)}
                    type="button"
                  >
                    <span className="truncate">{group.name}</span>
                    <span className="rounded-bms-pill bg-slate-200 px-2 py-0.5 text-xs font-black text-slate-700">{group.count}</span>
                  </button>
                ))}
              </div>
            </aside>

            <main className="max-h-[58vh] overflow-auto px-4 py-3">
              <div className="space-y-5">
                {releases.map((release) => (
                  <section className="relative pl-16" key={`${release.version}-${release.date}`}>
                    <div className="absolute left-0 top-0 rounded-bms-pill bg-slate-950 px-3 py-1 text-xs font-black text-white">
                      {release.version}
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500">{release.date}</span>
                      <span className="h-px flex-1 border-t border-dashed border-bms-border" />
                    </div>

                    <div className="space-y-2">
                      {release.items.map((item) => (
                        <article className="grid gap-2 rounded-[10px] border border-transparent px-1 py-1 sm:grid-cols-[74px_1fr]" key={item.title}>
                          <span
                            className={`h-fit rounded-[8px] border px-2 py-1 text-center text-xs font-black ${
                              typeStyle[item.type] || typeStyle["Cải tiến"]
                            }`}
                          >
                            {item.type}
                          </span>
                          <div>
                            <p className="text-sm font-black leading-6 text-slate-950">
                              {item.title}
                              <span className="ml-2 rounded-bms-pill bg-cyan-50 px-2 py-0.5 text-xs font-black text-cyan-700">
                                {item.group}
                              </span>
                            </p>
                            <p className="text-sm font-semibold leading-6 text-slate-600">{item.detail}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </main>
          </div>

          <footer className="border-t border-bms-border bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-600">
            Cập nhật lần cuối: 2026-05-01 · Phiên bản mới nhất: v1.4.0
          </footer>
        </div>
      ) : null}
    </div>
  );
}
