export default function TicketEmailRecipients({ ticket }) {
  return (
    <div className="grid gap-3">
      <label className="grid gap-1 text-[14px] font-extrabold text-slate-800">
        To
        <input className="min-h-11 rounded-[10px] border border-bms-border px-3 font-semibold" defaultValue={ticket.senderEmail} />
      </label>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid gap-1 text-[14px] font-extrabold text-slate-800">
          CC
          <input className="min-h-11 rounded-[10px] border border-bms-border px-3 font-semibold" placeholder="Chọn thêm liên hệ cùng khách hàng" />
        </label>
        <label className="grid gap-1 text-[14px] font-extrabold text-slate-800">
          BCC
          <input className="min-h-11 rounded-[10px] border border-bms-border px-3 font-semibold" placeholder="Chỉ dùng khi thật sự cần" />
        </label>
      </div>
      <label className="grid gap-1 text-[14px] font-extrabold text-slate-800">
        Chủ đề
        <input className="min-h-11 rounded-[10px] border border-bms-border px-3 font-semibold" defaultValue={`[${ticket.code.replace("#", "TCKN-")}] ${ticket.title}`} />
      </label>
    </div>
  );
}
