import StatusBadge from "../../../components/design-system/StatusBadge";

const typeStyle = {
  customer_message: {
    label: "Khách gửi",
    className: "border-green-100 bg-green-50 text-bms-success",
    dot: "bg-bms-success",
  },
  agent_reply: {
    label: "Đã gửi cho khách",
    className: "border-blue-100 bg-blue-50 text-bms-primary",
    dot: "bg-bms-primary",
  },
  internal_comment: {
    label: "Nội bộ",
    className: "border-slate-200 bg-slate-50 text-slate-700",
    dot: "bg-slate-500",
  },
  system_event: {
    label: "Hệ thống",
    className: "border-slate-200 bg-slate-100 text-slate-700",
    dot: "bg-slate-400",
  },
};

export default function TicketMessageTimeline({ messages }) {
  return (
    <section className="space-y-3">
      {messages.map((message) => {
        const style = typeStyle[message.messageType] || typeStyle.system_event;

        return (
          <article className={`rounded-[12px] border p-3 ${style.className}`} key={message.id}>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
              <p className="font-extrabold text-slate-950">{message.author}</p>
              <span className="rounded-bms-pill bg-white px-2 py-1 text-[13px] font-extrabold">{style.label}</span>
              <span className="text-[13px] font-semibold text-slate-600">{message.time}</span>
              {message.sendStatus ? <StatusBadge status={message.sendStatus} /> : null}
            </div>
            <p className="text-[14px] font-semibold leading-6 text-slate-900">{message.content}</p>
            <div className="mt-3 grid gap-2 text-[13px] font-semibold text-slate-700 md:grid-cols-2">
              <p>Hiển thị: {message.visibility === "customer_visible" ? "Khách hàng thấy" : "Chỉ nội bộ"}</p>
              <p>Gửi email: {message.emailStatus || "Không gửi email"}</p>
              {message.toEmails?.length ? <p className="md:col-span-2">Người nhận: {message.toEmails.join(", ")}</p> : null}
              {message.attachments?.length ? <p className="md:col-span-2">Tệp đính kèm: {message.attachments.join(", ")}</p> : null}
            </div>
          </article>
        );
      })}
    </section>
  );
}
