"use client";

import Link from "next/link";
import { useState } from "react";
import StatusBadge from "../../components/design-system/StatusBadge";

const quickActions = [
  "Thêm vào tủ hồ sơ",
  "Thêm chứng từ",
  "Thêm tài khoản truy cập",
  "Tạo công việc",
  "Tạo yêu cầu hỗ trợ",
  "Tạo hợp đồng",
  "Tạo đề nghị thanh toán",
  "Tạo hóa đơn",
  "Ghi nhận thanh toán",
  "Gửi email",
  "Ghi chú nội bộ",
];

const tabConfigs = {
  contacts: {
    routeBase: "lien-he",
    main: [
      ["tong-quan", "Tổng quan"],
      ["cong-viec", "Công việc", "3"],
      ["yeu-cau-ho-tro", "Yêu cầu hỗ trợ", "2"],
      ["lich-su-trao-doi", "Lịch sử trao đổi"],
      ["tu-ho-so", "Tủ hồ sơ", "1 thiếu"],
      ["chung-tu", "Chứng từ", "5"],
      ["tai-khoan-truy-cap", "Tài khoản truy cập", "1 sai"],
      ["hop-dong", "Hợp đồng"],
      ["tai-chinh", "Thanh toán", "1 quá hạn"],
    ],
    more: [
      ["email", "Email"],
      ["de-nghi-thanh-toan", "Đề nghị thanh toán"],
      ["hoa-don", "Hóa đơn"],
      ["cong-no", "Công nợ"],
      ["dich-vu-dang-dung", "Dịch vụ đang dùng"],
      ["ho-so-phap-ly", "Hồ sơ pháp lý"],
      ["ghi-chu-noi-bo", "Ghi chú nội bộ"],
      ["hoat-dong", "Hoạt động"],
      ["lich-hen", "Lịch hẹn"],
      ["nguoi-lien-quan", "Người liên quan"],
      ["lich-su", "Lịch sử"],
    ],
  },
  companies: {
    routeBase: "cong-ty",
    main: [
      ["tong-quan", "Tổng quan"],
      ["lien-he", "Liên hệ", "2"],
      ["cong-viec", "Công việc", "3"],
      ["yeu-cau-ho-tro", "Yêu cầu hỗ trợ", "2"],
      ["dich-vu-dang-dung", "Dịch vụ đang dùng"],
      ["hop-dong", "Hợp đồng", "1 sắp hết hạn"],
      ["tai-chinh", "Tài chính", "1 quá hạn"],
      ["ho-so-chung-tu", "Hồ sơ & chứng từ", "1 thiếu"],
      ["tai-khoan-truy-cap", "Tài khoản truy cập", "1 sai"],
    ],
    more: [
      ["lich-su-trao-doi", "Lịch sử trao đổi"],
      ["ghi-chu-noi-bo", "Ghi chú nội bộ"],
      ["hoat-dong", "Hoạt động"],
      ["lich-su", "Lịch sử"],
    ],
  },
  deals: {
    routeBase: "co-hoi",
    main: [
      ["tong-quan", "Tổng quan"],
      ["nhu-cau-dich-vu", "Nhu cầu dịch vụ"],
      ["cong-viec-ban-hang", "Công việc bán hàng", "3"],
      ["lich-hen", "Lịch hẹn"],
      ["bao-gia", "Báo giá"],
      ["ho-so-khao-sat", "Hồ sơ khảo sát"],
      ["tai-lieu-khach-gui", "Tài liệu khách gửi", "5"],
      ["lich-su-trao-doi", "Lịch sử trao đổi"],
      ["chuyen-doi", "Chuyển đổi"],
    ],
    more: [
      ["khach-hang-lien-quan", "Khách hàng liên quan"],
      ["email", "Email"],
      ["ghi-chu-noi-bo", "Ghi chú nội bộ"],
      ["hop-dong-nhap", "Hợp đồng nháp"],
      ["de-nghi-thanh-toan", "Đề nghị thanh toán"],
      ["hoat-dong", "Hoạt động"],
      ["lich-su", "Lịch sử"],
    ],
  },
};

const tabColumnMap = {
  "tong-quan": ["Hạng mục", "Thông tin", "Trạng thái", "Ghi chú"],
  "cong-viec": ["Tên công việc", "Người phụ trách", "Trạng thái", "Mức ưu tiên", "Thời hạn", "Tiến độ", "Trễ hạn", "Thao tác"],
  "cong-viec-ban-hang": ["Tên công việc", "Người phụ trách", "Trạng thái", "Mức ưu tiên", "Thời hạn", "Tiến độ", "Trễ hạn", "Thao tác"],
  "yeu-cau-ho-tro": ["Mã yêu cầu", "Tiêu đề", "Người gửi", "Người phụ trách", "Trạng thái", "Ưu tiên", "SLA", "Hạn phản hồi", "Đánh giá"],
  "lich-su-trao-doi": ["Thời điểm", "Kênh trao đổi", "Người trao đổi", "Nội dung tóm tắt", "File đính kèm", "Người tạo"],
  "tu-ho-so": ["Tên hồ sơ", "Nhóm hồ sơ", "Kỳ hồ sơ", "Người phụ trách", "Trạng thái", "Ngày cập nhật", "File liên quan"],
  "chung-tu": ["Tên chứng từ", "Loại chứng từ", "Kỳ chứng từ", "Ngày chứng từ", "Số tiền", "Trạng thái kiểm tra", "Người kiểm tra", "Ghi chú lỗi", "File"],
  "tai-khoan-truy-cap": ["Loại tài khoản", "Tên hệ thống", "Đường dẫn đăng nhập", "Tên đăng nhập", "Mật khẩu", "Trạng thái tài khoản", "Kiểm tra gần nhất", "Người được quyền xem", "Thao tác"],
  "hop-dong": ["Số hợp đồng", "Tên hợp đồng", "Dịch vụ", "Ngày ký", "Ngày hiệu lực", "Ngày hết hạn", "Giá trị", "Trạng thái", "File"],
  "tai-chinh": ["Nhóm tài chính", "Số chứng từ", "Nội dung", "Kỳ", "Số tiền", "Hạn thanh toán", "Trạng thái", "Người tạo"],
  "de-nghi-thanh-toan": ["Số đề nghị", "Nội dung", "Kỳ thanh toán", "Số tiền", "Hạn thanh toán", "Trạng thái", "Người tạo", "File"],
  "hoa-don": ["Số hóa đơn", "Ngày hóa đơn", "Nội dung", "Giá trị trước thuế", "Thuế GTGT", "Tổng tiền", "Trạng thái", "File"],
  "thanh-toan": ["Ngày thanh toán", "Số tiền", "Phương thức", "Tài khoản nhận", "Nội dung chuyển khoản", "Đối soát", "Trạng thái", "Minh chứng"],
  "cong-no": ["Tổng phải thu", "Đã thu", "Còn phải thu", "Quá hạn", "Số ngày quá hạn", "Người phụ trách thu", "Ghi chú"],
  "dich-vu-dang-dung": ["Tên dịch vụ", "Nhóm dịch vụ", "Ngày bắt đầu", "Chu kỳ thu phí", "Phí dịch vụ", "Người phụ trách", "Trạng thái", "Ghi chú"],
  "ho-so-chung-tu": ["Nhóm hồ sơ", "Tên hồ sơ/chứng từ", "Kỳ", "Người phụ trách", "Trạng thái", "Ngày cập nhật", "File"],
  "ho-so-phap-ly": ["Loại hồ sơ", "Số giấy tờ", "Ngày cấp", "Nơi cấp", "Trạng thái", "File đính kèm"],
  "ho-so-thue": ["Kỳ thuế", "Loại tờ khai", "Hạn nộp", "Ngày nộp", "Trạng thái", "Người phụ trách", "File", "Biên nhận"],
  "ho-so-bao-hiem-xa-hoi": ["Mã đơn vị BHXH", "Kỳ phát sinh", "Loại hồ sơ", "Người lao động", "Trạng thái", "Ngày nộp", "Biên nhận", "File"],
  "hoa-don-dien-tu": ["Nhà cung cấp", "Mẫu số", "Ký hiệu", "Trạng thái sử dụng", "Ngày đăng ký", "Tài khoản liên quan", "Ghi chú"],
  "ngan-hang": ["Tên ngân hàng", "Số tài khoản", "Chủ tài khoản", "Mục đích sử dụng", "Có internet banking", "Trạng thái", "Ghi chú"],
  "chu-ky-so": ["Nhà cung cấp", "Số serial", "Ngày bắt đầu", "Ngày hết hạn", "Người giữ thiết bị", "Hình thức ký", "Trạng thái"],
  "bao-cao-da-nop": ["Loại báo cáo", "Kỳ báo cáo", "Hạn nộp", "Ngày nộp", "Người nộp", "Trạng thái", "Biên nhận", "File"],
  "ky-ke-khai": ["Loại nghĩa vụ", "Kỳ kê khai", "Hạn nộp", "Trạng thái", "Người phụ trách", "Ghi chú"],
  "lich-nghia-vu": ["Ngày đến hạn", "Nghĩa vụ cần làm", "Loại nghĩa vụ", "Người phụ trách", "Trạng thái", "Trễ hạn"],
  "ghi-chu-noi-bo": ["Nội dung ghi chú", "Người ghi chú", "Mức độ quan trọng", "Có ghim", "Ngày tạo"],
  "hoat-dong": ["Thời điểm", "Loại hoạt động", "Người thực hiện", "Nội dung", "Đối tượng liên kết"],
  "lich-su": ["Thời điểm", "Người thực hiện", "Hành động", "Dữ liệu trước", "Dữ liệu sau", "Ghi chú"],
};

const financeSubTabs = ["Đề nghị thanh toán", "Hóa đơn", "Thanh toán", "Công nợ"];
const documentSubTabs = ["Tủ hồ sơ", "Chứng từ", "Hồ sơ pháp lý", "Hồ sơ thuế", "BHXH", "Hóa đơn điện tử", "Ngân hàng", "Chữ ký số", "Báo cáo đã nộp", "Kỳ kê khai", "Lịch nghĩa vụ"];

function findTab(moduleKey, tabKey) {
  const config = tabConfigs[moduleKey];
  return [...config.main, ...config.more].find(([key]) => key === tabKey) || config.main[0];
}

function fieldRows(moduleKey, record) {
  if (moduleKey === "companies") {
    return [
      ["Mã số thuế", record.taxCode],
      ["Dịch vụ", record.service],
      ["Phụ trách", record.owner],
      ["Thanh toán", record.paymentStatus],
      ["Người đại diện", "Ngô Huỳnh Bảo Ngọc"],
      ["Cảnh báo", "1 tài khoản sai mật khẩu"],
    ];
  }

  if (moduleKey === "deals") {
    return [
      ["Trạng thái", record.status],
      ["Công ty liên quan", record.company],
      ["Liên hệ liên quan", record.contact],
      ["Giá trị dự kiến", record.amount],
      ["Hệ thống nhóm", "BÁN HÀNG 2"],
      ["Cảnh báo", "Cần theo dõi hồ sơ khảo sát"],
    ];
  }

  return [
    ["Chủ sở hữu", record.owner],
    ["Công ty", record.company],
    ["Email", record.email],
    ["Điện thoại", record.phone],
    ["Nguồn chào hàng", record.source],
    ["Cảnh báo", "Có 2 yêu cầu hỗ trợ chưa xử lý"],
  ];
}

function buildDemoRows(tabKey, record) {
  const columns = tabColumnMap[tabKey] || ["Nội dung", "Người phụ trách", "Trạng thái", "Ghi chú"];

  if (tabKey === "tong-quan") {
    return [
      ["Tên đối tượng", record.name, "Đang phục vụ", "Dữ liệu liên kết theo khách hàng"],
      ["Việc đang trễ", "3 việc", "Trễ hạn", "Cần xử lý hôm nay"],
      ["Công nợ", "15.000.000 đ", "Quá hạn", "Nhắc khách thanh toán"],
      ["Tài khoản còn thiếu", "BHXH hoặc hóa đơn điện tử", "Thiếu hồ sơ", "Cần khách bàn giao thêm"],
    ];
  }

  if (tabKey === "tai-khoan-truy-cap") {
    return [
      ["Thuế điện tử", "thuedientu.gdt.gov.vn", "Mở đăng nhập", "mst-demo", "********", "Đang sử dụng", "30/04/2026", "Nguyễn Minh, Leader", "Xem theo quyền"],
      ["Hóa đơn điện tử", "M-Invoice", "Mở đăng nhập", "demo.admin", "********", "Sai mật khẩu", "28/04/2026", "Nguyễn Minh", "Báo sai mật khẩu"],
    ];
  }

  if (tabKey === "tai-chinh") {
    return [
      ["Đề nghị thanh toán", "DNTT-0015", "Phí dịch vụ tháng 05", "05/2026", "30.000.000 đ", "05/05/2026", "Chờ duyệt", "Nguyễn Minh"],
      ["Hóa đơn", "HDTHUE-0042", "Phí dịch vụ", "05/2026", "30.000.000 đ", "05/05/2026", "Đã gửi hóa đơn", "Trần Hà"],
      ["Thanh toán", "TT-0031", "Khách chuyển khoản", "05/2026", "15.000.000 đ", "02/05/2026", "Thanh toán một phần", "Lê Bình"],
    ];
  }

  return [
    columns.map((column, index) => {
      if (column.toLowerCase().includes("trạng thái")) return index % 2 ? "Đang làm" : "Cần kiểm tra";
      if (column.toLowerCase().includes("người")) return "Nguyễn Minh";
      if (column.toLowerCase().includes("file")) return "Có file";
      if (column.toLowerCase().includes("tiền") || column.toLowerCase().includes("giá trị")) return "15.000.000 đ";
      if (column.toLowerCase().includes("ngày") || column.toLowerCase().includes("hạn")) return "05/05/2026";
      return `${column} mẫu`;
    }),
  ];
}

function RelatedTable({ activeTabKey, record }) {
  const columns = tabColumnMap[activeTabKey] || ["Nội dung", "Người phụ trách", "Trạng thái", "Ghi chú"];
  const rows = buildDemoRows(activeTabKey, record);

  if (!rows.length) {
    return (
      <div className="p-6 text-center">
        <p className="text-[16px] font-extrabold text-slate-950">Chưa có dữ liệu</p>
        <p className="mt-1 text-[14px] font-semibold text-slate-600">Bạn có thể tạo mới dữ liệu và hệ thống sẽ tự gắn đúng khách hàng đang mở.</p>
        <button className="mt-4 rounded-bms-pill bg-bms-primary px-4 py-2 text-[14px] font-extrabold text-white" type="button">Tạo mới</button>
      </div>
    );
  }

  return (
    <div className="overflow-auto">
      <table className="w-full min-w-[900px] text-left text-[14px]">
        <thead className="border-b border-bms-border bg-slate-50 text-[13px] uppercase text-slate-700">
          <tr>
            {columns.map((column) => (
              <th className="px-4 py-3 font-extrabold" key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-bms-border">
          {rows.map((row, rowIndex) => (
            <tr className="hover:bg-blue-50/60" key={rowIndex}>
              {row.map((cell, index) => (
                <td className="px-4 py-3 font-semibold text-slate-900" key={`${rowIndex}-${columns[index]}`}>
                  {String(columns[index]).toLowerCase().includes("trạng thái") ? <StatusBadge status={cell} /> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabLink({ href, active, label, badge }) {
  return (
    <Link
      className={`shrink-0 border-b-2 px-4 py-3 text-[14px] font-extrabold transition ${
        active ? "border-bms-success text-slate-950" : "border-transparent text-slate-600 hover:text-bms-primary"
      }`}
      href={href}
    >
      {label}
      {badge ? <span className="ml-2 rounded-bms-pill bg-red-50 px-2 py-0.5 text-[12px] font-extrabold text-bms-danger">{badge}</span> : null}
    </Link>
  );
}

export default function CrmDetailPage({ module, record, moduleKey, activeTabKey = "tong-quan" }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const config = tabConfigs[moduleKey];
  const activeTab = findTab(moduleKey, activeTabKey);
  const activeLabel = activeTab[1];
  const basePath = `/${config.routeBase}/${record.id}`;

  return (
    <section className="overflow-hidden rounded-[14px] border border-bms-border bg-white">
      <header className="flex flex-col gap-3 border-b border-bms-border bg-white px-4 py-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-3">
          <Link className="text-2xl font-black text-slate-600 hover:text-bms-primary" href={module.route}>←</Link>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-[14px] font-black text-bms-success">{record.avatar || "KH"}</div>
          <div>
            <h2 className="text-[18px] font-extrabold leading-6 text-slate-950">{record.name}</h2>
            <p className="text-[14px] font-bold text-bms-primary">{record.company || record.service || module.title}</p>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-2">
          {quickActions.slice(0, 3).map((label) => (
            <button className="rounded-bms-pill border border-bms-success px-3 py-2 text-[13px] font-extrabold text-bms-success transition hover:bg-green-50" key={label} type="button">{label}</button>
          ))}
          <button className="rounded-bms-pill bg-bms-primary px-3 py-2 text-[13px] font-extrabold text-white" onClick={() => setActionsOpen((value) => !value)} type="button">Thêm thao tác</button>
          {actionsOpen ? (
            <div className="absolute right-0 top-11 z-30 w-[260px] rounded-[12px] border border-bms-border bg-white p-2 shadow-bms">
              {quickActions.slice(3).map((label) => (
                <button className="block w-full rounded-[10px] px-3 py-2 text-left text-[14px] font-bold text-slate-800 hover:bg-blue-50 hover:text-bms-primary" key={label} type="button">{label}</button>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="grid min-h-[620px] lg:grid-cols-[360px_1fr]">
        <aside className="border-r border-bms-border bg-white p-4">
          <section className="mb-5">
            <h3 className="mb-3 text-[15px] font-extrabold text-slate-950">Thống kê</h3>
            <div className="space-y-2 text-[14px] font-semibold text-slate-800">
              <p><span className="text-bms-primary">●</span> Công việc đang mở · <span className="font-black">3</span></p>
              <p><span className="text-bms-danger">●</span> Cảnh báo cần xử lý · <span className="font-black">2</span></p>
              <p><span className="text-bms-success">●</span> Dữ liệu đã liên kết · <span className="font-black">12</span></p>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="mb-3 text-[15px] font-extrabold text-slate-950">Thông tin cơ bản</h3>
            <div className="space-y-3">
              {fieldRows(moduleKey, record).map(([label, value]) => (
                <div className="grid grid-cols-[130px_1fr] gap-3 text-[14px]" key={label}>
                  <p className="font-semibold text-slate-600">{label}</p>
                  <p className="font-black text-slate-950">{value || "--"}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-[15px] font-extrabold text-slate-950">Liên kết nghiệp vụ</h3>
            <div className="grid gap-2">
              {quickActions.slice(0, 8).map((label) => (
                <button className="rounded-[10px] border border-bms-border bg-slate-50 px-3 py-2 text-left text-[14px] font-bold text-slate-800 transition hover:border-bms-primary hover:bg-blue-50 hover:text-bms-primary" key={label} type="button">{label}</button>
              ))}
            </div>
          </section>
        </aside>

        <main className="min-w-0 bg-slate-50">
          <div className="border-b border-bms-border bg-white px-3">
            <select
              className="my-2 min-h-10 w-full rounded-[10px] border border-bms-border px-3 text-[14px] font-extrabold text-slate-900 md:hidden"
              onChange={(event) => {
                window.location.href = event.target.value;
              }}
              value={activeTabKey === "tong-quan" ? basePath : `${basePath}/${activeTabKey}`}
            >
              {[...config.main, ...config.more].map(([key, label, badge]) => (
                <option key={key} value={key === "tong-quan" ? basePath : `${basePath}/${key}`}>{label}{badge ? ` (${badge})` : ""}</option>
              ))}
            </select>

            <div className="hidden gap-1 overflow-x-auto md:flex">
              {config.main.map(([key, label, badge]) => (
                <TabLink active={key === activeTabKey} badge={badge} href={key === "tong-quan" ? basePath : `${basePath}/${key}`} key={key} label={label} />
              ))}
              <div className="relative shrink-0">
                <button
                  className={`border-b-2 px-4 py-3 text-[14px] font-extrabold transition ${config.more.some(([key]) => key === activeTabKey) ? "border-bms-success text-slate-950" : "border-transparent text-slate-600 hover:text-bms-primary"}`}
                  onClick={() => setMoreOpen((value) => !value)}
                  type="button"
                >
                  Thêm
                </button>
                {moreOpen ? (
                  <div className="absolute right-0 z-30 mt-1 w-[260px] rounded-[12px] border border-bms-border bg-white p-2 shadow-bms">
                    {config.more.map(([key, label, badge]) => (
                      <Link className="block rounded-[10px] px-3 py-2 text-[14px] font-bold text-slate-800 hover:bg-blue-50 hover:text-bms-primary" href={`${basePath}/${key}`} key={key}>
                        {label}{badge ? <span className="ml-2 text-bms-danger">{badge}</span> : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="overflow-hidden rounded-[12px] border border-bms-border bg-white">
              <div className="flex flex-col gap-2 border-b border-bms-border px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-[16px] font-extrabold text-slate-950">{activeLabel}</h3>
                  <p className="text-[13px] font-semibold text-slate-600">Dữ liệu được gắn với đúng contactId/companyId/dealId của bản ghi đang mở.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeTabKey === "tai-chinh" ? financeSubTabs.map((tab) => <button className="rounded-bms-pill border border-bms-border px-3 py-1.5 text-[13px] font-extrabold text-slate-700" key={tab} type="button">{tab}</button>) : null}
                  {activeTabKey === "ho-so-chung-tu" ? documentSubTabs.slice(0, 5).map((tab) => <button className="rounded-bms-pill border border-bms-border px-3 py-1.5 text-[13px] font-extrabold text-slate-700" key={tab} type="button">{tab}</button>) : null}
                  <button className="rounded-bms-pill border border-bms-border px-3 py-1.5 text-[13px] font-extrabold text-slate-700 hover:bg-slate-50" type="button">Lọc: Tất cả</button>
                  <button className="rounded-bms-pill bg-bms-primary px-3 py-1.5 text-[13px] font-extrabold text-white" type="button">+ Tạo mới</button>
                </div>
              </div>
              <RelatedTable activeTabKey={activeTabKey} record={record} />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export function getCrmTabLabel(moduleKey, tabKey) {
  return findTab(moduleKey, tabKey)[1];
}

export function getCrmTabData(moduleKey, tabKey, record) {
  const active = findTab(moduleKey, tabKey);
  return {
    tabKey: active[0],
    label: active[1],
    badge: active[2] || null,
    columns: tabColumnMap[active[0]] || ["Nội dung", "Người phụ trách", "Trạng thái", "Ghi chú"],
    rows: buildDemoRows(active[0], record),
  };
}
