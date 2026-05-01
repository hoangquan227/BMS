import { NextResponse } from "next/server";
import { cauHinhTheoDoiHoatDong } from "@/app/data/activity-analytics-data";

export async function GET() {
  return NextResponse.json({ ok: true, message: "Lấy cấu hình theo dõi thành công.", data: cauHinhTheoDoiHoatDong });
}

export async function PATCH(request) {
  const body = await request.json();
  return NextResponse.json({ ok: true, message: "Đã cập nhật cấu hình theo dõi.", data: { ...cauHinhTheoDoiHoatDong[0], ...body } });
}
