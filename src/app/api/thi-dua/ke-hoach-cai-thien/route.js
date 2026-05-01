import { keHoachCaiThien } from "@/app/data/thi-dua-data";
import { locDuLieuTheoQuyen } from "@/app/lib/thi-dua-permissions";
import { created, ok } from "../_utils";

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const nguoiDung = {
    id: searchParams.get("id"),
    teamId: searchParams.get("teamId"),
    vaiTro: searchParams.get("vaiTro") || "Admin",
  };

  return ok(locDuLieuTheoQuyen(keHoachCaiThien, nguoiDung));
}

export async function POST(request) {
  return created(request, "kế hoạch cải thiện");
}
