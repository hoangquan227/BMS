import { NextResponse } from "next/server";
import { accessAccounts, accessCustomers, getCustomerAccountSummary } from "../../data/access-account-data";

export async function GET() {
  return NextResponse.json({
    customers: accessCustomers.map(getCustomerAccountSummary),
    accounts: accessAccounts.map(({ encryptedPassword, ...account }) => ({
      ...account,
      hasEncryptedPassword: Boolean(encryptedPassword),
    })),
    note: "API danh sách không trả về mật khẩu. Mật khẩu chỉ được trả qua API xem mật khẩu sau khi kiểm tra quyền.",
  });
}

export async function POST(request) {
  const payload = await request.json();

  return NextResponse.json(
    {
      message: "Đã tạo tài khoản truy cập mẫu. Khi lưu thật, mật khẩu phải được mã hóa phía server.",
      data: { ...payload, encryptedPassword: payload.password ? "Đã mã hóa phía server" : undefined, password: undefined },
    },
    { status: 201 }
  );
}
