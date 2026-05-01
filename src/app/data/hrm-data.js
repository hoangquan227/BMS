import { tinhDiemKetQuaCongViec, tinhDiemThiDua, tinhLuongKetQua, tinhThuNhapTamTinh, xepLoaiTheoDiem } from "../lib/hrm-scoring";

export const teams = [
  { id: "team-ktdn", tenTeam: "Kế toán Doanh Nghiệp" },
  { id: "team-kthkd", tenTeam: "Kế toán Hộ Kinh Doanh" },
  { id: "team-plbhxh", tenTeam: "Pháp lý & BHXH" },
];

export const nhanVien = [
  { id: "nv-001", hoTen: "Nguyễn Minh Anh", teamId: "team-ktdn", team: "Kế toán Doanh Nghiệp", chucDanh: "Trưởng nhóm kế toán" },
  { id: "nv-002", hoTen: "Trần Quốc Huy", teamId: "team-ktdn", team: "Kế toán Doanh Nghiệp", chucDanh: "Kế toán dịch vụ" },
  { id: "nv-003", hoTen: "Lê Thảo Vy", teamId: "team-ktdn", team: "Kế toán Doanh Nghiệp", chucDanh: "Kế toán tổng hợp" },
  { id: "nv-004", hoTen: "Phạm Đức Long", teamId: "team-kthkd", team: "Kế toán Hộ Kinh Doanh", chucDanh: "Trưởng nhóm hộ kinh doanh" },
  { id: "nv-005", hoTen: "Võ Ngọc Mai", teamId: "team-kthkd", team: "Kế toán Hộ Kinh Doanh", chucDanh: "Nhân viên hồ sơ" },
  { id: "nv-006", hoTen: "Đặng Thanh Tâm", teamId: "team-kthkd", team: "Kế toán Hộ Kinh Doanh", chucDanh: "Kế toán thuế" },
  { id: "nv-007", hoTen: "Bùi Gia Phúc", teamId: "team-plbhxh", team: "Pháp lý & BHXH", chucDanh: "Chuyên viên pháp lý" },
  { id: "nv-008", hoTen: "Huỳnh Kim Ngân", teamId: "team-plbhxh", team: "Pháp lý & BHXH", chucDanh: "Chuyên viên BHXH" },
  { id: "nv-009", hoTen: "Mai Hoàng Nam", teamId: "team-plbhxh", team: "Pháp lý & BHXH", chucDanh: "Hỗ trợ khách hàng" },
  { id: "nv-010", hoTen: "Đỗ An Nhiên", teamId: "team-ktdn", team: "Kế toán Doanh Nghiệp", chucDanh: "Nhân viên tập sự" },
];

export const tamNhin = [
  {
    id: "tn-001",
    noiDung: "Trở thành công ty kế toán dịch vụ chính trực, dễ hiểu và đáng tin cậy cho doanh nghiệp nhỏ.",
    phienBan: "2026.01",
    ngayHieuLuc: "01/05/2026",
    nguoiCapNhat: "Giám đốc",
    trangThai: "Đang áp dụng",
    ghiChu: "Tầm nhìn được viết ngắn để mọi nhân viên hiểu mình đang cùng đi về đâu.",
  },
];

export const suMenh = [
  {
    id: "sm-001",
    noiDung: "Giúp khách hàng yên tâm về kế toán, thuế, pháp lý và BHXH bằng cách làm đúng, nói rõ, theo tới cùng.",
    yNghiaKhachHang: "Khách hàng hiểu việc đang xử lý, cần bổ sung gì và rủi ro nằm ở đâu.",
    yNghiaNhanVien: "Nhân viên có nghề vững hơn, thu nhập tốt hơn và được ghi nhận công bằng.",
    yNghiaXaHoi: "Góp phần làm nghề kế toán dịch vụ minh bạch, đúng chuẩn mực.",
    phienBan: "2026.01",
    trangThai: "Đang áp dụng",
  },
];

export const giaTriConNguoiTckn = [
  ["Chân thành", "Nói thật, làm thật, báo đúng tình trạng công việc.", "Chủ động báo lỗi, không giấu vấn đề, trao đổi tử tế.", "Che lỗi, báo xong khi chưa xong, hứa ngoài phạm vi.", "Báo sớm hồ sơ thiếu trước hạn nộp."],
  ["Chính trực", "Làm đúng quy định, giữ chuẩn mực nghề nghiệp.", "Từ chối yêu cầu sai, báo rủi ro kịp thời.", "Làm chứng từ không có thật, tự ý sửa số liệu.", "Nhắc khách bổ sung chứng từ hợp lệ."],
  ["Học tập suốt đời", "Chủ động học quy định mới và áp dụng vào hồ sơ thật.", "Tham gia đào tạo, đặt câu hỏi khi chưa chắc.", "Làm theo thói quen cũ, lặp lại lỗi cũ.", "Ghi chú điểm mới sau buổi đào tạo thuế."],
  ["Follow tới cùng", "Theo việc đến khi có kết quả cuối cùng.", "Nhắc việc đúng lúc, cập nhật trạng thái rõ.", "Bỏ quên task, để hồ sơ trễ mà không báo.", "Theo hồ sơ BHXH đến khi có kết quả."],
  ["Push bằng mọi cách hợp pháp", "Tìm cách xử lý trong phạm vi hợp pháp và đúng chuẩn mực.", "Hỏi người có chuyên môn, tìm căn cứ pháp lý.", "Làm liều, chọn cách nhanh nhưng sai.", "Đề xuất phương án thay thế khi khách thiếu hồ sơ."],
  ["Không tự ái", "Tiếp nhận góp ý, sửa lỗi và không phòng thủ.", "Ghi nhận góp ý, hỏi lại để hiểu đúng vấn đề.", "Cãi ngang, đổ lỗi, bị nhắc nhiều lần không sửa.", "Sửa checklist sau khi được góp ý."],
  ["Tôn trọng thời gian", "Đúng giờ, đúng hạn, phản hồi rõ ràng.", "Check-in đúng quy định, báo sớm nếu nguy cơ trễ.", "Trễ hạn không báo, để tin nhắn quan trọng quá lâu.", "Báo trước khi không kịp gửi báo cáo."],
  ["Tôn trọng nghề nghiệp", "Làm nghề có chuẩn mực, giữ uy tín công ty và nghề.", "Kiểm tra hồ sơ kỹ, bảo mật thông tin khách hàng.", "Làm ẩu, tiết lộ thông tin sai thẩm quyền.", "Kiểm tra chéo trước khi gửi hồ sơ quan trọng."],
].map(([tenGiaTri, moTa, hanhViNenCo, hanhViCanTranh, viDuThucTe], index) => ({
  id: `gt-${index + 1}`,
  tenGiaTri,
  moTa,
  hanhViNenCo,
  hanhViCanTranh,
  viDuThucTe,
  duaVaoThiDua: "Có",
  diemToiDa: 10,
  trangThai: "Đang áp dụng",
}));

export const mucTieuNam = [
  ["Tăng doanh thu dịch vụ định kỳ bền vững", "Công ty cần dòng tiền ổn định để tăng thu nhập đội ngũ.", "Tài chính", "Doanh thu định kỳ", "Tăng 25% so với năm trước", "Nguyễn Minh Anh", "Toàn công ty", "31/12/2026", 42, "Đang làm"],
  ["Giữ khách hàng tốt bằng phục vụ rõ ràng", "Khách hàng nhỏ cần dễ hiểu và được phản hồi đúng hạn.", "Khách hàng", "Tỷ lệ khách duy trì", "Duy trì trên 92%", "Mai Hoàng Nam", "Hỗ trợ khách hàng", "31/12/2026", 55, "Đang làm"],
  ["Chuẩn hóa quy trình hồ sơ thuế và BHXH", "Giảm lỗi làm lại và giúp người mới vào nghề làm được.", "Quy trình nội bộ", "Tỷ lệ hồ sơ đúng hạn", "Đạt 95% hồ sơ đúng hạn", "Bùi Gia Phúc", "Pháp lý & BHXH", "31/12/2026", 38, "Có rủi ro"],
].map(([tenMucTieu, lyDoChon, nhomMucTieu, chiSoDo, ketQuaMongMuon, nguoiPhuTrach, teamLienQuan, thoiHan, tienDo, trangThai], index) => ({
  id: `mtn-${index + 1}`,
  tenMucTieu,
  lyDoChon,
  nhomMucTieu,
  chiSoDo,
  ketQuaMongMuon,
  nguoiPhuTrach,
  teamLienQuan,
  thoiHan,
  tienDo: `${tienDo}%`,
  trangThai,
}));

export const mucTieuQuy = Array.from({ length: 6 }, (_, index) => ({
  id: `mtq-${index + 1}`,
  mucTieuNamLienQuan: mucTieuNam[index % mucTieuNam.length].tenMucTieu,
  tenMucTieuQuy: `Mục tiêu quý ${index + 1}: ${index % 2 === 0 ? "giảm lỗi hồ sơ" : "tăng phản hồi đúng hạn"}`,
  ketQuaCanDat: index % 2 === 0 ? "Giảm 20% hồ sơ phải làm lại." : "90% ticket phản hồi trong ngày.",
  nguoiPhuTrach: nhanVien[index % nhanVien.length].hoTen,
  teamLienQuan: nhanVien[index % nhanVien.length].team,
  viecTrongTam: "Chuẩn hóa checklist, theo dõi việc trễ, họp rút kinh nghiệm hằng tuần.",
  tienDo: `${35 + index * 8}%`,
  trangThai: index === 3 ? "Có rủi ro" : "Đang làm",
  ghiChuRuiRo: index === 3 ? "Thiếu dữ liệu từ khách trong tuần cuối tháng." : "Đang trong khả năng kiểm soát.",
}));

export const mucTieuThang = Array.from({ length: 10 }, (_, index) => ({
  id: `mtt-${index + 1}`,
  mucTieuQuyLienQuan: mucTieuQuy[index % mucTieuQuy.length].tenMucTieuQuy,
  tenMucTieuThang: `Mục tiêu tháng ${index + 1}`,
  ketQuaCanDat: index % 2 === 0 ? "Hoàn thành hồ sơ đúng hạn và có minh chứng." : "Giảm ticket mở lại trong nhóm khách được giao.",
  viecTrongTam: "Theo dõi việc quan trọng, nhắc khách bổ sung hồ sơ, cập nhật trạng thái mỗi ngày.",
  nguoiPhuTrach: nhanVien[index % nhanVien.length].hoTen,
  teamLienQuan: nhanVien[index % nhanVien.length].team,
  tienDo: `${30 + index * 6}%`,
  trangThai: index % 5 === 0 ? "Có rủi ro" : "Đang làm",
}));

export const viecTrongTam = Array.from({ length: 20 }, (_, index) => ({
  id: `vtt-${index + 1}`,
  mucTieuNamLienQuan: mucTieuNam[index % mucTieuNam.length].tenMucTieu,
  mucTieuQuyLienQuan: mucTieuQuy[index % mucTieuQuy.length].tenMucTieuQuy,
  mucTieuThangLienQuan: mucTieuThang[index % mucTieuThang.length].tenMucTieuThang,
  tenViecTrongTam: index % 2 === 0 ? "Hoàn tất bộ hồ sơ thuế tháng cho khách trọng điểm" : "Chuẩn hóa phản hồi Helpdesk cho khách mới",
  nguoiPhuTrach: nhanVien[index % nhanVien.length].hoTen,
  teamLienQuan: nhanVien[index % nhanVien.length].team,
  khachHangLienQuan: index % 3 === 0 ? "Công ty Minh Phát" : "Không bắt buộc",
  congViecBmsLienKet: `CV-${String(index + 1).padStart(3, "0")}`,
  thoiHan: `${String((index % 25) + 3).padStart(2, "0")}/05/2026`,
  mucQuanTrong: index % 4 === 0 ? "Rất quan trọng" : index % 3 === 0 ? "Quan trọng" : "Bình thường",
  tienDo: `${20 + (index % 8) * 10}%`,
  trangThai: index % 6 === 0 ? "Có rủi ro" : "Đang làm",
}));

export const ketQuaMucTieu = mucTieuThang.slice(0, 8).map((item, index) => ({
  id: `kqmt-${index + 1}`,
  mucTieu: item.tenMucTieuThang,
  ketQuaDaDat: index % 2 === 0 ? "Đã hoàn thành phần hồ sơ đúng hạn." : "Đã giảm số ticket bị mở lại.",
  ketQuaChuaDat: index % 3 === 0 ? "Chưa đủ minh chứng cho một số khách." : "Không có điểm lớn chưa đạt.",
  lyDoChuaDat: index % 3 === 0 ? "Khách gửi chứng từ muộn và nhân viên chưa báo sớm." : "Đang đạt tiến độ.",
  nguoiPhuTrach: item.nguoiPhuTrach,
  teamLienQuan: item.teamLienQuan,
  baiHocRutRa: "Cần báo sớm hơn khi dữ liệu khách thiếu.",
  hanhDongTiepTheo: "Cập nhật checklist và lịch nhắc khách.",
  anhHuongThiDua: index % 2 === 0 ? "Có" : "Không",
}));

export const congViecBmsMau = Array.from({ length: 50 }, (_, index) => ({
  id: `cv-${index + 1}`,
  nhanVienId: nhanVien[index % nhanVien.length].id,
  nhanVien: nhanVien[index % nhanVien.length].hoTen,
  team: nhanVien[index % nhanVien.length].team,
  tenViec: index % 2 === 0 ? "Kiểm tra chứng từ đầu vào" : "Gửi báo cáo tình trạng hồ sơ",
  trangThai: index % 5 === 0 ? "Trễ hạn" : index % 3 === 0 ? "Đang làm" : "Hoàn thành",
  dungHan: index % 5 !== 0,
  lamLai: index % 11 === 0,
  tongGioThucTe: 1 + (index % 6),
  ganMucTieu: index % 4 === 0 ? "Có" : "Không",
}));

export const ketQuaCongViec = nhanVien.map((nv, index) => {
  const tongViec = 18 + index;
  const viecHoanThanh = 12 + (index % 7);
  const viecDungHan = 10 + (index % 8);
  const viecLamLai = index % 4;
  const tyLeHoanThanh = Math.round((viecHoanThanh / tongViec) * 100);
  const tyLeDungHan = Math.round((viecDungHan / tongViec) * 100);
  const tyLeLamLai = Math.round((viecLamLai / tongViec) * 100);
  const diemKetQuaCongViec = tinhDiemKetQuaCongViec({ tyLeHoanThanh, tyLeDungHan, tyLeLamLai });

  return {
    id: `kqcv-${index + 1}`,
    nhanVienId: nv.id,
    nhanVien: nv.hoTen,
    teamId: nv.teamId,
    team: nv.team,
    tongViec,
    viecHoanThanh,
    viecDungHan,
    viecTreHan: tongViec - viecDungHan,
    viecLamLai,
    tongGioThucTe: 82 + index * 3,
    tienDoCongViec: `${tyLeHoanThanh}%`,
    viecGanMucTieu: 3 + (index % 5),
    diemKetQuaCongViec,
    trangThai: "Đã xác nhận",
  };
});

export const ticketHelpdesk = Array.from({ length: 30 }, (_, index) => ({
  id: `ticket-${index + 1}`,
  nhanVienId: nhanVien[index % nhanVien.length].id,
  nhanVien: nhanVien[index % nhanVien.length].hoTen,
  team: nhanVien[index % nhanVien.length].team,
  noiDung: index % 2 === 0 ? "Khách hỏi tình trạng hồ sơ thuế" : "Khách cần bổ sung thông tin BHXH",
  dungHan: index % 4 !== 0,
  phanHoiDauTien: index % 3 === 0 ? "45 phút" : "2 giờ",
  biMoLai: index % 7 === 0 ? "Có" : "Không",
  haiLong: index % 6 === 0 ? "Chưa hài lòng" : "Hài lòng",
  nguyenNhan: index % 6 === 0 ? "Do khách thiếu dữ liệu" : "Do nhân viên",
  leaderDuyet: index % 6 === 0 ? "Chờ duyệt" : "Đã duyệt",
}));

export const danhGiaHelpdesk = nhanVien.map((nv, index) => ({
  id: `hd-${index + 1}`,
  nhanVienId: nv.id,
  nhanVien: nv.hoTen,
  teamId: nv.teamId,
  team: nv.team,
  ticketDungHan: `${82 + (index % 8)}%`,
  phanHoiDauTien: index % 2 === 0 ? "1 giờ 20 phút" : "2 giờ 05 phút",
  ticketBiMoLai: `${3 + (index % 5)}%`,
  diemHaiLongKhachHang: 82 + (index % 12),
  nguyenNhanTieuCuc: index % 4 === 0 ? "Do khách thiếu dữ liệu" : "Do nhân viên",
  diemHelpdesk: index % 4 === 0 ? 88 : 78 + (index % 15),
  trangThai: index % 4 === 0 ? "Chờ duyệt" : "Đã duyệt",
}));

export const ghiNhanDongGop = Array.from({ length: 20 }, (_, index) => {
  const nv = nhanVien[index % nhanVien.length];
  return {
    id: `gndg-${index + 1}`,
    nhanVienId: nv.id,
    nhanVien: nv.hoTen,
    teamId: nv.teamId,
    team: nv.team,
    nguoiGhiNhan: index % 2 === 0 ? "Leader trực tiếp" : "Đồng đội",
    ngayGhiNhan: `${String((index % 25) + 1).padStart(2, "0")}/05/2026`,
    loaiGhiNhan: ["Hỗ trợ đồng đội", "Xử lý việc khó", "Được khách khen", "Phát hiện rủi ro", "Đề xuất cải tiến", "Sống đúng giá trị TCKN"][index % 6],
    noiDungNganGon: "Có hành động rõ ràng giúp công việc của team tốt hơn.",
    minhChung: index % 3 === 0 ? "Có minh chứng" : "Không bắt buộc",
    diemDeXuat: 2 + (index % 5),
    leaderDuyet: index % 4 === 0 ? "Chờ duyệt" : "Đã duyệt",
    diemDuocDuyet: index % 4 === 0 ? 0 : 2 + (index % 5),
  };
});

export const diemCanCaiThien = Array.from({ length: 10 }, (_, index) => {
  const nv = nhanVien[index % nhanVien.length];
  return {
    id: `dcct-${index + 1}`,
    nhanVienId: nv.id,
    nhanVien: nv.hoTen,
    teamId: nv.teamId,
    team: nv.team,
    noiDungCanCaiThien: index % 2 === 0 ? "Cần cập nhật tiến độ đúng hạn hơn." : "Cần bổ sung minh chứng khi hoàn thành việc.",
    nguyenNhan: index % 2 === 0 ? "Khối lượng việc cao vào cuối tháng." : "Chưa quen checklist mới.",
    mucAnhHuong: index % 3 === 0 ? "Cao" : index % 2 === 0 ? "Trung bình" : "Nhẹ",
    huongKhacPhuc: "Leader hỗ trợ rà lại cách làm và theo dõi trong tuần.",
    thoiHanCaiThien: `${String((index % 20) + 8).padStart(2, "0")}/05/2026`,
    nguoiHoTro: nhanVien[(index + 1) % nhanVien.length].hoTen,
    trangThai: ["Mới ghi nhận", "Đang cải thiện", "Đã cải thiện", "Cần theo dõi thêm"][index % 4],
    leaderDuyet: index % 3 === 0 ? "Chờ duyệt" : "Đã duyệt",
  };
});

export const phieuThiDua = nhanVien.map((nv, index) => {
  const diemKetQuaCongViec = ketQuaCongViec[index].diemKetQuaCongViec;
  const diemHelpdesk = danhGiaHelpdesk[index].diemHelpdesk;
  const diemGiaTriConNguoi = 76 + (index % 18);
  const diemChamCong = 80 + (index % 15);
  const diemDongGop = Math.min(100, 70 + ghiNhanDongGop.filter((item) => item.nhanVienId === nv.id && item.leaderDuyet === "Đã duyệt").reduce((sum, item) => sum + item.diemDuocDuyet, 0));
  const diemCuoiCung = tinhDiemThiDua({ diemKetQuaCongViec, diemHelpdesk, diemGiaTriConNguoi, diemChamCong, diemDongGop });
  const luongKetQua = tinhLuongKetQua({ mucP3Chuan: 2500000, diemThiDua: diemCuoiCung, tyLeNgayCongHopLe: 0.95 });
  const thuNhapTamTinh = tinhThuNhapTamTinh({ luongViTri: 7000000, luongNangLuc: 1200000, luongKetQua, thuong: 400000, phuCap: 700000, phucLoi: 300000, giamTru: index % 4 === 0 ? 200000 : 0 });

  return {
    id: `ptd-${index + 1}`,
    nhanVienId: nv.id,
    nhanVien: nv.hoTen,
    teamId: nv.teamId,
    team: nv.team,
    diemKetQuaCongViec,
    diemHelpdesk,
    diemGiaTriConNguoi,
    diemChamCong,
    diemDongGop,
    diemCuoiCung,
    xepLoai: xepLoaiTheoDiem(diemCuoiCung),
    thuNhapTamTinh: `${thuNhapTamTinh.toLocaleString("vi-VN")} đ`,
    ghiNhanNoiBat: "Có đóng góp tích cực và phản hồi công việc rõ ràng.",
    trangThai: index % 3 === 0 ? "Chờ duyệt" : "Đã xác nhận",
  };
});

export const bangXepHangMoi = [...phieuThiDua].sort((a, b) => b.diemCuoiCung - a.diemCuoiCung).map((item, index) => ({ ...item, hang: index + 1, kyXepHang: "Tháng" }));

export const tongQuanThiDuaMoi = {
  stats: [
    { label: "Điểm thi đua hôm nay", value: "84,5", status: "Tốt", note: "Điểm tạm tính từ việc đã xong và dữ liệu đã duyệt." },
    { label: "Hạng tuần này", value: "#4", status: "Đang làm", note: "So trong team hiện tại." },
    { label: "Hạng tháng này", value: "#6", status: "Đang làm", note: "Có thể thay đổi khi leader duyệt thêm." },
    { label: "Thu nhập tạm tính hôm nay", value: "520.000 đ", status: "Chờ duyệt", note: "Không phải số chốt lương." },
    { label: "Thu nhập dự tính tháng này", value: "12,8 triệu", status: "Chờ duyệt", note: "Dựa trên dữ liệu hiện tại." },
    { label: "Việc đã hoàn thành", value: "14", status: "Hoàn thành", note: "Trong kỳ đang xem." },
    { label: "Việc đang trễ", value: "2", status: "Trễ hạn", note: "Cần xử lý hoặc báo rủi ro." },
    { label: "Ticket cần xử lý", value: "5", status: "Cần kiểm tra", note: "Ưu tiên ticket gần quá hạn." },
    { label: "Ghi nhận tích cực", value: "7", status: "Đã duyệt", note: "Có leader xác nhận." },
    { label: "Việc cần cải thiện", value: "3", status: "Đang cải thiện", note: "Có người hỗ trợ đi kèm." },
  ],
};

export const leaderDuyet = [
  ...ghiNhanDongGop.slice(0, 5).map((item) => ({ ...item, loaiCanDuyet: "Ghi nhận đóng góp", diemAnhHuong: item.diemDeXuat, lyDo: "Cần leader xác nhận minh chứng." })),
  ...diemCanCaiThien.slice(0, 4).map((item) => ({ ...item, loaiCanDuyet: "Điểm cần cải thiện", diemAnhHuong: 0, lyDo: "Cần thống nhất hướng hỗ trợ nhân viên." })),
  ...danhGiaHelpdesk.slice(0, 4).map((item) => ({ ...item, loaiCanDuyet: "Đánh giá Helpdesk nhạy cảm", diemAnhHuong: item.diemHelpdesk, lyDo: "Không tự động trừ điểm nếu nguyên nhân không thuộc nhân viên." })),
];

export const thuNhapTongQuan = {
  canhBao: "Đây là thu nhập tạm tính theo dữ liệu hiện tại. Số chính thức chỉ được xác nhận sau khi bảng công, điểm thi đua và bảng lương được chốt.",
  stats: [
    { label: "Thu nhập tạm tính hôm nay", value: "520.000 đ", status: "Chờ duyệt", note: "Có thể thay đổi theo điểm duyệt." },
    { label: "Thu nhập tạm tính tuần này", value: "2.850.000 đ", status: "Chờ duyệt", note: "Tính theo ngày công và việc hoàn thành." },
    { label: "Thu nhập tạm tính tháng này", value: "11.900.000 đ", status: "Chờ duyệt", note: "Chưa phải bảng lương chốt." },
    { label: "Thu nhập dự tính đến cuối tháng", value: "13.400.000 đ", status: "Chờ duyệt", note: "Dựa trên bình quân ngày hiện tại." },
    { label: "Khoản chờ leader duyệt", value: "650.000 đ", status: "Chờ duyệt", note: "Ghi nhận và thưởng đang chờ." },
    { label: "Khoản chưa đủ điều kiện tính", value: "300.000 đ", status: "Cần kiểm tra", note: "Thiếu minh chứng hoặc bảng công chưa đủ." },
    { label: "Vì sao tăng", value: "+ P3", status: "Tốt", note: "Điểm thi đua tăng nhờ việc đúng hạn." },
    { label: "Vì sao giảm", value: "- Công", status: "Cần cải thiện", note: "Có ngày check-out thiếu." },
  ],
};

export const bangCong = nhanVien.map((nv, index) => ({
  id: `bc-${index + 1}`,
  nhanVienId: nv.id,
  nhanVien: nv.hoTen,
  teamId: nv.teamId,
  team: nv.team,
  thang: "05/2026",
  ngayCongChuan: 22,
  ngayCongThucTe: 19 + (index % 4),
  diTre: index % 3,
  veSom: index % 4 === 0 ? 1 : 0,
  nghiPhep: index % 5 === 0 ? 1 : 0,
  nghiKhongPhep: 0,
  lamViecBenNgoai: index % 4,
  trangThai: index % 3 === 0 ? "Nhân viên xác nhận" : "Leader duyệt",
}));

export const chamCong = bangCong.map((item, index) => ({
  id: `cc-${index + 1}`,
  nhanVien: item.nhanVien,
  ngay: "01/05/2026",
  checkIn: index % 4 === 0 ? "08:22" : "08:00",
  checkOut: "17:35",
  trangThaiTrongNgay: index % 4 === 0 ? "Đi trễ" : "Đủ công",
  ghiChu: index % 4 === 0 ? "Có báo leader trước giờ vào ca." : "Làm việc bình thường.",
  minhChung: index % 5 === 0 ? "Có minh chứng làm bên ngoài" : "Không cần",
}));

export const thuNhapTamTinh = phieuThiDua.map((item, index) => ({
  id: `tntt-${index + 1}`,
  nhanVien: item.nhanVien,
  team: item.team,
  luongViTriTamTinh: "7.000.000 đ",
  luongNangLucTamTinh: "1.200.000 đ",
  luongKetQuaTamTinh: index % 3 === 0 ? "2.850.000 đ" : "2.375.000 đ",
  thuongTamTinh: "400.000 đ",
  phuCapTamTinh: "700.000 đ",
  phucLoiTamTinh: "300.000 đ",
  giamTruTamTinh: index % 4 === 0 ? "200.000 đ" : "0 đ",
  tongTamTinh: item.thuNhapTamTinh,
  trangThai: item.trangThai,
}));

export const duTinhThang = thuNhapTamTinh.map((item, index) => ({
  id: `dtt-${index + 1}`,
  nhanVien: item.nhanVien,
  thuNhapDaGhiNhan: item.tongTamTinh,
  thuNhapBinhQuanNgay: index % 2 === 0 ? "520.000 đ" : "480.000 đ",
  ngayLamViecConLai: 12 - (index % 4),
  phuCapCoDinhDuKien: "700.000 đ",
  thuongDaDuyet: "400.000 đ",
  giamTruDuKien: item.giamTruTamTinh,
  duTinhCuoiThang: index % 2 === 0 ? "13.400.000 đ" : "12.700.000 đ",
}));

export const phieuThuNhapCaNhan = thuNhapTamTinh.map((item) => ({
  ...item,
  nguonGocDiem: "Mở từ điểm thi đua, bảng công và ghi nhận đã duyệt.",
  ghiChuCongBang: "Dữ liệu chưa duyệt chỉ hiển thị tạm tính, không đưa vào lương chính thức.",
}));

export const cauHinhLuong3P = [
  { id: "p1-kt", nhom: "Lương theo vị trí công việc", chucDanh: "Kế toán dịch vụ", capBac: "Nhân viên", mucLuongCoDinh: "7.000.000 đ", ngayHieuLuc: "01/05/2026", trangThai: "Đang áp dụng" },
  { id: "p2-kt", nhom: "Lương theo năng lực cá nhân", mucNangLuc: "Vững nghiệp vụ cơ bản", mucCongThem: "1.200.000 đ", dieuKienApDung: "Hoàn thành đào tạo và ít lỗi lặp lại", nguoiDuyet: "Giám đốc", trangThai: "Đang áp dụng" },
  { id: "p3-kt", nhom: "Lương theo kết quả thực hiện", mucP3Chuan: "2.500.000 đ", cachQuyDoi: "Theo tỷ lệ điểm thi đua được cấu hình trong quy chế", dieuKienHuong: "Bảng công và điểm thi đua đã chốt", dieuKienChuaHuong: "Thiếu bảng công hoặc điểm chưa duyệt", trangThai: "Đang áp dụng" },
];

export const quyCheLuongThuong = [
  {
    id: "qclt-001",
    tenQuyChe: "Quy chế lương thưởng giai đoạn xây hệ thống",
    phienBan: "2026.01",
    ngayHieuLuc: "01/05/2026",
    doiTuongApDung: "Nhân viên chính thức và thử việc đủ điều kiện",
    congThucLuong: "P1 + P2 + P3 theo điểm đã duyệt và ngày công hợp lệ.",
    congThucThuong: "Thưởng theo ghi nhận đóng góp đã được leader duyệt.",
    congThucPhuCap: "Theo khoản phụ cấp đang áp dụng.",
    dieuKienDuocHuong: "Có bảng công và điểm thi đua đã chốt.",
    dieuKienKhongDuocHuong: "Dữ liệu chưa duyệt hoặc thiếu minh chứng quan trọng.",
    trangThai: "Đang áp dụng",
  },
];

export const phuCapPhucLoi = ["Ăn trưa", "Điện thoại", "Xăng xe", "Trách nhiệm", "Đào tạo", "Thưởng nóng", "Thưởng thi đua", "Thưởng chất lượng"].map((tenKhoan, index) => ({
  id: `pcpl-${index + 1}`,
  tenKhoan,
  loaiKhoan: index < 4 ? "Phụ cấp" : index === 4 ? "Phúc lợi" : "Thưởng",
  soTien: `${(200000 + index * 100000).toLocaleString("vi-VN")} đ`,
  dieuKienApDung: index > 4 ? "Cần leader duyệt theo ghi nhận rõ ràng." : "Áp dụng theo quy chế hiện hành.",
  canLeaderDuyet: index > 4 ? "Có" : "Không",
  trangThai: "Đang áp dụng",
}));

export const bangLuong = thuNhapTamTinh.map((item, index) => ({
  id: `bl-${index + 1}`,
  kyLuong: "05/2026",
  nhanVien: item.nhanVien,
  team: item.team,
  luongTheoViTri: item.luongViTriTamTinh,
  luongTheoNangLuc: item.luongNangLucTamTinh,
  luongTheoKetQua: item.luongKetQuaTamTinh,
  thuong: item.thuongTamTinh,
  phuCap: item.phuCapTamTinh,
  phucLoi: item.phucLoiTamTinh,
  khoanGiamTru: item.giamTruTamTinh,
  tongThuNhap: item.tongTamTinh,
  thucNhan: item.tongTamTinh,
  trangThai: index % 4 === 0 ? "Chờ leader duyệt" : "Nháp",
}));

export const baoCaoLuongThuong = {
  stats: [
    { label: "Quỹ lương tạm tính", value: "126 triệu", status: "Chờ duyệt", note: "Chưa phải số chốt." },
    { label: "Thu nhập bình quân", value: "12,6 triệu", status: "Đang áp dụng", note: "Theo dữ liệu mẫu tháng hiện tại." },
    { label: "Khoản chờ duyệt", value: "6,5 triệu", status: "Chờ duyệt", note: "Ghi nhận và thưởng." },
    { label: "Bảng lương chưa chốt", value: "10", status: "Nháp", note: "Cần bảng công và điểm thi đua đã chốt." },
  ],
};

export const giayChungNhanThiDua = [
  {
    id: "gcn-001",
    ky: "Tuần",
    thoiGian: "Tuần 18/2026",
    nhanVien: "Nguyễn Minh Anh",
    team: "Kế toán Doanh Nghiệp",
    danhHieu: "Ghi nhận Follow tới cùng",
    diemThiDua: 92,
    mucTieuGhiNhan: "Hoàn thành hồ sơ trọng điểm đúng hạn",
    ghiNhan1: "Theo sát hồ sơ đến khi khách bổ sung đủ chứng từ.",
    ghiNhan2: "Cập nhật trạng thái rõ ràng cho leader và khách hàng.",
    ghiNhan3: "Hỗ trợ đồng đội kiểm tra chéo trước khi gửi hồ sơ.",
    nguoiDuyet: "Giám đốc",
    ngayIn: "01/05/2026",
    trangThai: "Đã xác nhận",
  },
  {
    id: "gcn-002",
    ky: "Tháng",
    thoiGian: "Tháng 05/2026",
    nhanVien: "Trần Quốc Huy",
    team: "Kế toán Doanh Nghiệp",
    danhHieu: "Ghi nhận phục vụ khách hàng rõ ràng",
    diemThiDua: 88,
    mucTieuGhiNhan: "Giảm ticket bị mở lại",
    ghiNhan1: "Phản hồi khách dễ hiểu, có hướng xử lý cụ thể.",
    ghiNhan2: "Giảm việc phải làm lại bằng checklist trước khi gửi.",
    ghiNhan3: "Có tinh thần hỗ trợ người mới trong team.",
    nguoiDuyet: "Leader trực tiếp",
    ngayIn: "01/05/2026",
    trangThai: "Đã xác nhận",
  },
  {
    id: "gcn-003",
    ky: "Quý",
    thoiGian: "Quý 2/2026",
    nhanVien: "Bùi Gia Phúc",
    team: "Pháp lý & BHXH",
    danhHieu: "Ghi nhận chính trực nghề nghiệp",
    diemThiDua: 91,
    mucTieuGhiNhan: "Chuẩn hóa quy trình pháp lý và BHXH",
    ghiNhan1: "Báo rủi ro đúng lúc khi hồ sơ thiếu căn cứ.",
    ghiNhan2: "Giữ chuẩn mực nghề nghiệp trong trao đổi với khách.",
    ghiNhan3: "Đề xuất cải tiến checklist hồ sơ.",
    nguoiDuyet: "Giám đốc",
    ngayIn: "01/05/2026",
    trangThai: "Đã xác nhận",
  },
  {
    id: "gcn-004",
    ky: "Năm",
    thoiGian: "Năm 2026",
    nhanVien: "Huỳnh Kim Ngân",
    team: "Pháp lý & BHXH",
    danhHieu: "Ghi nhận học tập và chia sẻ",
    diemThiDua: 90,
    mucTieuGhiNhan: "Nâng năng lực nghiệp vụ BHXH",
    ghiNhan1: "Chủ động học quy định mới và ghi chú lại cho team.",
    ghiNhan2: "Hỗ trợ đồng đội xử lý tình huống khó.",
    ghiNhan3: "Giữ thái độ cầu thị khi nhận góp ý.",
    nguoiDuyet: "Giám đốc",
    ngayIn: "01/05/2026",
    trangThai: "Đã xác nhận",
  },
];
