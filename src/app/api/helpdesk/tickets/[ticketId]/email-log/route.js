import { NextResponse } from "next/server";
import { findSupportTicket } from "../../../../../data/support-data";

export async function GET(_request, { params }) {
  const { ticketId } = await params;
  const ticket = findSupportTicket(ticketId);

  return NextResponse.json({
    ticketId,
    logs: [
      {
        id: "email-log-1",
        provider: "Email công ty",
        fromEmail: "hotro@tckn.vn",
        toEmails: [ticket.senderEmail],
        subject: `[${ticket.code.replace("#", "TCKN-")}] ${ticket.title}`,
        sendStatus: "sent",
        errorMessage: null,
        sentAt: ticket.updatedAt,
      },
    ],
  });
}
