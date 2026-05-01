import { NextResponse } from "next/server";
import { activityScreens } from "@/app/data/activity-analytics-data";

export async function GET(_request, { params }) {
  const { screen } = await params;
  const data = activityScreens[screen] || null;

  return NextResponse.json({
    ok: true,
    message: "Lấy dữ liệu phân tích hoạt động thành công.",
    data,
  });
}

export async function POST(request, { params }) {
  const { screen } = await params;
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    message: "Ghi nhận dữ liệu phân tích hoạt động thành công.",
    data: { id: crypto.randomUUID(), loaiDuLieu: screen, ...body },
  });
}
