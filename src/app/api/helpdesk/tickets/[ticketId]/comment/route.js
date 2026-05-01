import { commentResponse } from "../../../_ticket-conversation";

export async function POST(request, { params }) {
  const { ticketId } = await params;
  const payload = await request.json();

  return commentResponse(ticketId, payload);
}
