import { NextResponse } from "next/server";
import { findAccessAccount, findAccessCustomer } from "../../../../data/access-account-data";

function createTemporaryDemoPassword(account) {
  return `DEMO-${account.type.replaceAll(" ", "-")}@2026`;
}

export async function POST(request, { params }) {
  const { id } = await params;
  const account = findAccessAccount(id);
  const body = await request.json().catch(() => ({}));

  if (!account) {
    return NextResponse.json({ message: "Không tìm thấy tài khoản truy cập." }, { status: 404 });
  }

  if (!account.canViewPassword) {
    return NextResponse.json({ message: "Bạn không có quyền xem mật khẩu này." }, { status: 403 });
  }

  const customer = findAccessCustomer(account.customerId);

  return NextResponse.json({
    password: createTemporaryDemoPassword(account),
    expiresInSeconds: 15,
    log: {
      user: "Người dùng hiện tại",
      accountId: account.id,
      accountName: account.systemName,
      customerId: customer.id,
      customerName: customer.name,
      action: "Xem mật khẩu",
      reason: body.reason || "Không nhập lý do",
      viewedAt: new Date().toISOString(),
    },
  });
}
