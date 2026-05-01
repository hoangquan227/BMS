import { NextResponse } from "next/server";
import { findAccessAccount } from "../../../data/access-account-data";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const account = findAccessAccount(id);
  const payload = await request.json();

  if (!account) {
    return NextResponse.json({ message: "Không tìm thấy tài khoản truy cập." }, { status: 404 });
  }

  return NextResponse.json({
    message: "Đã cập nhật tài khoản truy cập mẫu và ghi lịch sử cập nhật.",
    data: { ...account, ...payload, encryptedPassword: "Đã mã hóa phía server", password: undefined },
  });
}
