export default function TicketAttachmentUploader({ mode }) {
  const isReply = mode === "reply";

  return (
    <div className={`rounded-[12px] border p-3 ${isReply ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-slate-50"}`}>
      <label className="grid gap-2 text-[14px] font-extrabold text-slate-800">
        File đính kèm
        <input className="rounded-[10px] border border-bms-border bg-white px-3 py-2 font-semibold" type="file" />
      </label>
      <p className={`mt-2 text-[13px] font-bold ${isReply ? "text-amber-700" : "text-slate-600"}`}>
        {isReply ? "File này sẽ được gửi cho khách hàng." : "File này chỉ lưu nội bộ, không gửi email cho khách."}
      </p>
    </div>
  );
}
