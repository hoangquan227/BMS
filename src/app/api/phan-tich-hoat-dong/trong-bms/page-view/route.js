import { NextResponse } from "next/server";
import { addRecord } from "../../_store";

export async function POST(request) {
  const body = await request.json();
  const record = addRecord("pageViews", {
    nhanVienId: "nv-002",
    thietBiId: "tb-002",
    sessionId: body.sessionId,
    route: body.route,
    tenManHinh: body.tenManHinh || body.route,
    thoiGianVao: body.thoiGianVao,
    thoiGianRoi: body.thoiGianRoi,
    tongThoiLuong: body.tongThoiLuong,
    soLanTuongTac: body.soLanTuongTac || 0,
    coTaoDuLieu: Boolean(body.coTaoDuLieu),
    coCapNhatDuLieu: Boolean(body.coCapNhatDuLieu),
    coHoanTatThaoTac: Boolean(body.coHoanTatThaoTac),
    coLoiThaoTac: Boolean(body.coLoiThaoTac),
    trinhDuyet: body.trinhDuyet,
  });

  return NextResponse.json({ ok: true, message: "Đã ghi nhận page view trong BMS.", data: record });
}
