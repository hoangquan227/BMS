import { tinhDiemCuoiCung, xepLoaiThiDua } from "@/app/lib/thi-dua-scoring";
import { ok } from "../../_utils";

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { id } = await params;
  const diemCuoiCung = tinhDiemCuoiCung(body);
  return ok({ id, ...body, diemCuoiCung, xepLoai: xepLoaiThiDua(diemCuoiCung) }, "Cập nhật phiếu đánh giá thi đua thành công.");
}
