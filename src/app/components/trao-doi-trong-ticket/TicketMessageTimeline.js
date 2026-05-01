import StatusBadge from "../../../components/design-system/StatusBadge";

const typeStyle = {
  customer_message: {
    label: "Khách gửi",
    bubble: "border-green-100 bg-green-50",
    labelClass: "text-bms-success",
    dot: "bg-bms-success",
  },
  agent_reply: {
    label: "Đã gửi cho khách",
    bubble: "border-blue-100 bg-blue-50",
    labelClass: "text-bms-primary",
    dot: "bg-bms-primary",
  },
  internal_comment: {
    label: "Nội bộ",
    bubble: "border-slate-200 bg-slate-50",
    labelClass: "text-slate-700",
    dot: "bg-slate-500",
  },
  system_event: {
    label: "Hệ thống",
    bubble: "border-slate-200 bg-white",
    labelClass: "text-slate-700",
    dot: "bg-slate-400",
  },
};

export default function TicketMessageTimeline({ messages }) {
  return (
    <section className="space-y-4 rounded-[14px] border border-bms-border bg-white p-4">
      <div className="flex items-center justify-center">
        <span className="rounded-bms-pill bg-slate-100 px-3 py-1 text-[13px] font-extrabold text-slate-600">Dòng trao đổi theo thời gian</span>
      </div>
      {messages.map((message) => {
        const style = typeStyle[message.messageType] || typeStyle.system_event;
        const isCustomer = message.side === "customer";

        return (
          <article className={`flex ${isCustomer ? "justify-end" : "justify-start"}`} key={message.id}>
            <div className={`flex max-w-[86%] gap-3 ${isCustomer ? "flex-row-reverse" : ""} md:max-w-[72%]`}>
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-black ${isCustomer ? "bg-green-100 text-bms-success" : "bg-blue-100 text-bms-primary"}`}>
                {isCustomer ? "KH" : "TK"}
              </div>
              <div className={`rounded-[16px] border px-4 py-3 shadow-sm ${style.bubble} ${isCustomer ? "rounded-tr-[4px]" : "rounded-tl-[4px]"}`}>
                <div className={`mb-2 flex flex-wrap items-center gap-2 ${isCustomer ? "justify-end text-right" : ""}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                  <div>
                    <p className="font-extrabold text-slate-950">{message.author}</p>
                    <p className="text-[12px] font-bold text-slate-500">{message.organization}</p>
                  </div>
                  <span className={`rounded-bms-pill bg-white px-2 py-1 text-[13px] font-extrabold ${style.labelClass}`}>{style.label}</span>
                  {message.sendStatus ? <StatusBadge status={message.sendStatus} /> : null}
                </div>
                <p className={`text-[14px] font-semibold leading-6 text-slate-900 ${isCustomer ? "text-right" : ""}`}>{message.content}</p>
                <div className={`mt-3 grid gap-1 text-[13px] font-semibold text-slate-600 ${isCustomer ? "text-right" : ""}`}>
                  <p>{message.time}</p>
                  <p>Hiển thị: {message.visibility === "customer_visible" ? "Khách hàng thấy" : "Chỉ nội bộ"}</p>
                  <p>Gửi email: {message.emailStatus || "Không gửi email"}</p>
                  {message.toEmails?.length ? <p>Người nhận: {message.toEmails.join(", ")}</p> : null}
                  {message.attachments?.length ? <p>Tệp đính kèm: {message.attachments.join(", ")}</p> : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
