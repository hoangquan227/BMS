import { createLinkedRecordResponse } from "../_crm-tab-response";

export async function POST(request) {
  const payload = await request.json();

  return createLinkedRecordResponse("thanh toán", payload);
}
