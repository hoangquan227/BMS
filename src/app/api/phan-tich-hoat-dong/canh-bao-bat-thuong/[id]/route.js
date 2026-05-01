import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    message: "Đã cập nhật trạng thái cảnh báo hoạt động.",
    data: { id, ...body },
  });
}
