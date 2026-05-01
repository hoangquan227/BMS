import { NextResponse } from "next/server";
import { getApiData } from "../../_shared-module-data";

export async function GET(_request, { params }) {
  const { screen } = await params;
  return NextResponse.json({ ok: true, message: "Lấy dữ liệu lương thưởng thành công.", data: getApiData("luongThuong", screen) });
}

export async function POST(request, { params }) {
  const { screen } = await params;
  const body = await request.json();
  return NextResponse.json({ ok: true, message: "Xử lý dữ liệu lương thưởng thành công.", data: { id: crypto.randomUUID(), loaiDuLieu: screen, ...body } });
}
