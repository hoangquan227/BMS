import { NextResponse } from "next/server";
import { chinhSachDuLieuNoiBo } from "@/app/data/activity-analytics-data";

export async function GET() {
  return NextResponse.json({ ok: true, message: "Lấy chính sách minh bạch dữ liệu thành công.", data: chinhSachDuLieuNoiBo });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ ok: true, message: "Tạo chính sách dữ liệu thành công.", data: { id: crypto.randomUUID(), ...body } });
}
