import { NextResponse } from "next/server";
import { getApiData } from "../../_shared-module-data";

export async function GET(_request, { params }) {
  const { screen } = await params;
  return NextResponse.json({ ok: true, message: "Lấy dữ liệu mục tiêu thành công.", data: getApiData("mucTieu", screen) });
}

export async function POST(request, { params }) {
  const { screen } = await params;
  const body = await request.json();
  return NextResponse.json({ ok: true, message: "Tạo dữ liệu mục tiêu thành công.", data: { id: crypto.randomUUID(), loaiDuLieu: screen, ...body } });
}
