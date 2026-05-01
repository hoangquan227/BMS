import { NextResponse } from "next/server";

export function ok(data, message = "Lấy dữ liệu thành công.") {
  return NextResponse.json({ ok: true, message, data });
}

export async function created(request, tenBanGhi) {
  const body = await request.json();
  return ok({ id: crypto.randomUUID(), ...body }, `Tạo ${tenBanGhi} thành công.`);
}

export async function patched(request, params, tenBanGhi) {
  const body = await request.json();
  const { id } = await params;
  return ok({ id, ...body }, `Cập nhật ${tenBanGhi} thành công.`);
}
