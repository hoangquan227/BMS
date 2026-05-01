import { NextResponse } from "next/server";
import { passwordViewLogs } from "../../../../data/access-account-data";

export async function GET(_request, { params }) {
  const { id } = await params;
  return NextResponse.json({
    accountId: id,
    logs: passwordViewLogs.filter((log) => log.accountId === id),
  });
}
