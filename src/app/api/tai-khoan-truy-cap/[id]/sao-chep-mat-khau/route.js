import { NextResponse } from "next/server";
import { findAccessAccount, findAccessCustomer } from "../../../../data/access-account-data";

export async function POST(_request, { params }) {
  const { id } = await params;
  const account = findAccessAccount(id);

  if (!account) {
    return NextResponse.json({ message: "Không tìm thấy tài khoản truy cập." }, { status: 404 });
  }

  const customer = findAccessCustomer(account.customerId);

  return NextResponse.json({
    message: "Đã ghi log sao chép mật khẩu.",
    log: {
      user: "Người dùng hiện tại",
      accountId: account.id,
      accountName: account.systemName,
      customerId: customer.id,
      customerName: customer.name,
      action: "Sao chép mật khẩu",
      viewedAt: new Date().toISOString(),
    },
  });
}
