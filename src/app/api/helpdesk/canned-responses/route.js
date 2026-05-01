import { NextResponse } from "next/server";

const cannedResponses = [
  {
    id: "xac-nhan-tiep-nhan",
    name: "Xác nhận đã tiếp nhận yêu cầu",
    groupName: "Tiếp nhận",
    content: "Chào {{ten_khach_hang}}, TCKN đã tiếp nhận ticket {{ma_ticket}} và sẽ phản hồi trước {{han_xu_ly}}.",
    variables: ["ten_khach_hang", "ma_ticket", "han_xu_ly"],
    status: "Đang dùng",
  },
  {
    id: "yeu-cau-bo-sung-chung-tu",
    name: "Yêu cầu bổ sung chứng từ",
    groupName: "Chứng từ",
    content: "Anh/chị vui lòng bổ sung chứng từ còn thiếu để bên em xử lý đúng hạn.",
    variables: ["ten_cong_ty", "ten_nhan_vien"],
    status: "Đang dùng",
  },
];

export async function GET() {
  return NextResponse.json({ data: cannedResponses });
}

export async function POST(request) {
  const payload = await request.json();

  return NextResponse.json({ message: "Đã tạo mẫu trả lời nhanh.", data: { id: `mau-${Date.now()}`, ...payload } }, { status: 201 });
}
