import { bangXepHangMoi } from "@/app/data/hrm-data";
import { locDuLieuTheoQuyen } from "@/app/lib/thi-dua-permissions";
import { ok } from "../_utils";

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const nguoiDung = {
    id: searchParams.get("id"),
    teamId: searchParams.get("teamId"),
    vaiTro: searchParams.get("vaiTro") || "Admin",
  };

  return ok(locDuLieuTheoQuyen(bangXepHangMoi, nguoiDung));
}
