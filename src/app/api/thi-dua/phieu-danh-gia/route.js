import { phieuDanhGiaThiDua } from "@/app/data/thi-dua-data";
import { tinhDiemCuoiCung, xepLoaiThiDua } from "@/app/lib/thi-dua-scoring";
import { locDuLieuTheoQuyen } from "@/app/lib/thi-dua-permissions";
import { ok } from "../_utils";

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const nguoiDung = {
    id: searchParams.get("id"),
    teamId: searchParams.get("teamId"),
    vaiTro: searchParams.get("vaiTro") || "Admin",
  };

  return ok(locDuLieuTheoQuyen(phieuDanhGiaThiDua, nguoiDung));
}

export async function POST(request) {
  const body = await request.json();
  const diemCuoiCung = tinhDiemCuoiCung(body);
  return ok(
    { id: crypto.randomUUID(), ...body, diemCuoiCung, xepLoai: xepLoaiThiDua(diemCuoiCung) },
    "Tạo phiếu đánh giá thi đua thành công."
  );
}
