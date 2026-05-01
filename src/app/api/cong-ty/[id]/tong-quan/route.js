import { crmTabResponse } from "../../../_crm-tab-response";

export async function GET(_request, { params }) {
  const { id } = await params;

  return crmTabResponse("cong-ty", id, "tong-quan");
}
