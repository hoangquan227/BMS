import { tinhDiemCuoiCung, tinhDiemGhiNhan, xepLoaiThiDua } from "../lib/thi-dua-scoring";

export const trangThaiThiDua = ["Nháp", "Đang đánh giá", "Chờ xác nhận", "Đã xác nhận", "Đã chốt", "Đã hủy"];

export const teamsThiDua = [
  { id: "team-ktdn", tenTeam: "Kế toán Doanh Nghiệp" },
  { id: "team-kthkd", tenTeam: "Kế toán Hộ Kinh Doanh" },
  { id: "team-plbhxh", tenTeam: "Pháp lý & BHXH" },
];

export const nhanVienThiDua = [
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

export const kyThiDua = [
  {
    id: "ky-2026-05",
    tenKy: "Thi đua tháng 05/2026",
    loaiKy: "Tháng",
    ngayBatDau: "01/05/2026",
    ngayKetThuc: "31/05/2026",
    trangThai: "Đang đánh giá",
    soNhanVien: 10,
    tienDo: "62%",
  },
  {
    id: "ky-2026-q2",
    tenKy: "Thi đua quý 2/2026",
    loaiKy: "Quý",
    ngayBatDau: "01/04/2026",
    ngayKetThuc: "30/06/2026",
    trangThai: "Nháp",
    soNhanVien: 10,
    tienDo: "18%",
  },
  {
    id: "ky-2025",
    tenKy: "Thi đua năm 2025",
    loaiKy: "Năm",
    ngayBatDau: "01/01/2025",
    ngayKetThuc: "31/12/2025",
    trangThai: "Đã chốt",
    soNhanVien: 9,
    tienDo: "100%",
  },
];

export const giaTriConNguoi = [
  {
    id: "gt-chan-thanh",
    maGiaTri: "CHAN_THANH",
    tenGiaTri: "Chân thành",
    moTa: "Nói thật, làm thật, báo đúng tình trạng công việc.",
    hanhViNenCo: "Chủ động báo lỗi, không giấu vấn đề, không nói quá năng lực, trao đổi tử tế.",
    hanhViCanTranh: "Che lỗi, báo hoàn thành khi chưa xong, hứa ngoài phạm vi, nói một đằng làm một nẻo.",
    diemToiDa: 10,
    coCanMinhChung: true,
    trangThai: "Đang áp dụng",
  },
  {
    id: "gt-chinh-truc",
    maGiaTri: "CHINH_TRUC",
    tenGiaTri: "Chính trực",
    moTa: "Làm đúng quy định, không tiếp tay cho hành vi sai chuẩn mực nghề nghiệp.",
    hanhViNenCo: "Từ chối yêu cầu sai, nhắc khách bổ sung chứng từ hợp lệ, không tự ý sửa số liệu, báo rủi ro kịp thời.",
    hanhViCanTranh: "Hướng dẫn sai quy định, làm chứng từ không có thật, tự ý điều chỉnh số liệu, bỏ qua rủi ro nghiêm trọng.",
    diemToiDa: 10,
    coCanMinhChung: true,
    trangThai: "Đang áp dụng",
  },
  {
    id: "gt-hoc-tap",
    maGiaTri: "HOC_TAP_SUOT_DOI",
    tenGiaTri: "Học tập suốt đời",
    moTa: "Chủ động học quy định mới và áp dụng vào công việc.",
    hanhViNenCo: "Tham gia đào tạo, có ghi chú học tập, đặt câu hỏi khi chưa chắc, áp dụng kiến thức vào hồ sơ thật.",
    hanhViCanTranh: "Không cập nhật quy định, lặp lại lỗi cũ, không đọc hướng dẫn nội bộ, làm theo thói quen cũ.",
    diemToiDa: 10,
    coCanMinhChung: false,
    trangThai: "Đang áp dụng",
  },
  {
    id: "gt-follow",
    maGiaTri: "FOLLOW_TOI_CUNG",
    tenGiaTri: "Follow tới cùng",
    moTa: "Theo việc đến khi có kết quả cuối cùng.",
    hanhViNenCo: "Theo dõi công việc đến khi hoàn tất, hỏi lại khi thiếu dữ liệu, cập nhật trạng thái rõ ràng, nhắc việc đúng lúc.",
    hanhViCanTranh: "Bỏ quên task, không cập nhật tiến độ, để hồ sơ trễ hạn không báo, đùn việc.",
    diemToiDa: 10,
    coCanMinhChung: true,
    trangThai: "Đang áp dụng",
  },
  {
    id: "gt-push-hop-phap",
    maGiaTri: "PUSH_HOP_PHAP",
    tenGiaTri: "Push bằng mọi cách hợp pháp",
    moTa: "Chủ động tìm cách giải quyết trong phạm vi hợp pháp, đúng quy trình và đúng chuẩn mực nghề nghiệp.",
    hanhViNenCo: "Đưa ra phương án thay thế, hỏi người có chuyên môn, tìm căn cứ pháp lý, xử lý việc khó nhưng vẫn đúng luật.",
    hanhViCanTranh: "Nói không làm được nhưng không tìm phương án, làm liều, đẩy khó khăn cho người khác, chọn cách nhanh nhưng sai.",
    diemToiDa: 10,
    coCanMinhChung: true,
    trangThai: "Đang áp dụng",
  },
  {
    id: "gt-khong-tu-ai",
    maGiaTri: "KHONG_TU_AI",
    tenGiaTri: "Không tự ái",
    moTa: "Biết tiếp nhận góp ý, sửa lỗi và không phản ứng phòng thủ.",
    hanhViNenCo: "Ghi nhận góp ý, sửa lỗi sau khi được nhắc, không lặp lại lỗi cũ, hỏi lại để hiểu đúng vấn đề.",
    hanhViCanTranh: "Cãi ngang, bị nhắc nhiều lần vẫn không sửa, tỏ thái độ khi được góp ý, đổ lỗi.",
    diemToiDa: 10,
    coCanMinhChung: false,
    trangThai: "Đang áp dụng",
  },
  {
    id: "gt-thoi-gian",
    maGiaTri: "TON_TRONG_THOI_GIAN",
    tenGiaTri: "Tôn trọng thời gian",
    moTa: "Đúng giờ, đúng hạn, phản hồi rõ ràng.",
    hanhViNenCo: "Check-in đúng quy định, phản hồi đúng hạn, gửi báo cáo đúng hạn, báo sớm nếu có nguy cơ trễ.",
    hanhViCanTranh: "Trễ hạn không báo, để tin nhắn quan trọng quá lâu, đi họp trễ, gửi báo cáo muộn nhiều lần.",
    diemToiDa: 10,
    coCanMinhChung: true,
    trangThai: "Đang áp dụng",
  },
  {
    id: "gt-nghe-nghiep",
    maGiaTri: "TON_TRONG_NGHE_NGHIEP",
    tenGiaTri: "Tôn trọng nghề nghiệp",
    moTa: "Làm nghề có chuẩn mực, giữ uy tín cho công ty và cho nghề kế toán, thuế, pháp lý, BHXH.",
    hanhViNenCo: "Kiểm tra hồ sơ kỹ, bảo mật thông tin khách hàng, bảo vệ quan điểm chuyên môn khi có căn cứ, không làm đối phó.",
    hanhViCanTranh: "Làm ẩu, gửi hồ sơ sai nhiều lần, tiết lộ thông tin khách hàng sai thẩm quyền, coi nhẹ quy trình kiểm tra chất lượng.",
    diemToiDa: 10,
    coCanMinhChung: true,
    trangThai: "Đang áp dụng",
  },
];

const nhomTen = [
  "Kết quả công việc",
  "Chất lượng nghiệp vụ",
  "Tuân thủ quy trình",
  "Tiến độ xử lý",
  "Tinh thần phối hợp",
  "Học tập và cải tiến",
  "Giá trị con người TCKN",
  "Ghi nhận đóng góp",
  "Rủi ro và lỗi phát sinh",
];

export const nhomTieuChiThiDua = nhomTen.map((tenNhom, index) => ({
  id: `nhom-${index + 1}`,
  tenNhom,
  moTa: `Nhóm tiêu chí giúp ghi nhận ${tenNhom.toLowerCase()} trong kỳ thi đua.`,
  thuTuHienThi: index + 1,
  trangThai: "Đang áp dụng",
}));

export const tieuChiThiDua = nhomTieuChiThiDua.flatMap((nhom, groupIndex) =>
  ["Rõ kết quả", "Có minh chứng", "Biết cải thiện"].map((ten, itemIndex) => ({
    id: `tc-${groupIndex + 1}-${itemIndex + 1}`,
    nhomId: nhom.id,
    nhomTieuChi: nhom.tenNhom,
    tenTieuChi: `${ten} - ${nhom.tenNhom}`,
    moTa: `Đánh giá mức độ ${ten.toLowerCase()} trong nhóm ${nhom.tenNhom.toLowerCase()}.`,
    diemToiDa: 10,
    trongSo: itemIndex === 0 ? "40%" : itemIndex === 1 ? "35%" : "25%",
    cachChamDiem: "Chấm theo kết quả thực tế, minh chứng và phản hồi trong kỳ.",
    coCanMinhChung: itemIndex !== 2,
    trangThai: "Đang áp dụng",
  }))
);

const loaiGhiNhan = ["Ghi nhận tích cực", "Cần nhắc nhở", "Lỗi cần sửa", "Đóng góp nổi bật"];
const mucAnhHuong = ["Nhẹ", "Trung bình", "Cao", "Nghiêm trọng"];

export const ghiNhanHanhVi = Array.from({ length: 20 }, (_, index) => {
  const nhanVien = nhanVienThiDua[index % nhanVienThiDua.length];
  const giaTri = giaTriConNguoi[index % giaTriConNguoi.length];
  const loai = loaiGhiNhan[index % loaiGhiNhan.length];
  const muc = mucAnhHuong[index % mucAnhHuong.length];
  const diemDeXuat = tinhDiemGhiNhan(loai, muc);

  return {
    id: `gn-${String(index + 1).padStart(3, "0")}`,
    nhanVienId: nhanVien.id,
    nhanVien: nhanVien.hoTen,
    nguoiGhiNhanId: "nv-001",
    nguoiGhiNhan: index % 3 === 0 ? "Nguyễn Minh Anh" : "Phạm Đức Long",
    teamId: nhanVien.teamId,
    team: nhanVien.team,
    kyThiDuaId: "ky-2026-05",
    kyThiDua: "Thi đua tháng 05/2026",
    giaTriConNguoiId: giaTri.id,
    giaTri: giaTri.tenGiaTri,
    loaiGhiNhan: loai,
    tieuDe: `${loai} về ${giaTri.tenGiaTri.toLowerCase()}`,
    noiDung: `Ghi nhận tình huống thực tế trong công việc của ${nhanVien.hoTen}, có trao đổi và minh chứng rõ ràng.`,
    mucAnhHuong: muc,
    diemDeXuat,
    diemDuocDuyet: diemDeXuat,
    minhChungUrl: "https://minh-chung.noi-bo/tckn",
    phanHoiNhanVien: index % 2 === 0 ? "Đã đọc và đồng ý với nội dung ghi nhận." : "Cần trao đổi thêm trong buổi họp team.",
    nhanXetTruongNhom: "Ghi nhận theo hướng hỗ trợ nhân viên cải thiện và phát huy điểm tốt.",
    trangThai: index % 5 === 0 ? "Chờ nhân viên phản hồi" : index % 4 === 0 ? "Chờ xác nhận" : "Đã xác nhận",
    ngayGhiNhan: `${String((index % 26) + 1).padStart(2, "0")}/05/2026`,
  };
});

export const keHoachCaiThien = [
  ["nv-010", "Cần quen quy trình kiểm tra hồ sơ trước khi gửi khách.", "Chưa thuộc checklist mới.", "Ghép cặp với nhân viên có kinh nghiệm trong 2 tuần.", "nv-001", "20/05/2026", "Đang cải thiện"],
  ["nv-005", "Cần phản hồi khách đúng hạn hơn.", "Khối lượng inbox tăng vào cuối tháng.", "Sắp lại khung giờ xử lý tin nhắn và báo sớm khi quá tải.", "nv-004", "18/05/2026", "Cần theo dõi thêm"],
  ["nv-008", "Cần bổ sung minh chứng khi ghi nhận hồ sơ BHXH.", "Minh chứng lưu rời rạc ở nhiều nơi.", "Dùng một thư mục chuẩn cho từng khách hàng.", "nv-007", "22/05/2026", "Mới tạo"],
  ["nv-003", "Cần giảm lỗi lặp lại khi đối chiếu hóa đơn.", "Chưa kiểm tra chéo trước khi gửi.", "Áp dụng bước tự soát lần 2 trước hạn.", "nv-001", "25/05/2026", "Đang cải thiện"],
  ["nv-009", "Cần rõ hơn khi bàn giao yêu cầu hỗ trợ.", "Nội dung bàn giao còn ngắn.", "Dùng mẫu bàn giao có phần việc đã làm và việc còn mở.", "nv-007", "27/05/2026", "Đã cải thiện"],
].map(([nhanVienId, vanDeCanCaiThien, nguyenNhanDuKien, hanhDongCaiThien, nguoiHoTroId, thoiHanHoanThanh, trangThai], index) => {
  const nhanVien = nhanVienThiDua.find((item) => item.id === nhanVienId);
  const nguoiHoTro = nhanVienThiDua.find((item) => item.id === nguoiHoTroId);
  return {
    id: `khct-${index + 1}`,
    nhanVienId,
    nhanVien: nhanVien.hoTen,
    teamId: nhanVien.teamId,
    team: nhanVien.team,
    kyThiDuaId: "ky-2026-05",
    kyThiDua: "Thi đua tháng 05/2026",
    vanDeCanCaiThien,
    nguyenNhanDuKien,
    hanhDongCaiThien,
    nguoiHoTroId,
    nguoiHoTro: nguoiHoTro.hoTen,
    thoiHanHoanThanh,
    ketQuaSauCaiThien: trangThai === "Đã cải thiện" ? "Đã thống nhất cách làm mới và giảm lỗi trong tuần gần nhất." : "Đang theo dõi thêm.",
    trangThai,
  };
});

export const phieuDanhGiaThiDua = nhanVienThiDua.map((nhanVien, index) => {
  const diemCongViec = 72 + ((index * 5) % 24);
  const diemChatLuong = 70 + ((index * 7) % 25);
  const diemGiaTriConNguoi = 74 + ((index * 6) % 22);
  const diemCongVanHoa = Math.max(0, ghiNhanHanhVi.filter((item) => item.nhanVienId === nhanVien.id && item.diemDuocDuyet > 0).reduce((sum, item) => sum + item.diemDuocDuyet, 0));
  const diemCanNhacNho = Math.abs(Math.min(0, ghiNhanHanhVi.filter((item) => item.nhanVienId === nhanVien.id && item.diemDuocDuyet < 0).reduce((sum, item) => sum + item.diemDuocDuyet, 0)));
  const diemCuoiCung = tinhDiemCuoiCung({ diemCongViec, diemChatLuong, diemGiaTriConNguoi, diemCongVanHoa, diemCanNhacNho });

  return {
    id: `pdg-${index + 1}`,
    kyThiDuaId: "ky-2026-05",
    kyThiDua: "Thi đua tháng 05/2026",
    nhanVienId: nhanVien.id,
    nhanVien: nhanVien.hoTen,
    teamId: nhanVien.teamId,
    team: nhanVien.team,
    chucDanh: nhanVien.chucDanh,
    diemCongViec,
    diemChatLuong,
    diemGiaTriConNguoi,
    diemCongVanHoa,
    diemCanNhacNho,
    diemCuoiCung,
    xepLoai: xepLoaiThiDua(diemCuoiCung),
    nhanXetNhanVien: "Tôi đã hoàn thành các việc chính và cần tiếp tục cải thiện phần minh chứng.",
    nhanXetTruongNhom: "Có tiến bộ, cần duy trì việc cập nhật trạng thái đúng hạn.",
    deXuatCaiThien: "Tập trung giảm lỗi lặp lại và chủ động báo sớm khi có rủi ro.",
    trangThai: index % 3 === 0 ? "Chờ xác nhận" : "Đang đánh giá",
  };
});

export const xepHangThiDua = [...phieuDanhGiaThiDua]
  .sort((a, b) => b.diemCuoiCung - a.diemCuoiCung)
  .map((item, index) => ({
    ...item,
    hang: index + 1,
    ghiNhanNoiBat: index < 3 ? "Có đóng góp rõ cho team và hỗ trợ đồng nghiệp tốt." : "Duy trì công việc ổn định trong kỳ.",
  }));

export const tongQuanThiDua = {
  stats: [
    { label: "Tổng nhân viên được đánh giá", value: "10", status: "Đang đánh giá", note: "Tính trong kỳ thi đua tháng hiện tại." },
    { label: "Điểm bình quân kỳ này", value: "82,4", status: "Tốt", note: "Đã giới hạn điểm cộng và điểm nhắc nhở." },
    { label: "Số nhân viên xuất sắc", value: "3", status: "Xuất sắc", note: "Nhóm cần được ghi nhận công khai." },
    { label: "Số nhân viên cần cải thiện", value: "2", status: "Cần cải thiện", note: "Có kế hoạch hỗ trợ kèm theo." },
    { label: "Tổng ghi nhận tích cực", value: "10", status: "Đã xác nhận", note: "Bao gồm đóng góp nổi bật và hành vi tích cực." },
    { label: "Tổng điểm cần nhắc nhở", value: "34", status: "Cần nhắc nhở", note: "Dùng để phát hiện lỗi lặp lại, không tạo áp lực." },
    { label: "Lỗi lặp lại nhiều nhất", value: "Trễ phản hồi", status: "Cần kiểm tra", note: "Cần thống nhất lại khung giờ phản hồi khách." },
    { label: "Giá trị được ghi nhận nhiều nhất", value: "Follow tới cùng", status: "Đã xác nhận", note: "Được ghi nhận nhiều trong hồ sơ cuối tháng." },
  ],
  nhanVienNoiBat: xepHangThiDua.slice(0, 4),
  nhanVienCanHoTro: phieuDanhGiaThiDua.filter((item) => item.xepLoai === "Cần cải thiện" || item.diemCuoiCung < 75).slice(0, 4),
  phanBoXepLoai: [
    { xepLoai: "Xuất sắc", soLuong: 3 },
    { xepLoai: "Tốt", soLuong: 4 },
    { xepLoai: "Đạt", soLuong: 2 },
    { xepLoai: "Cần cải thiện", soLuong: 1 },
  ],
  goiYHanhDong: [
    "Tổ chức buổi chia sẻ về cách lưu minh chứng đúng chuẩn.",
    "Nhắc lại quy trình báo sớm khi hồ sơ có nguy cơ trễ.",
    "Ghi nhận công khai các hành vi follow tới cùng trong họp tuần.",
  ],
  canhBaoLapLai: [
    "Trễ phản hồi tin nhắn khách hàng trên 4 giờ.",
    "Thiếu minh chứng khi cập nhật trạng thái hồ sơ.",
    "Bàn giao việc chưa đủ thông tin người nhận cần xử lý tiếp.",
  ],
};

export const baoCaoThiDua = {
  cauHoi: [
    "Team Kế toán Doanh Nghiệp có điểm bình quân cao nhất.",
    "Đỗ An Nhiên là nhân viên tiến bộ nhất nhờ giảm lỗi hồ sơ.",
    "Võ Ngọc Mai cần hỗ trợ thêm về khung giờ phản hồi khách.",
    "Follow tới cùng là giá trị con người được thể hiện rõ nhất.",
    "Tôn trọng thời gian đang cần được củng cố trong toàn team.",
    "Lỗi trễ phản hồi lặp lại nhiều nhất.",
    "Quy trình bàn giao yêu cầu hỗ trợ cần viết rõ thêm.",
    "Nhân viên mới cần đào tạo thêm về minh chứng hồ sơ.",
    "Kỳ tới nên tổ chức đào tạo về kiểm tra chéo chứng từ.",
  ],
};
