import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const payload = await request.json();

  return NextResponse.json({ message: "Đã cập nhật mẫu trả lời nhanh.", data: { id, ...payload } });
}
