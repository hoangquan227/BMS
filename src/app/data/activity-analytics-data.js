export const nhanVienHoatDong = [
  { id: "nv-001", hoTen: "Nguyễn Minh Anh", teamId: "team-ktdn", team: "Kế toán Doanh Nghiệp" },
  { id: "nv-002", hoTen: "Trần Quốc Huy", teamId: "team-ktdn", team: "Kế toán Doanh Nghiệp" },
  { id: "nv-003", hoTen: "Lê Thảo Vy", teamId: "team-ktdn", team: "Kế toán Doanh Nghiệp" },
  { id: "nv-004", hoTen: "Phạm Đức Long", teamId: "team-kthkd", team: "Kế toán Hộ Kinh Doanh" },
  { id: "nv-005", hoTen: "Võ Ngọc Mai", teamId: "team-kthkd", team: "Kế toán Hộ Kinh Doanh" },
  { id: "nv-006", hoTen: "Đặng Thanh Tâm", teamId: "team-kthkd", team: "Kế toán Hộ Kinh Doanh" },
  { id: "nv-007", hoTen: "Bùi Gia Phúc", teamId: "team-plbhxh", team: "Pháp lý & BHXH" },
  { id: "nv-008", hoTen: "Huỳnh Kim Ngân", teamId: "team-plbhxh", team: "Pháp lý & BHXH" },
];

export const thietBiNhanVien = nhanVienHoatDong.map((item, index) => ({
  id: `tb-${index + 1}`,
  nhanVienId: item.id,
  nhanVien: item.hoTen,
  tenThietBi: `Laptop TCKN ${String(index + 1).padStart(2, "0")}`,
  maThietBi: `TCKN-LAP-${String(index + 1).padStart(3, "0")}`,
  heDieuHanh: index % 2 === 0 ? "Windows 11" : "Windows 10",
  loaiThietBi: "Máy tính công ty",
  trangThai: "Đang hoạt động",
  ngayKichHoat: "01/05/2026",
}));

export const tongQuanHoatDong = {
  stats: [
    { label: "Tổng thời gian hoạt động hôm nay", value: "7 giờ 12 phút", status: "Đang hoạt động", note: "Tổng thời gian có thao tác trên thiết bị làm việc." },
    { label: "Thời gian trong BMS", value: "3 giờ 05 phút", status: "Đang hoạt động", note: "Bao gồm page và sự kiện trong BMS." },
    { label: "Thời gian trên ứng dụng công việc", value: "2 giờ 20 phút", status: "Đang hoạt động", note: "Excel, hóa đơn điện tử, BHXH, phần mềm kế toán." },
    { label: "Thời gian trên website công việc", value: "1 giờ 10 phút", status: "Đang hoạt động", note: "Thuế, BHXH, ngân hàng, tra cứu pháp luật." },
    { label: "Thời gian không hoạt động", value: "37 phút", status: "Cần xem lại", note: "Chỉ là tín hiệu để leader xem xét, không kết luận vi phạm." },
    { label: "Ứng dụng dùng nhiều nhất", value: "Trình duyệt BMS", status: "Công việc", note: "Chiếm 34% thời gian hoạt động." },
    { label: "Page BMS dùng nhiều nhất", value: "Việc của tôi", status: "Công việc", note: "Được mở nhiều nhất trong ngày." },
    { label: "Tính năng BMS ít dùng", value: "Tủ hồ sơ", status: "Cần kiểm tra", note: "Có thể cần đào tạo hoặc cải tiến UI." },
    { label: "Nhân viên có dữ liệu bất thường", value: "2", status: "Cần xem lại", note: "Cần leader trao đổi thêm, không tự động phạt." },
    { label: "Team dùng BMS thấp", value: "Pháp lý & BHXH", status: "Cần theo dõi thêm", note: "Có thể do quy trình bên ngoài hệ thống." },
  ],
};

export const ungDungSuDung = [
  ["Nguyễn Minh Anh", "Trình duyệt", "TCKN BMS - Việc của tôi", "Công việc", "08:02", "10:15", "2 giờ 13 phút", "31%", "Đang xử lý task trong BMS"],
  ["Trần Quốc Huy", "Excel", "Bảng đối chiếu chứng từ tháng 05", "Công việc", "09:10", "10:05", "55 phút", "12%", "Liên quan hồ sơ khách hàng"],
  ["Lê Thảo Vy", "Word", "Biên bản bàn giao hồ sơ", "Công việc", "10:20", "10:45", "25 phút", "6%", "Soạn chứng từ nội bộ"],
  ["Phạm Đức Long", "Zalo", "Nhóm hỗ trợ khách TCKN", "Liên lạc", "08:45", "09:15", "30 phút", "7%", "Kênh công việc được quy định"],
  ["Võ Ngọc Mai", "Phần mềm BHXH", "Tra cứu hồ sơ BHXH", "Công việc", "13:05", "14:25", "1 giờ 20 phút", "18%", "Làm việc với hồ sơ BHXH"],
  ["Bùi Gia Phúc", "Ứng dụng không xác định", "Cửa sổ chưa phân loại", "Không xác định", "15:10", "15:35", "25 phút", "5%", "Cần phân loại thêm"],
].map(([nhanVien, ungDung, tenCuaSo, phanLoai, thoiGianBatDau, thoiGianKetThuc, tongThoiLuong, tyLeTrongNgay, ghiChu], index) => ({
  id: `app-${index + 1}`,
  nhanVien,
  ungDung,
  tenCuaSo,
  phanLoai,
  thoiGianBatDau,
  thoiGianKetThuc,
  tongThoiLuong,
  tyLeTrongNgay,
  ghiChu,
}));

export const websiteSuDung = [
  ["Nguyễn Minh Anh", "bms.tckn.vn", "TCKN BMS - Tổng quan", "BMS nội bộ", "08:02", "09:35", "1 giờ 33 phút", "Có", "Theo dõi công việc trong BMS"],
  ["Trần Quốc Huy", "thuedientu.gdt.gov.vn", "Thuế điện tử", "Thuế", "09:20", "10:10", "50 phút", "Có", "Tra cứu hồ sơ thuế"],
  ["Võ Ngọc Mai", "baohiemxahoi.gov.vn", "Cổng BHXH", "BHXH", "13:05", "14:25", "1 giờ 20 phút", "Có", "Làm hồ sơ BHXH"],
  ["Lê Thảo Vy", "drive.google.com", "Drive công ty", "Học tập", "10:45", "11:10", "25 phút", "Có", "Xem tài liệu nội bộ"],
  ["Bùi Gia Phúc", "youtube.com", "Video hướng dẫn nghiệp vụ", "Học tập", "15:40", "16:00", "20 phút", "Có", "Nội dung học tập nghiệp vụ"],
  ["Đặng Thanh Tâm", "website-khong-phan-loai.vn", "Trang chưa phân loại", "Không xác định", "16:05", "16:25", "20 phút", "Cần xem lại", "Chỉ cảnh báo để phân loại thêm"],
].map(([nhanVien, website, tieuDeTab, phanLoai, thoiGianBatDau, thoiGianKetThuc, tongThoiLuong, coLienQuanCongViec, ghiChu], index) => ({
  id: `web-${index + 1}`,
  nhanVien,
  website,
  tieuDeTab,
  phanLoai,
  thoiGianBatDau,
  thoiGianKetThuc,
  tongThoiLuong,
  coLienQuanCongViec,
  ghiChu,
}));

export const bmsTracking = [
  ["Việc của tôi", "/viec-cua-toi", "158 lượt", "2 giờ 20 phút", "Đổi trạng thái công việc", "In giấy chứng nhận", "1 lỗi", "4 lượt", "7 phút", 18, 42, 23],
  ["Tổng quan", "/tong-quan", "132 lượt", "1 giờ 35 phút", "Xem thu nhập tạm tính", "Tủ hồ sơ", "0 lỗi", "2 lượt", "3 phút", 0, 5, 0],
  ["Helpdesk", "/ho-tro-khach", "86 lượt", "58 phút", "Cập nhật yêu cầu hỗ trợ", "Báo cáo sâu", "2 lỗi", "6 lượt", "9 phút", 8, 18, 7],
  ["Chấm công", "/thu-nhap/cham-cong", "72 lượt", "42 phút", "Check-in", "Ghi chú minh chứng", "0 lỗi", "1 lượt", "1 phút", 0, 10, 0],
].map(([tenManHinh, route, pageTruyCapNhieu, thoiGianOLau, tinhNangDungNhieu, tinhNangItDung, loiThaoTac, thoatGiuaChung, thoiGianHoanTat, luotTaoDuLieu, luotCapNhat, luotHoanThanhTask], index) => ({
  id: `bms-${index + 1}`,
  tenManHinh,
  route,
  pageTruyCapNhieu,
  thoiGianOLau,
  tinhNangDungNhieu,
  tinhNangItDung,
  loiThaoTac,
  thoatGiuaChung,
  thoiGianHoanTat,
  luotTaoDuLieu,
  luotCapNhat,
  luotHoanThanhTask,
}));

export const thoiGianTheoCongViec = [
  ["Nguyễn Minh Anh", "Hoàn tất hồ sơ thuế tháng 05", "Công ty Minh Phát", "08:20", "1 giờ 45 phút", "10 phút", 4, 3, 2, "Hoàn thành", "Đã gửi khách kiểm tra"],
  ["Trần Quốc Huy", "Đối chiếu hóa đơn đầu vào", "Công ty An Tâm", "09:15", "1 giờ 10 phút", "8 phút", 3, 1, 1, "Đang làm", "Cần bổ sung chứng từ"],
  ["Võ Ngọc Mai", "Cập nhật hồ sơ BHXH", "Hộ kinh doanh Hoa Sen", "13:05", "1 giờ 20 phút", "15 phút", 2, 2, 3, "Đang làm", "Chờ khách xác nhận"],
  ["Bùi Gia Phúc", "Rà soát pháp lý hợp đồng", "Công ty Nam Việt", "14:00", "55 phút", "5 phút", 2, 1, 0, "Hoàn thành", "Đã lưu minh chứng"],
].map(([nhanVien, task, khachHang, thoiGianMoTask, thoiGianThaoTac, thoiGianKhongHoatDong, soLanCapNhat, soComment, soFileDinhKem, trangThaiTask, ketQuaCuoiCung], index) => ({
  id: `task-act-${index + 1}`,
  nhanVien,
  task,
  khachHang,
  thoiGianMoTask,
  thoiGianThaoTac,
  thoiGianKhongHoatDong,
  soLanCapNhat,
  soComment,
  soFileDinhKem,
  trangThaiTask,
  ketQuaCuoiCung,
}));

export const canhBaoHoatDong = [
  ["Đăng nhập hệ thống nhưng không thao tác lâu", "Trần Quốc Huy", "Kế toán Doanh Nghiệp", "01/05/2026", "Không thao tác 42 phút sau khi mở task", "Cần xem lại", "Chưa có", "Mới"],
  ["Không vào BMS trong ngày làm việc", "Võ Ngọc Mai", "Kế toán Hộ Kinh Doanh", "01/05/2026", "Không có page view BMS từ 08:00 đến 11:30", "Cần xem lại", "Có thể đang làm hồ sơ BHXH bên ngoài", "Đã xem"],
  ["Task mở lâu nhưng không có cập nhật", "Bùi Gia Phúc", "Pháp lý & BHXH", "01/05/2026", "Task mở 2 giờ, không có comment hoặc cập nhật", "Nhẹ", "Leader sẽ hỏi lại trong họp nhanh", "Đã trao đổi"],
  ["Website chưa phân loại chiếm thời gian cao", "Đặng Thanh Tâm", "Kế toán Hộ Kinh Doanh", "01/05/2026", "20 phút ở domain chưa phân loại", "Nhẹ", "Cần phân loại domain trước khi kết luận", "Không phải vấn đề"],
].map(([loaiCanhBao, nhanVien, team, ngay, duLieuGoc, mucDo, ghiChuLeader, trangThaiXuLy], index) => ({
  id: `cbhd-${index + 1}`,
  loaiCanhBao,
  nhanVien,
  team,
  ngay,
  duLieuGoc,
  mucDo,
  ghiChuLeader,
  trangThaiXuLy,
}));

export const baoCaoNhanVienHoatDong = nhanVienHoatDong.map((item, index) => ({
  id: `bcnvhd-${index + 1}`,
  nhanVien: item.hoTen,
  team: item.team,
  tongThoiGianHoatDong: `${6 + (index % 2)} giờ ${10 + index * 3} phút`,
  thoiGianTrongBMS: `${2 + (index % 3)} giờ ${index * 5} phút`,
  thoiGianNgoaiBMS: `${3 + (index % 2)} giờ ${20 + index} phút`,
  topUngDung: index % 2 === 0 ? "Trình duyệt BMS, Excel, Email công ty" : "BHXH, Zalo công việc, Drive công ty",
  topWebsite: "bms.tckn.vn, thuedientu.gdt.gov.vn, drive.google.com",
  pageBmsThuongDung: index % 2 === 0 ? "Việc của tôi" : "Helpdesk",
  taskThaoTacNhieu: "Hồ sơ thuế tháng 05",
  taskItThaoTac: "Cập nhật tủ hồ sơ",
  canhBao: index % 3 === 0 ? "Có cảnh báo nhẹ" : "Không có cảnh báo đáng chú ý",
  ghiChuLeader: "Dữ liệu dùng để trao đổi và cải thiện cách giao việc.",
}));

export const baoCaoTeamHoatDong = [
  ["Kế toán Doanh Nghiệp", "42 giờ 10 phút", "48%", "32%", "14%", "Việc của tôi", "Tủ hồ sơ", "Có", "Một số task trễ ít cập nhật", "Nhắc cập nhật tiến độ trước 16:00"],
  ["Kế toán Hộ Kinh Doanh", "36 giờ 45 phút", "34%", "41%", "18%", "Helpdesk", "Báo cáo thu nhập", "Cần cải thiện", "Thời gian ở website ngoài cao do BHXH", "Phân loại domain BHXH rõ hơn"],
  ["Pháp lý & BHXH", "31 giờ 20 phút", "29%", "45%", "20%", "Công ty", "Tủ hồ sơ", "Cần theo dõi thêm", "Nhiều việc ngoài BMS", "Đưa checklist pháp lý vào BMS"],
].map(([team, tongThoiGianHoatDong, tyLeTrongBMS, tyLeUngDungCongViec, tyLeWebsiteCongViec, tinhNangDungNhieu, tinhNangItDung, capNhatDuLieuDeu, canhBaoVanHanh, deXuatCaiThien], index) => ({
  id: `bcthd-${index + 1}`,
  team,
  tongThoiGianHoatDong,
  tyLeTrongBMS,
  tyLeUngDungCongViec,
  tyLeWebsiteCongViec,
  tinhNangDungNhieu,
  tinhNangItDung,
  capNhatDuLieuDeu,
  canhBaoVanHanh,
  deXuatCaiThien,
}));

export const cauHinhTheoDoiHoatDong = [
  {
    id: "cfg-hd-001",
    tenCauHinh: "Cấu hình minh bạch giai đoạn 1",
    theoDoiUngDung: "Tùy chọn",
    theoDoiWebsite: "Tùy chọn",
    theoDoiTrongBMS: "Bật",
    batCanhBaoBatThuong: "Bật mức nhẹ",
    ungDungCongViec: "Trình duyệt BMS, Excel, Word, hóa đơn điện tử, BHXH, chữ ký số, email công ty, phần mềm kế toán",
    websiteCongViec: "bms.tckn.vn, thuedientu.gdt.gov.vn, baohiemxahoi.gov.vn, ngân hàng, tra cứu pháp luật",
    websiteKhongTheoDoiChiTiet: "Email cá nhân, chat cá nhân, website sức khỏe, website tài chính cá nhân",
    idleThresholdMinutes: 15,
    aiDuocXemBaoCao: "Nhân viên xem của mình, leader xem team, giám đốc/admin xem toàn bộ",
    thoiGianLuuDuLieuNgay: 90,
    choNhanVienXemDuLieu: "Có",
    duaVaoThiDua: "Chỉ tham khảo khi có quy chế và leader xác nhận",
    trangThai: "Đang áp dụng",
  },
];

export const chinhSachDuLieuNoiBo = [
  {
    id: "policy-hd-001",
    tenChinhSach: "Chính sách minh bạch dữ liệu hoạt động làm việc",
    congTyThuThap: "Route BMS, thời gian ở lại page, sự kiện quan trọng, ứng dụng/website công việc nếu thiết bị đã được đồng ý theo dõi.",
    khongThuThap: "Không keylogger, không mật khẩu, không nội dung chat cá nhân, không email cá nhân, không tự động chụp màn hình.",
    mucDich: "Phân tích vận hành, cải thiện quy trình, hỗ trợ phân bổ công việc và nâng cao hiệu quả sử dụng hệ thống.",
    aiDuocXem: "Nhân viên xem dữ liệu của mình, leader xem team mình, giám đốc/admin xem toàn bộ theo phân quyền.",
    thoiGianLuu: "Mặc định 90 ngày hoặc theo cấu hình được thông báo.",
    dungChoThiDua: "Không tự động trừ điểm. Chỉ tham khảo khi có quy chế, leader xác nhận và nhân viên có quyền phản hồi.",
    noiNhanVienXem: "Màn hình Báo cáo theo nhân viên trong module Phân tích hoạt động.",
    cachPhanHoi: "Nhân viên phản hồi trực tiếp với leader hoặc gửi yêu cầu điều chỉnh dữ liệu nếu thấy chưa đúng.",
    trangThai: "Đang áp dụng",
  },
];

export const activityScreens = {
  "tong-quan": {
    title: "Tổng quan hoạt động",
    description: "Xem dữ liệu hoạt động làm việc ở mức vận hành, minh bạch và không dùng để tự động phạt.",
    stats: tongQuanHoatDong.stats,
    rows: bmsTracking,
  },
  "ung-dung": {
    title: "Ứng dụng đã sử dụng",
    description: "Phân tích ứng dụng trên thiết bị làm việc theo phân loại công việc, hỗ trợ công việc, liên lạc hoặc chưa xác định.",
    rows: ungDungSuDung,
  },
  website: {
    title: "Website đã truy cập",
    description: "Ưu tiên lưu domain và tiêu đề tab; chỉ tracking chi tiết với BMS hoặc danh sách đã cho phép.",
    rows: websiteSuDung,
  },
  "trong-bms": {
    title: "Theo dõi trong BMS",
    description: "Phân tích page, tính năng, thời gian ở lại và lỗi thao tác để cải tiến UI/UX và quy trình.",
    rows: bmsTracking,
  },
  "thoi-gian-theo-cong-viec": {
    title: "Thời gian theo công việc",
    description: "Đối chiếu thời gian thao tác với task, không tự động kết luận năng lực chỉ dựa trên thời gian mở task.",
    rows: thoiGianTheoCongViec,
  },
  "canh-bao-bat-thuong": {
    title: "Cảnh báo bất thường",
    description: "Cảnh báo chỉ để leader xem xét và trao đổi, không phải kết luận vi phạm.",
    rows: canhBaoHoatDong,
  },
  "bao-cao-nhan-vien": {
    title: "Báo cáo theo nhân viên",
    description: "Nhân viên được xem dữ liệu của chính mình; leader và admin xem theo phân quyền.",
    rows: baoCaoNhanVienHoatDong,
  },
  "bao-cao-team": {
    title: "Báo cáo theo team",
    description: "Giúp leader thấy team có cập nhật dữ liệu đều không và quy trình nào đang tốn thời gian.",
    rows: baoCaoTeamHoatDong,
  },
  "cau-hinh": {
    title: "Cấu hình theo dõi",
    description: "Cấu hình tracking trong BMS, ứng dụng, website, thời gian lưu dữ liệu và quyền xem báo cáo.",
    rows: cauHinhTheoDoiHoatDong,
  },
  "chinh-sach-du-lieu": {
    title: "Chính sách minh bạch dữ liệu",
    description: "Nói rõ công ty thu thập gì, không thu thập gì, ai được xem và dữ liệu có dùng cho thi đua hay không.",
    rows: chinhSachDuLieuNoiBo,
  },
};
