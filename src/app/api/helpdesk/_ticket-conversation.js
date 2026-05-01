import { NextResponse } from "next/server";
import { findSupportTicket } from "../../data/support-data";

export function ticketMessagesResponse(ticketId) {
  const ticket = findSupportTicket(ticketId);

  return NextResponse.json({
    ticketId,
    messages: [
      {
        id: "customer-start",
        ticketId,
        messageType: "customer_message",
        visibility: "customer_visible",
        direction: "inbound",
        subject: ticket.title,
        body: ticket.content,
        fromEmail: ticket.senderEmail,
        toEmails: ["hotro@tckn.vn"],
        sendStatus: "not_sent",
        isCustomerVisible: true,
        createdAt: ticket.createdAt,
      },
      {
        id: "internal-1",
        ticketId,
        messageType: "internal_comment",
        visibility: "internal_only",
        direction: "internal",
        body: "Ghi chú nội bộ: cần kiểm tra log và xác định nguyên nhân trước khi trả lời khách.",
        fromUserId: "nguyen-minh",
        toEmails: [],
        sendStatus: "not_sent",
        isCustomerVisible: false,
        createdAt: "19:41 08/04/2026",
      },
      {
        id: "reply-1",
        ticketId,
        messageType: "agent_reply",
        visibility: "customer_visible",
        direction: "outbound",
        subject: `[${ticket.code.replace("#", "TCKN-")}] ${ticket.title}`,
        body: "Bên em đã tiếp nhận yêu cầu và đang kiểm tra. Em sẽ phản hồi lại khách ngay khi có kết quả xác nhận.",
        fromUserId: "nguyen-minh",
        fromEmail: "hotro@tckn.vn",
        toEmails: [ticket.senderEmail],
        ccEmails: [],
        bccEmails: [],
        sendStatus: "sent",
        isFirstResponse: true,
        isCustomerVisible: true,
        createdAt: ticket.updatedAt,
      },
    ],
  });
}

export function replyResponse(ticketId, payload) {
  const ticket = findSupportTicket(ticketId);

  if (!payload.toEmails?.length && !ticket.senderEmail) {
    return NextResponse.json({ message: "Email người nhận không được để trống." }, { status: 400 });
  }

  if (!payload.body?.trim()) {
    return NextResponse.json({ message: "Nội dung trả lời không được để trống." }, { status: 400 });
  }

  return NextResponse.json(
    {
      message: "Đã gửi trả lời cho khách hàng.",
      data: {
        id: `reply-${Date.now()}`,
        ticketId,
        messageType: "agent_reply",
        visibility: "customer_visible",
        direction: "outbound",
        subject: payload.subject || `[${ticket.code.replace("#", "TCKN-")}] ${ticket.title}`,
        body: payload.body,
        toEmails: payload.toEmails || [ticket.senderEmail],
        ccEmails: payload.ccEmails || [],
        bccEmails: payload.bccEmails || [],
        sendStatus: "sent",
        approvalStatus: "approved",
        isCustomerVisible: true,
        isFirstResponse: Boolean(payload.isFirstResponse),
      },
    },
    { status: 201 },
  );
}

export function commentResponse(ticketId, payload) {
  if (!payload.body?.trim()) {
    return NextResponse.json({ message: "Nội dung ghi chú nội bộ không được để trống." }, { status: 400 });
  }

  return NextResponse.json(
    {
      message: "Đã lưu ghi chú nội bộ. Ghi chú này không gửi email cho khách.",
      data: {
        id: `comment-${Date.now()}`,
        ticketId,
        messageType: "internal_comment",
        visibility: "internal_only",
        direction: "internal",
        body: payload.body,
        mentionedUserIds: payload.mentionedUserIds || [],
        sendStatus: "not_sent",
        isCustomerVisible: false,
      },
    },
    { status: 201 },
  );
}

export function simpleTicketActionResponse(action, ticketId, payload = {}) {
  return NextResponse.json(
    {
      message: `Đã ghi nhận thao tác: ${action}.`,
      data: {
        id: `${action}-${Date.now()}`,
        ticketId,
        ...payload,
      },
    },
    { status: 201 },
  );
}
