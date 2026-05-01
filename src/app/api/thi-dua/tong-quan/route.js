import { tongQuanThiDuaMoi } from "@/app/data/hrm-data";
import { ok } from "../_utils";

export async function GET() {
  return ok(tongQuanThiDuaMoi);
}
