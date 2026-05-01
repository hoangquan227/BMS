import { NextResponse } from "next/server";
import { findAccessAccount } from "../../../../data/access-account-data";

export async function POST(_request, { params }) {
  const { id } = await params;
  const account = findAccessAccount(id);

  if (!account) {
    return NextResponse.json({ message: "Không tìm thấy tài khoản truy cập." }, { status: 404 });
  }

  return NextResponse.json({
    message: "Đã đánh dấu sai mật khẩu và ghi lịch sử cập nhật.",
    accountId: account.id,
    status: "Sai mật khẩu",
  });
}
