export const dashboardScreen = {
  title: "Tổng quan",
  description: "Xem nhanh việc hôm nay, việc trễ hạn, hồ sơ thiếu và các khoản tài chính cần xử lý.",
  stats: [
    { label: "Việc hôm nay", value: "12", status: "Đang làm", note: "Ưu tiên xử lý trước 17:00" },
    { label: "Việc trễ hạn", value: "3", status: "Trễ hạn", note: "Cần trưởng nhóm hỗ trợ" },
    { label: "Khách hàng cần chú ý", value: "8", status: "Cần kiểm tra", note: "Có yêu cầu hoặc hồ sơ thiếu" },
    { label: "Chứng từ thiếu", value: "6", status: "Thiếu hồ sơ", note: "Cần nhắc khách bổ sung" },
    { label: "Yêu cầu hỗ trợ chưa xử lý", value: "5", status: "Chờ khách", note: "Đang chờ phản hồi" },
    { label: "Nhân viên chưa chấm công", value: "2", status: "Cần kiểm tra", note: "Kiểm tra trước 09:30" },
    { label: "Đề nghị thanh toán chờ duyệt", value: "4", status: "Chờ duyệt", note: "Cần kế toán trưởng duyệt" },
    { label: "Hóa đơn chưa gửi", value: "7", status: "Cần kiểm tra", note: "Kiểm tra email khách hàng" },
    { label: "Thanh toán quá hạn", value: "3", status: "Quá hạn", note: "Ưu tiên đối soát trong ngày" },
    { label: "Giao dịch chưa đối chiếu", value: "9", status: "Chưa đối chiếu", note: "Cần gắn với khách hàng" },
  ],
  sections: [
    {
      title: "Việc cần xử lý",
      columns: [
        { key: "name", label: "Tên việc" },
        { key: "owner", label: "Người phụ trách" },
        { key: "due", label: "Thời hạn" },
        { key: "status", label: "Trạng thái", type: "status" },
      ],
      rows: [
        { name: "Nộp tờ khai thuế tháng", owner: "Trần Hà", due: "Hôm nay", status: "Đang làm" },
        { name: "Bổ sung chứng từ đầu vào", owner: "Nguyễn Minh", due: "Quá hạn", status: "Trễ hạn" },
      ],
    },
    {
      title: "Tài chính cần chú ý",
      columns: [
        { key: "name", label: "Hạng mục" },
        { key: "owner", label: "Khách hàng" },
        { key: "due", label: "Số tiền" },
        { key: "status", label: "Trạng thái", type: "status" },
      ],
      rows: [
        { name: "Đề nghị thanh toán DNTT-0015", owner: "Công ty An Phát", due: "30.000.000 đ", status: "Chờ duyệt" },
        { name: "Sao kê SK-0098", owner: "Công ty Minh Khang", due: "15.000.000 đ", status: "Chưa đối chiếu" },
      ],
    },
  ],
};

export const listScreens = {
  "khach-tiem-nang": {
    title: "Khách tiềm năng",
    description: "Theo dõi khách tiềm năng, nguồn phát sinh, trạng thái chăm sóc và người phụ trách.",
    action: "Thêm khách tiềm năng",
    columns: [
      { key: "name", label: "Khách tiềm năng" },
      { key: "source", label: "Nguồn khách" },
      { key: "owner", label: "Người phụ trách" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { name: "Hộ kinh doanh Minh Tâm", source: "Giới thiệu", owner: "Nguyễn Minh", status: "Đang làm" },
      { name: "Công ty Đại Nam", source: "Website", owner: "Trần Hà", status: "Chờ khách" },
      { name: "Cửa hàng Phúc Lộc", source: "Gọi đến", owner: "Lê Bình", status: "Cần kiểm tra" },
    ],
  },
  "lien-he": {
    title: "Liên hệ",
    description: "Quản lý người liên hệ, số điện thoại, email và công ty liên quan.",
    action: "Thêm liên hệ",
    columns: [
      { key: "name", label: "Tên người liên hệ" },
      { key: "phone", label: "Số điện thoại" },
      { key: "email", label: "Email" },
      { key: "company", label: "Công ty liên quan" },
    ],
    rows: [
      { name: "Phạm Thu Hương", phone: "0901 234 567", email: "huong@anphat.vn", company: "Công ty An Phát" },
      { name: "Võ Minh Đức", phone: "0918 888 222", email: "duc@dainam.vn", company: "Công ty Đại Nam" },
      { name: "Lâm Gia Bảo", phone: "0987 111 333", email: "bao@minhkhang.vn", company: "Công ty Minh Khang" },
    ],
  },
  "cong-ty": {
    title: "Công ty",
    description: "Danh sách công ty, mã số thuế, dịch vụ đang dùng và trạng thái vận hành.",
    action: "Thêm công ty",
    columns: [
      { key: "name", label: "Công ty/khách hàng" },
      { key: "taxCode", label: "Mã số thuế" },
      { key: "service", label: "Dịch vụ đang dùng" },
      { key: "owner", label: "Nhân viên phụ trách" },
      { key: "fileStatus", label: "Trạng thái hồ sơ", type: "status" },
      { key: "taskStatus", label: "Trạng thái công việc", type: "status" },
      { key: "paymentStatus", label: "Trạng thái thanh toán", type: "status" },
    ],
    rows: [
      { name: "Công ty An Phát", taxCode: "0312345678", service: "Kế toán trọn gói", owner: "Nguyễn Minh", fileStatus: "Đã đủ", taskStatus: "Đang làm", paymentStatus: "Đã thanh toán" },
      { name: "Công ty Đại Nam", taxCode: "0319988776", service: "Thuế và BHXH", owner: "Trần Hà", fileStatus: "Thiếu hồ sơ", taskStatus: "Trễ hạn", paymentStatus: "Quá hạn" },
      { name: "Công ty Minh Khang", taxCode: "0315566778", service: "Báo cáo thuế", owner: "Lê Bình", fileStatus: "Cần kiểm tra", taskStatus: "Chờ khách", paymentStatus: "Thanh toán một phần" },
    ],
  },
  "bao-gia": {
    title: "Báo giá",
    description: "Quản lý báo giá, dịch vụ, giá trị, ngày tạo và trạng thái gửi khách.",
    action: "Tạo báo giá",
    columns: [
      { key: "code", label: "Số báo giá" },
      { key: "customer", label: "Khách hàng" },
      { key: "service", label: "Dịch vụ" },
      { key: "amount", label: "Giá trị" },
      { key: "date", label: "Ngày tạo" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { code: "BG-0008", customer: "Công ty An Phát", service: "Kế toán trọn gói", amount: "18.000.000 đ", date: "02/05/2026", status: "Đã gửi" },
      { code: "BG-0009", customer: "Công ty Đại Nam", service: "BHXH", amount: "8.000.000 đ", date: "03/05/2026", status: "Nháp" },
      { code: "BG-0010", customer: "Cửa hàng Phúc Lộc", service: "Báo cáo thuế", amount: "6.000.000 đ", date: "04/05/2026", status: "Đã chấp nhận" },
    ],
  },
  "hop-dong": {
    title: "Hợp đồng",
    description: "Theo dõi hợp đồng, dịch vụ, thời hạn, giá trị và trạng thái hiệu lực.",
    action: "Tạo hợp đồng",
    columns: [
      { key: "code", label: "Số hợp đồng" },
      { key: "customer", label: "Khách hàng" },
      { key: "service", label: "Dịch vụ" },
      { key: "start", label: "Ngày bắt đầu" },
      { key: "end", label: "Ngày kết thúc" },
      { key: "amount", label: "Giá trị" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { code: "HD-0021", customer: "Công ty An Phát", service: "Kế toán năm", start: "01/01/2026", end: "31/12/2026", amount: "120.000.000 đ", status: "Đang hiệu lực" },
      { code: "HD-0022", customer: "Công ty Đại Nam", service: "BHXH", start: "01/03/2026", end: "31/08/2026", amount: "36.000.000 đ", status: "Tạm ngưng" },
    ],
  },
  "de-nghi-thanh-toan": {
    title: "Đề nghị thanh toán",
    description: "Theo dõi đề nghị thanh toán, số tiền, người tạo, ngày đề nghị và trạng thái duyệt.",
    action: "Tạo đề nghị thanh toán",
    columns: [
      { key: "code", label: "Mã đề nghị" },
      { key: "customer", label: "Khách hàng" },
      { key: "content", label: "Nội dung" },
      { key: "amount", label: "Số tiền" },
      { key: "creator", label: "Người tạo" },
      { key: "date", label: "Ngày đề nghị" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { code: "DNTT-0015", customer: "Công ty An Phát", content: "Phí dịch vụ tháng 5", amount: "30.000.000 đ", creator: "Trần Hà", date: "04/05/2026", status: "Chờ duyệt" },
      { code: "DNTT-0016", customer: "Công ty Đại Nam", content: "Phí BHXH quý", amount: "12.000.000 đ", creator: "Lê Bình", date: "04/05/2026", status: "Quá hạn" },
    ],
  },
  "hoa-don-thue": {
    title: "Hóa đơn thuế",
    description: "Quản lý hóa đơn thuế, giá trị trước thuế, thuế GTGT, tổng thanh toán và trạng thái gửi khách.",
    action: "Tạo hóa đơn",
    columns: [
      { key: "code", label: "Số hóa đơn" },
      { key: "customer", label: "Khách hàng" },
      { key: "date", label: "Ngày lập" },
      { key: "beforeTax", label: "Giá trị trước thuế" },
      { key: "vat", label: "Thuế GTGT" },
      { key: "total", label: "Tổng thanh toán" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { code: "HDTHUE-0042", customer: "Công ty An Phát", date: "04/05/2026", beforeTax: "27.272.727 đ", vat: "2.727.273 đ", total: "30.000.000 đ", status: "Đã gửi" },
      { code: "HDTHUE-0043", customer: "Công ty Đại Nam", date: "05/05/2026", beforeTax: "10.909.091 đ", vat: "1.090.909 đ", total: "12.000.000 đ", status: "Đã phát hành" },
    ],
  },
  "thanh-toan-khach-hang": {
    title: "Thanh toán khách hàng",
    description: "Ghi nhận khoản thanh toán, phương thức thanh toán, hóa đơn liên quan và trạng thái đối soát.",
    action: "Ghi nhận thanh toán",
    columns: [
      { key: "code", label: "Mã thanh toán" },
      { key: "customer", label: "Khách hàng" },
      { key: "amount", label: "Số tiền" },
      { key: "method", label: "Phương thức thanh toán" },
      { key: "date", label: "Ngày thanh toán" },
      { key: "invoice", label: "Hóa đơn liên quan" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { code: "TT-0031", customer: "Công ty An Phát", amount: "30.000.000 đ", method: "Chuyển khoản", date: "05/05/2026", invoice: "HDTHUE-0042", status: "Đã ghi nhận" },
      { code: "TT-0032", customer: "Công ty Đại Nam", amount: "6.000.000 đ", method: "Chuyển khoản", date: "05/05/2026", invoice: "HDTHUE-0043", status: "Cần đối chiếu" },
    ],
  },
  "sao-ke-giao-dich": {
    title: "Sao kê giao dịch",
    description: "Đối chiếu giao dịch ngân hàng, số tiền vào ra, số dư và khách hàng liên quan.",
    action: "Nhập sao kê",
    columns: [
      { key: "date", label: "Ngày giao dịch" },
      { key: "content", label: "Nội dung giao dịch" },
      { key: "in", label: "Số tiền vào" },
      { key: "out", label: "Số tiền ra" },
      { key: "balance", label: "Số dư" },
      { key: "customer", label: "Khách hàng liên quan" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { date: "05/05/2026", content: "AN PHAT thanh toan phi dich vu", in: "30.000.000 đ", out: "0 đ", balance: "530.000.000 đ", customer: "Công ty An Phát", status: "Đã đối chiếu" },
      { date: "05/05/2026", content: "CK KHONG RO NOI DUNG", in: "8.000.000 đ", out: "0 đ", balance: "538.000.000 đ", customer: "Chưa xác định", status: "Cần kiểm tra" },
    ],
  },
};

export const opportunityScreen = {
  title: "Cơ hội",
  description: "Theo dõi pipeline cơ hội từ lúc mới phát sinh đến khi thành công hoặc không thành công.",
  columns: [
    {
      title: "Mới",
      items: [
        { name: "Tư vấn kế toán trọn gói", customer: "Hộ kinh doanh Minh Tâm", value: "12.000.000 đ", status: "Đang làm" },
      ],
    },
    {
      title: "Đang tư vấn",
      items: [
        { name: "Dịch vụ BHXH", customer: "Công ty Đại Nam", value: "8.000.000 đ", status: "Chờ khách" },
      ],
    },
    {
      title: "Đã báo giá",
      items: [
        { name: "Báo cáo thuế quý", customer: "Công ty Minh Khang", value: "6.000.000 đ", status: "Đã gửi" },
      ],
    },
    {
      title: "Chờ chốt",
      items: [
        { name: "Gói pháp lý doanh nghiệp", customer: "Cửa hàng Phúc Lộc", value: "15.000.000 đ", status: "Cần kiểm tra" },
      ],
    },
    {
      title: "Thành công",
      items: [
        { name: "Kế toán năm 2026", customer: "Công ty An Phát", value: "120.000.000 đ", status: "Hoàn thành" },
      ],
    },
    {
      title: "Không thành công",
      items: [
        { name: "Tư vấn thành lập mới", customer: "Công ty Sao Mai", value: "5.000.000 đ", status: "Đã từ chối" },
      ],
    },
  ],
};

export const taskScreens = {
  "viec-cua-toi": {
    title: "Việc của tôi",
    description: "Theo dõi việc hôm nay, việc trễ hạn, việc chờ khách và việc đã hoàn thành.",
    columns: [
      { key: "name", label: "Tên việc" },
      { key: "customer", label: "Khách hàng" },
      { key: "due", label: "Thời hạn" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { name: "Việc hôm nay: Nộp tờ khai thuế", customer: "Công ty An Phát", due: "Hôm nay", status: "Đang làm" },
      { name: "Việc trễ hạn: Bổ sung chứng từ", customer: "Công ty Đại Nam", due: "Quá hạn", status: "Trễ hạn" },
      { name: "Việc chờ khách: Xác nhận số liệu", customer: "Công ty Minh Khang", due: "Tuần này", status: "Chờ khách" },
      { name: "Việc đã hoàn thành: Gửi báo cáo tháng", customer: "Cửa hàng Phúc Lộc", due: "Hôm qua", status: "Hoàn thành" },
    ],
  },
  "tat-ca-cong-viec": {
    title: "Tất cả công việc",
    description: "Lọc và theo dõi toàn bộ công việc theo khách hàng, nhân viên và trạng thái.",
    filters: [
      { label: "Lọc theo khách hàng", placeholder: "Nhập tên khách hàng", helperText: "Ví dụ: Công ty An Phát" },
      { label: "Lọc theo nhân viên", placeholder: "Nhập tên nhân viên", helperText: "Ví dụ: Nguyễn Minh" },
      { label: "Lọc theo trạng thái", placeholder: "Nhập trạng thái", helperText: "Ví dụ: Trễ hạn" },
    ],
    columns: [
      { key: "name", label: "Tên việc" },
      { key: "customer", label: "Khách hàng" },
      { key: "owner", label: "Nhân viên" },
      { key: "due", label: "Thời hạn" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { name: "Đối chiếu sao kê", customer: "Công ty An Phát", owner: "Lê Bình", due: "Hôm nay", status: "Đang làm" },
      { name: "Nhắc khách bổ sung hóa đơn", customer: "Công ty Đại Nam", owner: "Trần Hà", due: "Quá hạn", status: "Trễ hạn" },
      { name: "Duyệt đề nghị thanh toán", customer: "Công ty Minh Khang", owner: "Nguyễn Minh", due: "Ngày mai", status: "Chờ duyệt" },
    ],
  },
};

export const otherScreens = {
  "tu-ho-so": {
    title: "Tủ hồ sơ",
    description: "Kiểm soát hồ sơ theo nhóm pháp lý, sổ sách, chứng từ, thuế và BHXH.",
    columns: [
      { key: "group", label: "Nhóm hồ sơ" },
      { key: "customer", label: "Khách hàng" },
      { key: "owner", label: "Phụ trách" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { group: "Pháp lý", customer: "Công ty An Phát", owner: "Nguyễn Minh", status: "Đã đủ" },
      { group: "Sổ sách", customer: "Công ty Đại Nam", owner: "Trần Hà", status: "Thiếu hồ sơ" },
      { group: "Chứng từ", customer: "Công ty Minh Khang", owner: "Lê Bình", status: "Cần kiểm tra" },
      { group: "Thuế", customer: "Cửa hàng Phúc Lộc", owner: "Nguyễn Minh", status: "Hoàn thành" },
      { group: "BHXH", customer: "Công ty Đại Nam", owner: "Trần Hà", status: "Đã đủ" },
    ],
  },
  "chung-tu": {
    title: "Chứng từ",
    description: "Theo dõi inbox chứng từ, chứng từ theo khách hàng, theo kỳ và trạng thái xử lý.",
    columns: [
      { key: "name", label: "Inbox chứng từ" },
      { key: "customer", label: "Khách hàng" },
      { key: "period", label: "Kỳ" },
      { key: "status", label: "Trạng thái xử lý", type: "status" },
    ],
    rows: [
      { name: "Hóa đơn đầu vào", customer: "Công ty An Phát", period: "Tháng 05/2026", status: "Đang làm" },
      { name: "Phiếu chi", customer: "Công ty Đại Nam", period: "Tháng 05/2026", status: "Thiếu hồ sơ" },
      { name: "Sao kê ngân hàng", customer: "Công ty Minh Khang", period: "Quý 2/2026", status: "Cần kiểm tra" },
    ],
  },
  "ho-tro-khach": {
    title: "Hỗ trợ khách",
    description: "Theo dõi yêu cầu hỗ trợ, khách hàng liên quan, người xử lý và thời hạn xử lý.",
    columns: [
      { key: "request", label: "Yêu cầu hỗ trợ" },
      { key: "customer", label: "Khách hàng liên quan" },
      { key: "owner", label: "Người xử lý" },
      { key: "due", label: "Thời hạn xử lý" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { request: "Không tải được chứng từ", customer: "Công ty An Phát", owner: "Lê Bình", due: "Hôm nay", status: "Đang làm" },
      { request: "Cần đổi người nhận hóa đơn", customer: "Công ty Đại Nam", owner: "Trần Hà", due: "Ngày mai", status: "Chờ khách" },
    ],
  },
  "nhan-su": {
    title: "Nhân sự",
    description: "Theo dõi nhân viên, trạng thái chấm công, số việc đang làm, việc trễ và tỷ lệ hoàn thành MIT.",
    columns: [
      { key: "name", label: "Nhân viên" },
      { key: "timekeeping", label: "Trạng thái chấm công", type: "status" },
      { key: "doing", label: "Số việc đang làm" },
      { key: "late", label: "Số việc trễ" },
      { key: "mit", label: "Tỷ lệ hoàn thành MIT" },
    ],
    rows: [
      { name: "Nguyễn Minh", timekeeping: "Đã đủ", doing: "8", late: "0", mit: "100%" },
      { name: "Trần Hà", timekeeping: "Cần kiểm tra", doing: "10", late: "2", mit: "67%" },
      { name: "Lê Bình", timekeeping: "Đã đủ", doing: "6", late: "1", mit: "100%" },
    ],
  },
  "bao-cao": {
    title: "Báo cáo",
    description: "Tổng hợp báo cáo công việc, khách hàng, chứng từ, nhân sự và tài chính khách hàng.",
    columns: [
      { key: "name", label: "Tên báo cáo" },
      { key: "owner", label: "Người xem chính" },
      { key: "cycle", label: "Chu kỳ" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { name: "Báo cáo công việc", owner: "Giám đốc", cycle: "Hằng ngày", status: "Đã đủ" },
      { name: "Báo cáo khách hàng", owner: "Kinh doanh", cycle: "Hằng tuần", status: "Đang làm" },
      { name: "Báo cáo chứng từ", owner: "Kế toán trưởng", cycle: "Hằng tháng", status: "Cần kiểm tra" },
      { name: "Báo cáo đề nghị thanh toán", owner: "Kế toán trưởng", cycle: "Hằng tuần", status: "Chờ duyệt" },
      { name: "Báo cáo hóa đơn thuế", owner: "Kế toán thuế", cycle: "Hằng tháng", status: "Đã gửi hóa đơn" },
      { name: "Báo cáo thanh toán khách hàng", owner: "Kế toán công nợ", cycle: "Hằng tuần", status: "Đã thanh toán" },
      { name: "Báo cáo sao kê giao dịch", owner: "Kế toán công nợ", cycle: "Hằng ngày", status: "Chưa đối chiếu" },
    ],
  },
  "cai-dat": {
    title: "Cài đặt",
    description: "Thiết lập phân quyền, vai trò, dịch vụ, mẫu công việc và các trạng thái vận hành.",
    columns: [
      { key: "name", label: "Nhóm cấu hình" },
      { key: "description", label: "Mô tả" },
      { key: "owner", label: "Phụ trách" },
      { key: "status", label: "Trạng thái", type: "status" },
    ],
    rows: [
      { name: "Phân quyền", description: "Quyền xem, thêm, sửa, duyệt dữ liệu", owner: "Quản trị hệ thống", status: "Đã đủ" },
      { name: "Vai trò", description: "Kế toán, pháp lý, BHXH, hỗ trợ khách", owner: "Quản trị hệ thống", status: "Đã đủ" },
      { name: "Cấu hình dịch vụ", description: "Dịch vụ kế toán, thuế, BHXH, pháp lý", owner: "Giám đốc", status: "Cần kiểm tra" },
      { name: "Cấu hình mẫu công việc", description: "Mẫu việc theo từng nghiệp vụ", owner: "Trưởng nhóm", status: "Đang làm" },
      { name: "Cấu hình trạng thái thanh toán", description: "Chờ duyệt, đã duyệt, quá hạn", owner: "Kế toán trưởng", status: "Đã đủ" },
      { name: "Cấu hình trạng thái hóa đơn", description: "Nháp, đã phát hành, đã gửi, đã hủy", owner: "Kế toán thuế", status: "Đã đủ" },
      { name: "Cấu hình trạng thái sao kê", description: "Chưa đối chiếu, đã đối chiếu, cần kiểm tra", owner: "Kế toán công nợ", status: "Đã đủ" },
    ],
  },
};
