"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { joinClassNames } from "./utils";

const menuSections = [
  { title: "Tổng quan", href: "/tong-quan" },
  {
    title: "Khách hàng & Bán hàng",
    groups: [
      {
        title: "Khách hàng",
        items: [
          { label: "Khách tiềm năng", href: "/khach-tiem-nang" },
          { label: "Liên hệ", href: "/lien-he" },
          { label: "Công ty", href: "/cong-ty" },
          { label: "Cơ hội", href: "/co-hoi" },
        ],
      },
      {
        title: "Bán hàng",
        items: [
          { label: "Báo giá", href: "/bao-gia" },
          { label: "Hợp đồng", href: "/hop-dong" },
        ],
      },
      {
        title: "Tài chính khách hàng",
        items: [
          { label: "Đề nghị thanh toán", href: "/de-nghi-thanh-toan" },
          { label: "Hóa đơn thuế", href: "/hoa-don-thue" },
          { label: "Thanh toán khách hàng", href: "/thanh-toan-khach-hang" },
          { label: "Sao kê giao dịch", href: "/sao-ke-giao-dich" },
        ],
      },
    ],
  },
  {
    title: "Việc & Xử lý",
    items: [
      { label: "Việc của tôi", href: "/viec-cua-toi" },
      { label: "Tất cả công việc", href: "/tat-ca-cong-viec" },
      { label: "Mẫu công việc", href: "/mau-cong-viec" },
      { label: "Quy trình", href: "/quy-trinh" },
    ],
  },
  {
    title: "Hồ sơ & Chứng từ",
    items: [
      { label: "Tủ hồ sơ", href: "/tu-ho-so" },
      { label: "Chứng từ", href: "/chung-tu" },
      { label: "Tài khoản truy cập", href: "/tai-khoan-truy-cap" },
    ],
  },
  {
    title: "Hỗ trợ khách",
    items: [
      { label: "Yêu cầu hỗ trợ", href: "/ho-tro-khach" },
      { label: "Lịch sử trao đổi", href: "/lich-su-trao-doi" },
    ],
  },
  {
    title: "Nhân sự",
    items: [
      { label: "Nhân viên", href: "/nhan-su" },
      { label: "MIT đầu ngày", href: "/mit-dau-ngay" },
      { label: "Chấm công", href: "/cham-cong" },
      { label: "Báo cáo cuối ngày", href: "/bao-cao-cuoi-ngay" },
    ],
  },
  {
    title: "Hướng đi & Mục tiêu",
    items: [
      { label: "Tầm nhìn", href: "/muc-tieu/tam-nhin" },
      { label: "Sứ mệnh", href: "/muc-tieu/su-menh" },
      { label: "Giá trị con người TCKN", href: "/muc-tieu/gia-tri-con-nguoi" },
      { label: "Mục tiêu năm", href: "/muc-tieu/muc-tieu-nam" },
      { label: "Mục tiêu quý", href: "/muc-tieu/muc-tieu-quy" },
      { label: "Mục tiêu tháng", href: "/muc-tieu/muc-tieu-thang" },
      { label: "Việc trọng tâm", href: "/muc-tieu/viec-trong-tam" },
      { label: "Kết quả mục tiêu", href: "/muc-tieu/ket-qua-muc-tieu" },
    ],
  },
  {
    title: "Thi đua & Ghi nhận",
    items: [
      { label: "Tổng quan thi đua", href: "/thi-dua/tong-quan" },
      { label: "Kết quả công việc", href: "/thi-dua/ket-qua-cong-viec" },
      { label: "Đánh giá từ Helpdesk", href: "/thi-dua/danh-gia-helpdesk" },
      { label: "Ghi nhận đóng góp", href: "/thi-dua/ghi-nhan-dong-gop" },
      { label: "Điểm cần cải thiện", href: "/thi-dua/diem-can-cai-thien" },
      { label: "Tự đánh giá", href: "/thi-dua/tu-danh-gia" },
      { label: "Leader duyệt", href: "/thi-dua/leader-duyet" },
      { label: "Bảng xếp hạng", href: "/thi-dua/bang-xep-hang" },
      { label: "In giấy chứng nhận", href: "/thi-dua/in-giay-chung-nhan" },
      { label: "Góp ý & cải thiện", href: "/thi-dua/gop-y-cai-thien" },
    ],
  },
  {
    title: "Chấm công & Thu nhập",
    items: [
      { label: "Tổng quan thu nhập", href: "/thu-nhap/tong-quan" },
      { label: "Chấm công", href: "/thu-nhap/cham-cong" },
      { label: "Bảng công", href: "/thu-nhap/bang-cong" },
      { label: "Thu nhập tạm tính", href: "/thu-nhap/thu-nhap-tam-tinh" },
      { label: "Thu nhập dự tính tháng", href: "/thu-nhap/du-tinh-thang" },
      { label: "Phiếu thu nhập cá nhân", href: "/thu-nhap/phieu-thu-nhap-ca-nhan" },
    ],
  },
  {
    title: "Lương thưởng & Phúc lợi",
    items: [
      { label: "Thiết lập lương 3P", href: "/luong-thuong/luong-3p" },
      { label: "Quy chế lương thưởng", href: "/luong-thuong/quy-che" },
      { label: "Phụ cấp & phúc lợi", href: "/luong-thuong/phu-cap-phuc-loi" },
      { label: "Bảng lương", href: "/luong-thuong/bang-luong" },
      { label: "Duyệt bảng lương", href: "/luong-thuong/duyet-bang-luong" },
      { label: "Báo cáo lương thưởng", href: "/luong-thuong/bao-cao" },
    ],
  },
  {
    title: "Phân tích hoạt động",
    items: [
      { label: "Tổng quan hoạt động", href: "/phan-tich-hoat-dong/tong-quan" },
      { label: "Ứng dụng đã sử dụng", href: "/phan-tich-hoat-dong/ung-dung" },
      { label: "Website đã truy cập", href: "/phan-tich-hoat-dong/website" },
      { label: "Theo dõi trong BMS", href: "/phan-tich-hoat-dong/trong-bms" },
      { label: "Thời gian theo công việc", href: "/phan-tich-hoat-dong/thoi-gian-theo-cong-viec" },
      { label: "Cảnh báo bất thường", href: "/phan-tich-hoat-dong/canh-bao-bat-thuong" },
      { label: "Báo cáo theo nhân viên", href: "/phan-tich-hoat-dong/bao-cao-nhan-vien" },
      { label: "Báo cáo theo team", href: "/phan-tich-hoat-dong/bao-cao-team" },
      { label: "Cấu hình theo dõi", href: "/phan-tich-hoat-dong/cau-hinh" },
      { label: "Chính sách minh bạch dữ liệu", href: "/phan-tich-hoat-dong/chinh-sach-du-lieu" },
    ],
  },
  { title: "Báo cáo", href: "/bao-cao" },
  { title: "Cài đặt", href: "/cai-dat" },
];

const menuDisplayPresets = {
  "day-du": {
    label: "Hiển thị đầy đủ",
    titles: null,
  },
  "kinh-doanh": {
    label: "Nhân viên kinh doanh",
    titles: ["Tổng quan", "Khách hàng & Bán hàng", "Việc & Xử lý", "Hỗ trợ khách", "Phân tích hoạt động"],
  },
  "ke-toan": {
    label: "Kế toán dịch vụ",
    titles: ["Tổng quan", "Việc & Xử lý", "Hồ sơ & Chứng từ", "Hỗ trợ khách", "Chấm công & Thu nhập", "Phân tích hoạt động"],
  },
  leader: {
    label: "Leader",
    titles: ["Tổng quan", "Khách hàng & Bán hàng", "Việc & Xử lý", "Hồ sơ & Chứng từ", "Hỗ trợ khách", "Nhân sự", "Hướng đi & Mục tiêu", "Thi đua & Ghi nhận", "Chấm công & Thu nhập", "Phân tích hoạt động", "Báo cáo"],
  },
};

function getSectionKey(section) {
  return section.href || section.title;
}

function getSectionItems(section) {
  if (section.items) return section.items;
  return section.groups?.flatMap((group) => group.items) || [];
}

function isRouteActive(activeHref, href) {
  return activeHref === href || (href !== "/tong-quan" && activeHref.startsWith(`${href}/`));
}

function hasActiveItem(activeHref, items = []) {
  return items.some((item) => isRouteActive(activeHref, item.href));
}

function ExpandMark({ open }) {
  return (
    <span className="text-[15px] font-black leading-none" aria-hidden="true">
      {open ? "-" : "+"}
    </span>
  );
}

function SectionLink({ href, title, active }) {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={joinClassNames(
        "flex min-h-11 items-center rounded-[12px] px-4 py-3 text-[16px] font-extrabold uppercase leading-5 transition active:translate-y-px",
        active ? "bg-[#0047ab] text-white shadow-[0_8px_18px_rgba(0,71,171,0.24)]" : "bg-white text-[#003b8f] ring-1 ring-blue-100 hover:bg-blue-50"
      )}
      href={href}
    >
      {title}
    </Link>
  );
}

function ChildLink({ href, label, active }) {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={joinClassNames(
        "block rounded-[10px] px-4 py-2.5 text-[14px] font-bold leading-5 transition active:translate-y-px",
        active ? "bg-blue-50 text-[#0047ab] ring-1 ring-blue-200" : "text-slate-900 hover:bg-blue-50 hover:text-[#0047ab]"
      )}
      href={href}
    >
      {label}
    </Link>
  );
}

export default function SidebarDesktop({ activeHref = "/tong-quan" }) {
  const activeSectionKey = useMemo(() => {
    const activeSection = menuSections.find((section) => {
      if (section.href) return isRouteActive(activeHref, section.href);
      return getSectionItems(section).some((item) => isRouteActive(activeHref, item.href));
    });

    return activeSection ? getSectionKey(activeSection) : "Tổng quan";
  }, [activeHref]);

  const activeGroupKey = useMemo(() => {
    for (const section of menuSections) {
      for (const group of section.groups || []) {
        if (hasActiveItem(activeHref, group.items)) return `${getSectionKey(section)}:${group.title}`;
      }
    }
    return "";
  }, [activeHref]);

  const [openSections, setOpenSections] = useState(() => ({ [activeSectionKey]: true }));
  const [openGroups, setOpenGroups] = useState(() => ({ [activeGroupKey]: true }));
  const [customPanelOpen, setCustomPanelOpen] = useState(false);
  const [visibleSectionTitles, setVisibleSectionTitles] = useState(() => {
    if (typeof window === "undefined") return null;
    const saved = window.localStorage.getItem("tckn-bms-visible-menu");
    if (!saved) return null;

    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  });

  const displayedSections = useMemo(() => {
    if (!visibleSectionTitles) return menuSections;
    return menuSections.filter((section) => visibleSectionTitles.includes(section.title));
  }, [visibleSectionTitles]);

  function saveVisibleSections(titles) {
    setVisibleSectionTitles(titles);
    if (titles) {
      window.localStorage.setItem("tckn-bms-visible-menu", JSON.stringify(titles));
    } else {
      window.localStorage.removeItem("tckn-bms-visible-menu");
    }
  }

  function applyDisplayPreset(presetKey) {
    saveVisibleSections(menuDisplayPresets[presetKey]?.titles || null);
  }

  function toggleVisibleSection(title) {
    const currentTitles = visibleSectionTitles || menuSections.map((section) => section.title);
    const nextTitles = currentTitles.includes(title)
      ? currentTitles.filter((item) => item !== title)
      : [...currentTitles, title];

    saveVisibleSections(nextTitles);
  }

  function toggleSection(sectionKey) {
    setOpenSections((current) => ({ ...current, [sectionKey]: !current[sectionKey] }));
  }

  function toggleGroup(groupKey) {
    setOpenGroups((current) => ({ ...current, [groupKey]: !current[groupKey] }));
  }

  function renderChildItems(items) {
    return (
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.href}>
            <ChildLink active={isRouteActive(activeHref, item.href)} href={item.href} label={item.label} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <aside className="hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-slate-200 bg-white px-5 py-6 font-sans lg:block">
      <div className="mb-7">
        <p className="text-[12px] font-extrabold uppercase leading-4 text-[#0047ab]">TCKN BMS</p>
        <h1 className="mt-2 text-[17px] font-extrabold leading-6 text-[#0047ab]">
          Hệ thống quản lý nội bộ
          <span className="block text-bms-success">Cty Kế toán dịch vụ</span>
        </h1>
      </div>

      <section className="mb-4 rounded-[14px] border border-blue-100 bg-blue-50 p-3">
        <button
          aria-expanded={customPanelOpen}
          className="flex w-full items-center justify-between text-left text-[14px] font-extrabold uppercase text-[#003b8f]"
          onClick={() => setCustomPanelOpen((current) => !current)}
          type="button"
        >
          <span>Tùy chỉnh giao diện</span>
          <ExpandMark open={customPanelOpen} />
        </button>

        {customPanelOpen ? (
          <div className="mt-3 space-y-3">
            <label className="block">
              <span className="text-xs font-extrabold text-slate-700">Chọn mẫu hiển thị</span>
              <select
                className="mt-1 min-h-10 w-full rounded-[10px] border border-blue-100 bg-white px-3 text-sm font-bold text-slate-900"
                onChange={(event) => applyDisplayPreset(event.target.value)}
                value="tu-chinh"
              >
                <option value="tu-chinh">Tự chọn</option>
                {Object.entries(menuDisplayPresets).map(([key, preset]) => (
                  <option key={key} value={key}>
                    {preset.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
              {menuSections.map((section) => {
                const checked = !visibleSectionTitles || visibleSectionTitles.includes(section.title);

                return (
                  <label className="flex items-start gap-2 rounded-[10px] bg-white px-3 py-2 text-sm font-bold text-slate-900" key={getSectionKey(section)}>
                    <input
                      checked={checked}
                      className="mt-1 h-4 w-4 accent-[#0047ab]"
                      onChange={() => toggleVisibleSection(section.title)}
                      type="checkbox"
                    />
                    <span>{section.title}</span>
                  </label>
                );
              })}
            </div>

            <p className="text-xs font-semibold leading-5 text-slate-700">
              Lựa chọn này chỉ ẩn/hiện menu trên máy của bạn, không xóa quyền và không xóa dữ liệu.
            </p>
          </div>
        ) : null}
      </section>

      <nav className="space-y-3" aria-label="Menu chính">
        {displayedSections.map((section) => {
          const sectionKey = getSectionKey(section);
          const isActiveSection = activeSectionKey === sectionKey;
          const isSectionOpen = openSections[sectionKey] ?? isActiveSection;

          if (section.href) {
            return <SectionLink active={isActiveSection} href={section.href} key={sectionKey} title={section.title} />;
          }

          return (
            <section key={sectionKey}>
              <button
                aria-expanded={isSectionOpen}
                className={joinClassNames(
                  "flex min-h-11 w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-[16px] font-extrabold uppercase leading-5 transition active:translate-y-px",
                  isActiveSection ? "bg-[#0047ab] text-white shadow-[0_8px_18px_rgba(0,71,171,0.24)]" : "bg-white text-[#003b8f] ring-1 ring-blue-100 hover:bg-blue-50"
                )}
                onClick={() => toggleSection(sectionKey)}
                type="button"
              >
                <span>{section.title}</span>
                <ExpandMark open={isSectionOpen} />
              </button>

              {isSectionOpen ? (
                <div className="mt-2 rounded-[12px] bg-slate-50 p-2.5">
                  {section.items ? renderChildItems(section.items) : null}
                  {section.groups?.map((group) => {
                    const groupKey = `${sectionKey}:${group.title}`;
                    const isActiveGroup = activeGroupKey === groupKey;
                    const isGroupOpen = openGroups[groupKey] ?? isActiveGroup;

                    return (
                      <div className="mb-2 last:mb-0" key={groupKey}>
                        <button
                          aria-expanded={isGroupOpen}
                          className={joinClassNames(
                            "flex min-h-10 w-full items-center justify-between rounded-[10px] px-3 py-2 text-left text-[15px] font-extrabold uppercase leading-5 transition active:translate-y-px",
                            isActiveGroup ? "bg-blue-100 text-[#0047ab]" : "text-[#0047ab] hover:bg-blue-50"
                          )}
                          onClick={() => toggleGroup(groupKey)}
                          type="button"
                        >
                          <span>{group.title}</span>
                          <ExpandMark open={isGroupOpen} />
                        </button>
                        {isGroupOpen ? <div className="mt-1.5">{renderChildItems(group.items)}</div> : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </section>
          );
        })}
      </nav>

      <div className="mt-8 border-t border-slate-300 pt-5">
        <button className="flex min-h-11 w-full items-center rounded-[12px] px-4 py-3 text-[16px] font-extrabold uppercase text-[#003b8f] ring-1 ring-blue-100 transition hover:bg-blue-50" type="button">
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
