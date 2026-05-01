"use client";

import { useMemo, useState } from "react";
import TicketInternalCommentBox from "./TicketInternalCommentBox";
import TicketMessageTimeline from "./TicketMessageTimeline";
import TicketReplyBox from "./TicketReplyBox";

function buildInitialMessages(ticket) {
  return [
    {
      id: "customer-start",
      messageType: "customer_message",
      visibility: "customer_visible",
      author: ticket.senderName,
      time: ticket.createdAt,
      content: ticket.content,
      sendStatus: "Đã nhận",
      emailStatus: "Không gửi email",
      toEmails: [],
      attachments: ticket.attachments,
    },
    {
      id: "internal-1",
      messageType: "internal_comment",
      visibility: "internal_only",
      author: ticket.assignedStaff,
      time: "19:41 08/04/2026",
      content: "Đã tiếp nhận thông tin từ khách. Cần kiểm tra log và xác nhận nguyên nhân trước khi trả lời ra ngoài.",
      sendStatus: "Không gửi email",
      emailStatus: "Không gửi email",
      toEmails: [],
      attachments: [],
    },
    {
      id: "reply-1",
      messageType: "agent_reply",
      visibility: "customer_visible",
      author: ticket.assignedStaff,
      time: ticket.updatedAt,
      content: "Bên em đã tiếp nhận yêu cầu và đang kiểm tra. Em sẽ phản hồi lại khách ngay khi có kết quả xác nhận.",
      sendStatus: "Đã gửi",
      emailStatus: "Đã gửi",
      toEmails: [ticket.senderEmail],
      attachments: [],
    },
  ];
}

export default function TicketConversation({ ticket }) {
  const [activeTab, setActiveTab] = useState("reply");
  const initialMessages = useMemo(() => buildInitialMessages(ticket), [ticket]);
  const [messages, setMessages] = useState(initialMessages);

  function addMessage(message) {
    setMessages((current) => [message, ...current]);
  }

  return (
    <section className="px-4 py-4">
      <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-[18px] font-extrabold text-slate-950">Trao đổi trong ticket</h3>
          <p className="text-[14px] font-semibold text-slate-600">Reply gửi email cho khách. Comment là ghi chú nội bộ, khách hàng không thấy.</p>
        </div>
        <div className="inline-flex rounded-[12px] border border-bms-border bg-slate-50 p-1">
          <button
            className={`rounded-[10px] px-4 py-2 text-[14px] font-extrabold ${activeTab === "reply" ? "bg-bms-primary text-white" : "text-slate-700"}`}
            onClick={() => setActiveTab("reply")}
            type="button"
          >
            Trả lời khách hàng
          </button>
          <button
            className={`rounded-[10px] px-4 py-2 text-[14px] font-extrabold ${activeTab === "comment" ? "bg-slate-800 text-white" : "text-slate-700"}`}
            onClick={() => setActiveTab("comment")}
            type="button"
          >
            Ghi chú nội bộ
          </button>
        </div>
      </div>

      <div className="mb-5 rounded-[12px] border border-bms-border bg-white p-4">
        {activeTab === "reply" ? <TicketReplyBox onAddMessage={addMessage} ticket={ticket} /> : <TicketInternalCommentBox onAddMessage={addMessage} ticket={ticket} />}
      </div>

      <TicketMessageTimeline messages={messages} />
    </section>
  );
}
