"use client";

import { useState } from "react";
import TicketAttachmentUploader from "./TicketAttachmentUploader";

export default function TicketInternalCommentBox({ ticket, onAddMessage }) {
  const [body, setBody] = useState("");

  function handleSave() {
    if (!body.trim()) return;

    onAddMessage({
      id: `comment-${Date.now()}`,
      messageType: "internal_comment",
      visibility: "internal_only",
      author: ticket.assignedStaff,
      time: "Vừa xong",
      content: body,
      sendStatus: "Không gửi email",
      emailStatus: "Không gửi email",
      toEmails: [],
      attachments: [],
    });
    setBody("");
  }

  return (
    <div className="space-y-4">
      <div className="rounded-[12px] border border-slate-200 bg-slate-100 px-4 py-3 text-[14px] font-extrabold text-slate-800">
        Ghi chú này chỉ hiển thị trong nội bộ. Khách hàng không nhìn thấy và không nhận email.
      </div>
      <label className="grid gap-1 text-[14px] font-extrabold text-slate-800">
        Nhắc tên nội bộ
        <input className="min-h-11 rounded-[10px] border border-bms-border px-3 font-semibold" placeholder="@tên nhân viên cần phối hợp" />
      </label>
      <label className="grid gap-1 text-[14px] font-extrabold text-slate-800">
        Nội dung ghi chú nội bộ
        <textarea
          className="min-h-[150px] rounded-[10px] border border-bms-border px-3 py-2 font-semibold leading-6"
          onChange={(event) => setBody(event.target.value)}
          placeholder="Nhập ghi chú chỉ dùng trong nội bộ..."
          value={body}
        />
      </label>
      <TicketAttachmentUploader mode="comment" />
      <div className="flex justify-end">
        <button className="rounded-bms-pill bg-slate-800 px-4 py-2 text-[14px] font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-50" disabled={!body.trim()} onClick={handleSave} type="button">
          Lưu ghi chú nội bộ
        </button>
      </div>
    </div>
  );
}
