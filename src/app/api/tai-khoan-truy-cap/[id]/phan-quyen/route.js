import { NextResponse } from "next/server";
import { findAccessAccount } from "../../../../data/access-account-data";

export async function POST(request, { params }) {
  const { id } = await params;
  const account = findAccessAccount(id);
  const payload = await request.json();

  if (!account) {
    return NextResponse.json({ message: "Không tìm thấy tài khoản truy cập." }, { status: 404 });
  }

  return NextResponse.json({
    message: "Đã cập nhật phân quyền xem mật khẩu mẫu.",
    accountId: account.id,
    permissions: payload.permissions || [],
  });
}
