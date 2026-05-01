"use client";

import Link from "next/link";
import { useState } from "react";
import StatusBadge from "../../components/design-system/StatusBadge";
import { crmRelatedData, crmTabs } from "../data/crm-data";

const tabMap = {
  "Thời gian biểu": "timeline",
  "Ghi chú": "notes",
  "Hoạt động": "activities",
  Email: "emails",
  "Tủ hồ sơ": "folders",
  "Chứng từ": "documents",
  "Tài khoản đăng nhập": "accounts",
  "Hợp đồng": "contracts",
  "Đề nghị thanh toán": "paymentRequests",
  "Hóa đơn": "invoices",
  "Thanh toán": "payments",
  "Lịch sử": "timeline",
};

const quickAdds = [
  "Thêm vào tủ hồ sơ",
  "Thêm chứng từ",
  "Thêm tài khoản đăng nhập",
  "Tạo hợp đồng",
  "Tạo đề nghị thanh toán",
  "Tạo hóa đơn",
];

function fieldRows(moduleKey, record) {
  const common = [
    ["Chủ sở hữu", record.owner || "Tài Chính Khởi Nghiệp"],
    ["Công ty", record.company || record.name],
    ["Email", record.email || "chưa cập nhật"],
    ["Điện thoại", record.phone || "chưa cập nhật"],
  ];

  if (moduleKey === "companies") {
    return [
      ["Mã số thuế", record.taxCode],
      ["Dịch vụ", record.service],
      ["Phụ trách", record.owner],
      ["Thanh toán", record.paymentStatus],
      ["Người đại diện pháp luật", "Ngô Huỳnh Bảo Ngọc"],
      ["Ngân hàng nhận thanh toán", "OCB"],
    ];
  }

  if (moduleKey === "deals") {
    return [
      ["Trạng thái", record.status],
      ["Công ty liên quan", record.company],
      ["Liên hệ liên quan", record.contact],
      ["Giá trị dự kiến", record.amount],
      ["Hệ thống nhóm", "BÁN HÀNG 2"],
      ["Ngày đóng dự kiến", "Chưa xác định"],
    ];
  }

  return [
    ...common,
    ["Nguồn chào hàng", record.source],
    ["Loại giấy tờ", "Căn cước công dân"],
    ["Mã số thuế cá nhân", "chưa cập nhật"],
  ];
}

function renderRelatedTable(activeTab) {
  const key = tabMap[activeTab] || "timeline";
  const rows = crmRelatedData[key] || [];

  if (key === "timeline") {
    return (
      <div className="space-y-6 p-5">
        {rows.map((item) => (
          <article className="grid grid-cols-[82px_1fr] gap-4" key={`${item.time}-${item.title}`}>
            <p className="text-xs font-bold text-slate-600">{item.time}</p>
            <div className="border-l-2 border-green-200 pl-5">
              <span className="-ml-[27px] mb-2 block h-3 w-3 rounded-full bg-bms-success" />
              <p className="text-sm font-black text-slate-950">{item.title}</p>
              <p className="text-sm font-semibold text-slate-700">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  const columns = Object.keys(rows[0] || {});

  return (
    <div className="overflow-auto">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="border-b border-bms-border bg-slate-50 text-xs uppercase text-slate-700">
          <tr>
            {columns.map((column) => (
              <th className="px-4 py-3 font-black" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-bms-border">
          {rows.map((row, index) => (
            <tr className="hover:bg-blue-50/60" key={index}>
              {columns.map((column) => (
                <td className="px-4 py-3 font-semibold text-slate-900" key={column}>
                  {column === "status" ? <StatusBadge className="text-xs" status={row[column]} /> : row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CrmDetailPage({ module, record, moduleKey }) {
  const [activeTab, setActiveTab] = useState("Thời gian biểu");

  return (
    <section className="overflow-hidden rounded-[14px] border border-bms-border bg-white">
      <header className="flex flex-col gap-3 border-b border-bms-border bg-white px-4 py-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-3">
          <Link className="text-2xl font-black text-slate-600 hover:text-bms-primary" href={module.route}>
            ←
          </Link>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-sm font-black text-bms-success">
            {record.avatar || "KH"}
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-950">{record.name}</h2>
            <p className="text-sm font-bold text-bms-primary">{record.company || record.service || module.title}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {quickAdds.slice(0, 4).map((label) => (
            <button className="rounded-bms-pill border border-bms-success px-3 py-2 text-xs font-black text-bms-success transition hover:bg-green-50" key={label} type="button">
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid min-h-[620px] lg:grid-cols-[360px_1fr]">
        <aside className="border-r border-bms-border bg-white p-4">
          <section className="mb-5">
            <h3 className="mb-3 text-sm font-black text-slate-950">Thống kê</h3>
            <div className="space-y-2 text-sm font-semibold text-slate-800">
              <p><span className="text-bms-primary">●</span> Mở các bản ghi hệ thống · <span className="font-black">4</span></p>
              <p><span className="text-bms-success">●</span> Đã giành được các bản ghi hệ thống · <span className="font-black">3</span></p>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="mb-3 text-sm font-black text-slate-950">Thông tin cơ bản</h3>
            <div className="space-y-3">
              {fieldRows(moduleKey, record).map(([label, value]) => (
                <div className="grid grid-cols-[130px_1fr] gap-3 text-sm" key={label}>
                  <p className="font-semibold text-slate-600">{label}</p>
                  <p className="font-black text-slate-950">{value || "--"}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h3 className="mb-3 text-sm font-black text-slate-950">Tag</h3>
            <div className="flex flex-wrap gap-2">
              {(record.tags || ["Khách hàng"]).map((tag) => (
                <span className="rounded-bms-pill bg-blue-50 px-3 py-1 text-xs font-black text-bms-primary" key={tag}>
                  {tag}
                </span>
              ))}
              <button className="rounded-bms-pill bg-slate-100 px-3 py-1 text-xs font-black text-slate-700" type="button">
                + Tag
              </button>
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-black text-slate-950">Liên kết nghiệp vụ</h3>
            <div className="grid gap-2">
              {quickAdds.map((label) => (
                <button className="rounded-[10px] border border-bms-border bg-slate-50 px-3 py-2 text-left text-sm font-bold text-slate-800 transition hover:border-bms-primary hover:bg-blue-50 hover:text-bms-primary" key={label} type="button">
                  {label}
                </button>
              ))}
            </div>
          </section>
        </aside>

        <main className="min-w-0 bg-slate-50">
          <div className="flex gap-1 overflow-x-auto border-b border-bms-border bg-white px-3">
            {crmTabs.map((tab) => (
              <button
                className={`shrink-0 border-b-2 px-4 py-3 text-sm font-black transition ${
                  activeTab === tab ? "border-bms-success text-slate-950" : "border-transparent text-slate-600 hover:text-bms-primary"
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4">
            <div className="overflow-hidden rounded-[12px] border border-bms-border bg-white">
              <div className="flex items-center justify-between border-b border-bms-border px-4 py-3">
                <h3 className="text-base font-black text-slate-950">{activeTab}</h3>
                <button className="rounded-bms-pill border border-bms-border px-3 py-1.5 text-xs font-black text-slate-700 hover:bg-slate-50" type="button">
                  Lọc: Tất cả
                </button>
              </div>
              {renderRelatedTable(activeTab)}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
