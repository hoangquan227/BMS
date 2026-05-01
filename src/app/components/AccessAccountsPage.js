import Link from "next/link";
import StatusBadge from "../../components/design-system/StatusBadge";
import ScreenHeader from "./ScreenHeader";
import { accessCustomers, accessDashboardStats, getCustomerAccountSummary } from "../data/access-account-data";

const filters = [
  "Tìm theo tên khách hàng",
  "Tìm theo mã số thuế",
  "Loại khách hàng",
  "Nhóm dịch vụ",
  "Người phụ trách",
  "Trạng thái khách hàng",
  "Trạng thái tài khoản",
];

export default function AccessAccountsPage() {
  const rows = accessCustomers.map(getCustomerAccountSummary);

  return (
    <section className="space-y-5">
      <ScreenHeader
        description="Quản lý toàn bộ tài khoản đăng nhập theo từng khách hàng. Danh sách không hiển thị mật khẩu; mọi lần xem hoặc sao chép mật khẩu đều cần quyền và ghi log."
        title="Tài khoản hệ thống theo khách hàng"
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {accessDashboardStats.map((stat) => (
          <article className="rounded-[14px] border border-bms-border bg-white p-4" key={stat.label}>
            <p className="text-[13px] font-extrabold uppercase text-slate-600">{stat.label}</p>
            <p className="mt-2 text-[28px] font-extrabold leading-8 text-slate-950">{stat.value}</p>
          </article>
        ))}
      </div>

      <section className="rounded-[14px] border border-bms-border bg-white p-4">
        <h2 className="mb-3 text-[18px] font-extrabold text-slate-950">Bộ lọc tài khoản theo khách hàng</h2>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {filters.map((filter) => (
            <label className="block" key={filter}>
              <span className="text-[13px] font-extrabold text-slate-700">{filter}</span>
              <input
                className="mt-1 min-h-10 w-full rounded-[12px] border border-bms-border px-3 text-[14px] font-semibold outline-none focus:border-bms-primary"
                placeholder={filter}
              />
            </label>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[14px] border border-bms-border bg-white">
        <div className="flex flex-col gap-2 border-b border-bms-border px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[18px] font-extrabold text-slate-950">Bảng khách hàng</h2>
            <p className="text-[14px] font-semibold text-slate-600">
              Khách hàng là trung tâm. Bấm vào một khách hàng để xem toàn bộ tài khoản đã bàn giao.
            </p>
          </div>
          <button className="rounded-bms-pill bg-bms-primary px-4 py-2 text-[14px] font-extrabold text-white" type="button">
            + Thêm tài khoản cho khách hàng
          </button>
        </div>

        <div className="overflow-auto">
          <table className="w-full min-w-[1100px] text-left text-[14px]">
            <thead className="border-b border-bms-border bg-slate-50 text-[13px] uppercase text-slate-700">
              <tr>
                <th className="px-4 py-3 font-extrabold">Tên khách hàng</th>
                <th className="px-4 py-3 font-extrabold">Mã số thuế</th>
                <th className="px-4 py-3 font-extrabold">Loại khách hàng</th>
                <th className="px-4 py-3 font-extrabold">Người phụ trách</th>
                <th className="px-4 py-3 font-extrabold">Nhóm dịch vụ</th>
                <th className="px-4 py-3 font-extrabold">Số tài khoản đã lưu</th>
                <th className="px-4 py-3 font-extrabold">Tình trạng tài khoản</th>
                <th className="px-4 py-3 font-extrabold">Cảnh báo</th>
                <th className="px-4 py-3 font-extrabold">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bms-border">
              {rows.map((customer) => (
                <tr className="transition hover:bg-blue-50/60" key={customer.id}>
                  <td className="px-4 py-3">
                    <Link
                      className="font-extrabold text-slate-950 hover:text-bms-primary"
                      href={`/tai-khoan-truy-cap/khach-hang/${customer.id}`}
                    >
                      {customer.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">{customer.taxCode}</td>
                  <td className="px-4 py-3 font-semibold text-slate-800">{customer.type}</td>
                  <td className="px-4 py-3 font-extrabold text-bms-primary">{customer.owner}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {customer.services.map((service) => (
                        <span className="rounded-bms-pill bg-blue-50 px-2 py-1 text-[13px] font-bold text-bms-primary" key={service}>
                          {service}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-extrabold text-slate-950">{customer.accountCount}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={customer.accountStatus} />
                  </td>
                  <td className="px-4 py-3">
                    <p className={customer.warning.includes("Sai") || customer.warning.includes("Thiếu") ? "font-extrabold text-bms-danger" : "font-bold text-bms-warning"}>
                      {customer.warning}
                    </p>
                    {customer.missingImportantAccounts.length ? (
                      <p className="mt-1 text-[13px] font-semibold text-slate-600">
                        Thiếu: {customer.missingImportantAccounts.join(", ")}
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      className="font-extrabold text-bms-primary hover:underline"
                      href={`/tai-khoan-truy-cap/khach-hang/${customer.id}`}
                    >
                      Xem tài khoản
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
