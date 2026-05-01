import { ghiNhanHanhVi } from "@/app/data/thi-dua-data";
import { tinhDiemGhiNhan } from "@/app/lib/thi-dua-scoring";
import { locDuLieuTheoQuyen } from "@/app/lib/thi-dua-permissions";
import { ok } from "../_utils";

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const nguoiDung = {
    id: searchParams.get("id"),
    teamId: searchParams.get("teamId"),
    vaiTro: searchParams.get("vaiTro") || "Admin",
  };

  return ok(locDuLieuTheoQuyen(ghiNhanHanhVi, nguoiDung));
}

export async function POST(request) {
  const body = await request.json();
  const diemDeXuat = tinhDiemGhiNhan(body.loaiGhiNhan, body.mucAnhHuong);
  return ok({ id: crypto.randomUUID(), ...body, diemDeXuat }, "Tạo ghi nhận hành vi thành công.");
}
