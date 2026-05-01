import { NextResponse } from "next/server";
import { addRecord } from "../_store";

export async function POST(request) {
  const body = await request.json();
  const record = addRecord("taskActivities", {
    nhanVienId: "nv-002",
    taskId: body.taskId,
    khachHangId: body.khachHangId,
    thoiGianMoTask: body.thoiGianMoTask,
    thoiGianDongTask: body.thoiGianDongTask,
    tongThoiLuong: body.tongThoiLuong,
    soLanCapNhat: body.soLanCapNhat || 0,
    soComment: body.soComment || 0,
    soFileDinhKem: body.soFileDinhKem || 0,
    coHoanThanhTask: Boolean(body.coHoanThanhTask),
  });

  return NextResponse.json({ ok: true, message: "Đã ghi nhận hoạt động trên công việc.", data: record });
}
