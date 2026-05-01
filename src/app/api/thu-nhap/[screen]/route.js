import { NextResponse } from "next/server";
import { getApiData } from "../../_shared-module-data";
import { tinhThuNhapTamTinh } from "@/app/lib/hrm-scoring";

export async function GET(_request, { params }) {
  const { screen } = await params;
  return NextResponse.json({ ok: true, message: "Lấy dữ liệu thu nhập thành công.", data: getApiData("thuNhap", screen) });
}

export async function POST(request, { params }) {
  const { screen } = await params;
  const body = await request.json();
  const thuNhapTinhLai = screen === "tinh-lai-thu-nhap-tam-tinh" ? tinhThuNhapTamTinh(body) : undefined;

  return NextResponse.json({
    ok: true,
    message: "Xử lý dữ liệu thu nhập thành công.",
    data: { id: crypto.randomUUID(), loaiDuLieu: screen, ...body, thuNhapTinhLai },
  });
}
