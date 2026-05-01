import { ticketMessagesResponse } from "../../../_ticket-conversation";

export async function GET(_request, { params }) {
  const { ticketId } = await params;

  return ticketMessagesResponse(ticketId);
}
