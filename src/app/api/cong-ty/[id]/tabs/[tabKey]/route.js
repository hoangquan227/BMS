import { crmTabResponse } from "../../../../_crm-tab-response";

export async function GET(_request, { params }) {
  const { id, tabKey } = await params;

  return crmTabResponse("cong-ty", id, tabKey);
}
