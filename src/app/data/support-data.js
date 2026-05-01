export const supportTickets = [
  {
    id: "ht-5667496",
    code: "#5667496",
    title: "Server treo khi nộp tờ khai thuế",
    status: "Đã trả lời",
    priority: "Cao",
    createdAt: "19:22 08/04/2026",
    updatedAt: "20:41 09/04/2026",
    company: "CÔNG TY TNHH PHƯƠNG NAM WOOD",
    senderName: "Phạm Hoàng Quân",
    senderEmail: "tonghop@phuongnamwood.vn",
    senderPhone: "0788229191",
    assignedStaff: "Nguyễn Minh",
    assignedTeam: "Kế toán dịch vụ",
    service: "Đăng ký Cloud Server",
    contractPeriod: "1 tháng",
    content: "Nhờ các bạn kiểm tra giúp xem lỗi gì mà server treo hoài khi đang chuẩn bị hồ sơ thuế.",
    attachments: ["Screenshot_20260408_191935_Chrome.jpg", "Screenshot_20260408_192117_Zalo.jpg"],
  },
  {
    id: "ht-3600645",
    code: "#3600645",
    title: "Mất kết nối server khi xuất hóa đơn",
    status: "Đã trả lời",
    priority: "Cao",
    createdAt: "20:52 04/04/2026",
    updatedAt: "21:59 04/04/2026",
    company: "CÔNG TY TNHH THƯƠNG MẠI BEFY VIỆT NAM",
    senderName: "Vân Anh",
    senderEmail: "vananh012009@gmail.com",
    senderPhone: "0937612178",
    assignedStaff: "Trần Hà",
    assignedTeam: "Pháp lý & BHXH",
    service: "Hóa đơn điện tử",
    contractPeriod: "12 tháng",
    content: "Khi xuất hóa đơn thì hệ thống báo mất kết nối, nhờ kiểm tra gấp để kịp gửi khách.",
    attachments: ["hoa-don-loi-ket-noi.png"],
  },
  {
    id: "ht-2324279",
    code: "#2324279",
    title: "Không đăng nhập được tài khoản thuế",
    status: "Đang xử lý",
    priority: "Trung bình",
    createdAt: "20:51 04/04/2026",
    updatedAt: "09:10 05/04/2026",
    company: "DN MỚI KHẢI PHƯƠNG",
    senderName: "Ngô Quang Khải",
    senderEmail: "khaiphuong@gmail.com",
    senderPhone: "0908123456",
    assignedStaff: "Lê Bình",
    assignedTeam: "Kế toán doanh nghiệp",
    service: "Tài khoản thuế điện tử",
    contractPeriod: "Đang sử dụng",
    content: "Tài khoản thuế báo sai mật khẩu, nhờ hỗ trợ kiểm tra và cập nhật lại thông tin đăng nhập.",
    attachments: ["thue-dien-tu-loi-dang-nhap.jpg"],
  },
];

export const supportMessages = [
  {
    author: "Nguyễn Minh",
    role: "Nhân viên xử lý",
    time: "19:41 08/04/2026",
    content: "Em đã tiếp nhận thông tin từ khách và đang kiểm tra dữ liệu liên quan đến server.",
  },
  {
    author: "CloudFly Support",
    role: "Bộ phận kỹ thuật",
    time: "23:07 08/04/2026",
    content:
      "Server đã được kiểm tra và xử lý tình trạng treo. Hiện tại dịch vụ đã hoạt động ổn định trở lại. Nếu còn lỗi phát sinh, vui lòng phản hồi trên ticket này.",
  },
  {
    author: "Phạm Hoàng Quân",
    role: "Người gửi yêu cầu",
    time: "20:25 09/04/2026",
    content: "Khách phản hồi vẫn cần biết nguyên nhân lỗi để giải thích nội bộ.",
  },
  {
    author: "Nguyễn Minh",
    role: "Nhân viên xử lý",
    time: "20:41 09/04/2026",
    content:
      "Em đã ghi nhận yêu cầu giải thích nguyên nhân. Dự kiến phản hồi lại khách trước 10:00 ngày mai sau khi kỹ thuật xác nhận log hệ thống.",
  },
];

export function findSupportTicket(id) {
  return supportTickets.find((ticket) => ticket.id === id) || supportTickets[0];
}
