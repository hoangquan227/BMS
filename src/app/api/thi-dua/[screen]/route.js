import { NextResponse } from "next/server";
import { getApiData } from "../../_shared-module-data";
import { tinhDiemKetQuaCongViec, tinhDiemThiDua } from "@/app/lib/hrm-scoring";

export async function GET(_request, { params }) {
  const { screen } = await params;
  return NextResponse.json({ ok: true, message: "Lấy dữ liệu thi đua thành công.", data: getApiData("thiDua", screen) });
}

export async function POST(request, { params }) {
  const { screen } = await params;
  const body = await request.json();
  const diemTinhLai =
    screen === "tinh-lai-ket-qua-cong-viec"
      ? tinhDiemKetQuaCongViec(body)
      : screen === "tu-danh-gia" || screen === "leader-duyet"
        ? tinhDiemThiDua(body)
        : undefined;

  return NextResponse.json({
    ok: true,
    message: "Xử lý dữ liệu thi đua thành công.",
    data: { id: crypto.randomUUID(), loaiDuLieu: screen, ...body, diemTinhLai },
  });
}
