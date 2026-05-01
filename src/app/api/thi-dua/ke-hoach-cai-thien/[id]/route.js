import { patched } from "../../_utils";

export async function PATCH(request, { params }) {
  return patched(request, params, "kế hoạch cải thiện");
}
