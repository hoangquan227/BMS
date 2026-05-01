import { NextResponse } from "next/server";
import { accountUpdateLogs } from "../../../../data/access-account-data";

export async function GET(_request, { params }) {
  const { id } = await params;
  return NextResponse.json({
    accountId: id,
    logs: accountUpdateLogs.filter((log) => log.accountId === id),
  });
}
