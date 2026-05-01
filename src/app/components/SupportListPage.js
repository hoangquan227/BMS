import Link from "next/link";
import StatusBadge from "../../components/design-system/StatusBadge";
import { supportTickets } from "../data/support-data";

export default function SupportListPage() {
  return (
    <section className="overflow-hidden rounded-[14px] border border-bms-border bg-white">
      <div className="flex flex-col gap-3 border-b border-bms-border bg-slate-50 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <input
            className="min-h-10 w-full min-w-[260px] rounded-bms-pill border border-bms-border px-4 text-[14px] font-semibold outline-none focus:border-bms-primary sm:w-[360px]"
            placeholder="Tìm ticket, công ty, người gửi hoặc nhân viên xử lý"
          />
          <button className="rounded-bms-pill border border-bms-border bg-white px-4 py-2 text-[14px] font-extrabold text-slate-900" type="button">
            Tất cả ticket
          </button>
        </div>
        <button className="rounded-bms-pill bg-bms-primary px-4 py-2 text-[14px] font-extrabold text-white" type="button">
          + Ticket hỗ trợ
        </button>
      </div>

      <div className="border-b border-bms-border bg-white px-4 py-3">
        <h2 className="text-[18px] font-extrabold text-slate-950">Danh sách ticket hỗ trợ</h2>
        <p className="text-[14px] font-semibold text-slate-600">
          Mỗi ticket hiển thị rõ công ty gửi, người gửi và nhân viên TCKN đang xử lý.
        </p>
      </div>

      <div className="overflow-auto">
        <table className="w-full min-w-[1180px] text-left text-[14px]">
          <thead className="border-b border-bms-border bg-slate-50 text-[13px] uppercase text-slate-700">
            <tr>
              <th className="px-4 py-3 font-extrabold">Ticket ID</th>
              <th className="px-4 py-3 font-extrabold">Tiêu đề</th>
              <th className="px-4 py-3 font-extrabold">Công ty gửi</th>
              <th className="px-4 py-3 font-extrabold">Người gửi</th>
              <th className="px-4 py-3 font-extrabold">Nhân viên xử lý</th>
              <th className="px-4 py-3 font-extrabold">Trạng thái</th>
              <th className="px-4 py-3 font-extrabold">Ngày tạo</th>
              <th className="px-4 py-3 font-extrabold">Cập nhật lần cuối</th>
              <th className="px-4 py-3 font-extrabold">Ưu tiên</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bms-border">
            {supportTickets.map((ticket) => (
              <tr className="transition hover:bg-blue-50/60" key={ticket.id}>
                <td className="px-4 py-3">
                  <Link className="font-extrabold text-bms-primary hover:underline" href={`/ho-tro-khach/${ticket.id}`}>
                    {ticket.code}
                  </Link>
                </td>
                <td className="px-4 py-3 font-extrabold text-slate-950">{ticket.title}</td>
                <td className="px-4 py-3">
                  <p className="font-extrabold text-slate-950">{ticket.company}</p>
                  <p className="text-[13px] font-semibold text-slate-600">{ticket.service}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="font-extrabold text-slate-950">{ticket.senderName}</p>
                  <p className="text-[13px] font-semibold text-slate-600">{ticket.senderPhone}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="font-extrabold text-bms-primary">{ticket.assignedStaff}</p>
                  <p className="text-[13px] font-semibold text-slate-600">{ticket.assignedTeam}</p>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={ticket.status} />
                </td>
                <td className="px-4 py-3 font-semibold text-slate-800">{ticket.createdAt}</td>
                <td className="px-4 py-3 font-semibold text-slate-800">{ticket.updatedAt}</td>
                <td className="px-4 py-3 font-extrabold text-bms-danger">{ticket.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="flex flex-col gap-2 border-t border-bms-border bg-white px-4 py-2 text-[13px] font-bold text-slate-800 lg:flex-row lg:items-center lg:justify-between">
        <span>Tổng ticket: {supportTickets.length} · Đã trả lời: 2 · Đang xử lý: 1</span>
        <span>Số bản ghi mỗi trang: 100 · 1 thành {supportTickets.length}</span>
      </footer>
    </section>
  );
}
