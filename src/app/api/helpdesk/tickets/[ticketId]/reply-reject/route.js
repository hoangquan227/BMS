import { simpleTicketActionResponse } from "../../../_ticket-conversation";

export async function POST(request, { params }) {
  const { ticketId } = await params;
  const payload = await request.json();

  return simpleTicketActionResponse("từ chối trả lời", ticketId, { ...payload, approvalStatus: "rejected", sendStatus: "not_sent" });
}
