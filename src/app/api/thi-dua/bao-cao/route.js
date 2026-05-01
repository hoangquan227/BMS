import { baoCaoThiDua, tongQuanThiDua, xepHangThiDua } from "@/app/data/thi-dua-data";
import { ok } from "../_utils";

export async function GET() {
  return ok({ ...baoCaoThiDua, tongQuan: tongQuanThiDua, xepHang: xepHangThiDua });
}
