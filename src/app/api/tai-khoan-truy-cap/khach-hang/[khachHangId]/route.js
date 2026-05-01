import { NextResponse } from "next/server";
import { findAccessCustomer, getCustomerAccounts } from "../../../../data/access-account-data";

export async function GET(_request, { params }) {
  const { khachHangId } = await params;
  const customer = findAccessCustomer(khachHangId);
  const accounts = getCustomerAccounts(customer.id).map(({ encryptedPassword, ...account }) => ({
    ...account,
    hasEncryptedPassword: Boolean(encryptedPassword),
  }));

  return NextResponse.json({
    customer,
    accounts,
    note: "Không trả mật khẩu trong API chi tiết khách hàng.",
  });
}
