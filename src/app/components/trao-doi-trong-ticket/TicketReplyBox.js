"use client";

import { useState } from "react";
import TicketAttachmentUploader from "./TicketAttachmentUploader";
import TicketCannedResponsePicker from "./TicketCannedResponsePicker";
import TicketEmailRecipients from "./TicketEmailRecipients";
import TicketRichTextEditor from "./TicketRichTextEditor";

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

export default function TicketReplyBox({ ticket, onAddMessage }) {
  const [body, setBody] = useState("");
  const plainBody = stripHtml(body);

  function handleSend() {
    if (!ticket.senderEmail || !plainBody) return;

    onAddMessage({
      id: `reply-${Date.now()}`,
      messageType: "agent_reply",
      visibility: "customer_visible",
      author: ticket.assignedStaff,
      time: "Vừa xong",
      content: plainBody,
      sendStatus: "Đã gửi",
      emailStatus: "Đã gửi",
      toEmails: [ticket.senderEmail],
      attachments: [],
    });
    setBody("");
  }

  return (
    <div className="space-y-4">
      <div className="rounded-[12px] border border-amber-200 bg-amber-50 px-4 py-3 text-[14px] font-extrabold text-amber-800">
        Lưu ý: Nội dung này sẽ được gửi cho khách hàng qua email.
      </div>
      <TicketEmailRecipients ticket={ticket} />
      <TicketCannedResponsePicker />
      <TicketRichTextEditor
        label="Nội dung trả lời"
        onChange={setBody}
        placeholder="Nhập nội dung trả lời khách hàng..."
        value={body}
      />
      <TicketAttachmentUploader mode="reply" />
      <div className="rounded-[12px] bg-slate-50 p-3 text-[14px] font-semibold leading-6 text-slate-700">
        Trân trọng,<br />
        {ticket.assignedStaff}<br />
        Tài Chính Khởi Nghiệp<br />
        Hotline: 028.710.19.191<br />
        Cổng hỗ trợ: hotro.tckn.vn
      </div>
      <div className="flex justify-end gap-2">
        <button className="rounded-bms-pill border border-bms-border px-4 py-2 text-[14px] font-extrabold text-slate-700" type="button">Lưu nháp</button>
        <button className="rounded-bms-pill bg-bms-primary px-4 py-2 text-[14px] font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-50" disabled={!plainBody} onClick={handleSend} type="button">
          Gửi trả lời cho khách
        </button>
      </div>
    </div>
  );
}
