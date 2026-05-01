import { NextResponse } from "next/server";
import { addRecord } from "../../_store";

export async function POST(request) {
  const body = await request.json();
  const record = addRecord("featureEvents", {
    nhanVienId: "nv-002",
    sessionId: body.sessionId,
    route: body.route,
    tenTinhNang: body.tenTinhNang,
    loaiSuKien: body.loaiSuKien || "Bấm nút quan trọng",
    doiTuongLienQuan: body.doiTuongLienQuan,
    doiTuongId: body.doiTuongId,
    metadata: body.metadata || {},
  });

  return NextResponse.json({ ok: true, message: "Đã ghi nhận sự kiện tính năng.", data: record });
}
