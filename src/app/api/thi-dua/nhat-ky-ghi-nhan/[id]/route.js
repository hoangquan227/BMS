import { tinhDiemGhiNhan } from "@/app/lib/thi-dua-scoring";
import { ok } from "../../_utils";

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { id } = await params;
  const diemDeXuat = body.diemDeXuat ?? tinhDiemGhiNhan(body.loaiGhiNhan, body.mucAnhHuong);
  return ok({ id, ...body, diemDeXuat }, "Cập nhật ghi nhận hành vi thành công.");
}
