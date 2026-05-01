import Link from "next/link";
import StatusBadge from "../../components/design-system/StatusBadge";
import TicketConversation from "./trao-doi-trong-ticket/TicketConversation";

function InfoRow({ label, value, strong = false }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 text-[14px]">
      <p className="font-semibold text-slate-600">{label}</p>
      <p className={strong ? "font-extrabold text-slate-950" : "font-bold text-slate-800"}>{value || "--"}</p>
    </div>
  );
}

export default function SupportDetailPage({ ticket }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
        <Link className="font-extrabold text-bms-primary hover:underline" href="/ho-tro-khach">
          Hỗ trợ khách
        </Link>
        <span>/</span>
        <span>{ticket.code}</span>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <main className="overflow-hidden rounded-[14px] border border-bms-border bg-white">
          <header className="border-b border-bms-border px-4 py-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="text-[22px] font-extrabold text-slate-950">{ticket.title}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <StatusBadge status={ticket.status} />
                  <span className="rounded-bms-pill bg-red-50 px-3 py-1 text-[13px] font-extrabold text-bms-danger">
                    Ưu tiên: {ticket.priority}
                  </span>
                  <span className="text-[13px] font-bold text-slate-600">{ticket.createdAt}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-bms-pill bg-bms-primary px-4 py-2 text-[14px] font-extrabold text-white" type="button">
                  Trả lời khách hàng
                </button>
                <button className="rounded-bms-pill border border-slate-300 px-4 py-2 text-[14px] font-extrabold text-slate-800" type="button">
                  Ghi chú nội bộ
                </button>
              </div>
            </div>
          </header>

          <section className="border-b border-bms-border px-4 py-4">
            <div className="mb-4 grid gap-3 lg:grid-cols-3">
              <div className="rounded-[12px] border border-blue-100 bg-blue-50 p-3">
                <p className="text-[13px] font-extrabold uppercase text-bms-primary">Công ty gửi</p>
                <p className="mt-1 text-[15px] font-extrabold text-slate-950">{ticket.company}</p>
                <p className="text-[13px] font-semibold text-slate-700">{ticket.service}</p>
              </div>
              <div className="rounded-[12px] border border-green-100 bg-green-50 p-3">
                <p className="text-[13px] font-extrabold uppercase text-bms-success">Người gửi</p>
                <p className="mt-1 text-[15px] font-extrabold text-slate-950">{ticket.senderName}</p>
                <p className="text-[13px] font-semibold text-slate-700">{ticket.senderPhone} · {ticket.senderEmail}</p>
              </div>
              <div className="rounded-[12px] border border-blue-100 bg-blue-50 p-3">
                <p className="text-[13px] font-extrabold uppercase text-bms-warning">Nhân viên xử lý</p>
                <p className="mt-1 text-[15px] font-extrabold text-slate-950">{ticket.assignedStaff}</p>
                <p className="text-[13px] font-semibold text-slate-700">{ticket.assignedTeam}</p>
              </div>
            </div>

            <p className="text-[15px] font-semibold leading-7 text-slate-900">{ticket.content}</p>
            <div className="mt-4">
              <p className="mb-2 text-[14px] font-extrabold text-slate-950">Tệp đính kèm</p>
              <div className="flex flex-wrap gap-2">
                {ticket.attachments.map((file) => (
                  <button className="rounded-[10px] border border-bms-border bg-slate-50 px-3 py-2 text-[13px] font-bold text-slate-800 hover:border-bms-primary hover:text-bms-primary" key={file} type="button">
                    {file}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <TicketConversation ticket={ticket} />
        </main>

        <aside className="space-y-4">
          <section className="rounded-[14px] border border-bms-border bg-white p-4">
            <h3 className="mb-4 text-[18px] font-extrabold text-slate-950">Thông tin ticket</h3>
            <div className="space-y-3">
              <InfoRow label="Ticket" value={ticket.code} strong />
              <InfoRow label="Công ty gửi" value={ticket.company} strong />
              <InfoRow label="Người gửi" value={ticket.senderName} strong />
              <InfoRow label="Email" value={ticket.senderEmail} />
              <InfoRow label="Điện thoại" value={ticket.senderPhone} />
              <InfoRow label="Nhân viên xử lý" value={ticket.assignedStaff} strong />
              <InfoRow label="Team xử lý" value={ticket.assignedTeam} />
              <InfoRow label="Dịch vụ" value={ticket.service} />
              <InfoRow label="Chu kỳ" value={ticket.contractPeriod} />
            </div>
          </section>

          <section className="rounded-[14px] border border-bms-border bg-white p-4">
            <h3 className="mb-3 text-[18px] font-extrabold text-slate-950">Liên kết khách hàng</h3>
            <div className="grid gap-2">
              {["Mở công ty", "Mở liên hệ", "Mở tủ hồ sơ", "Mở chứng từ", "Mở tài khoản đăng nhập"].map((item) => (
                <button className="rounded-[10px] border border-bms-border bg-slate-50 px-3 py-2 text-left text-[14px] font-bold text-slate-800 hover:border-bms-primary hover:bg-blue-50 hover:text-bms-primary" key={item} type="button">
                  {item}
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}
