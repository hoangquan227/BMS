import { crmTabResponse } from "../../../../_crm-tab-response";

export async function GET(_request, { params }) {
  const { id, tabKey } = await params;

  return crmTabResponse("lien-he", id, tabKey);
}
