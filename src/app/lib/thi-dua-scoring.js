export const diemGhiNhanTheoLoai = {
  "Ghi nhận tích cực": {
    Nhẹ: 1,
    "Trung bình": 3,
    Cao: 5,
    "Nghiêm trọng": 0,
  },
  "Đóng góp nổi bật": {
    Nhẹ: 2,
    "Trung bình": 5,
    Cao: 8,
    "Nghiêm trọng": 10,
  },
  "Cần nhắc nhở": {
    Nhẹ: -1,
    "Trung bình": -3,
    Cao: -5,
    "Nghiêm trọng": -8,
  },
  "Lỗi cần sửa": {
    Nhẹ: -2,
    "Trung bình": -5,
    Cao: -8,
    "Nghiêm trọng": -10,
  },
};

export function tinhDiemGhiNhan(loaiGhiNhan, mucAnhHuong) {
  return diemGhiNhanTheoLoai[loaiGhiNhan]?.[mucAnhHuong] ?? 0;
}

export function gioiHanDiem(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

export function tinhDiemCuoiCung({
  diemCongViec = 0,
  diemChatLuong = 0,
  diemGiaTriConNguoi = 0,
  diemCongVanHoa = 0,
  diemCanNhacNho = 0,
}) {
  const diemCongGioiHan = Math.min(Number(diemCongVanHoa) || 0, 10);
  const diemTruGioiHan = Math.min(Math.abs(Number(diemCanNhacNho) || 0), 20);
  const diem =
    (Number(diemCongViec) || 0) * 0.6 +
    (Number(diemChatLuong) || 0) * 0.2 +
    (Number(diemGiaTriConNguoi) || 0) * 0.2 +
    diemCongGioiHan -
    diemTruGioiHan;

  return Math.round(gioiHanDiem(diem) * 10) / 10;
}

export function xepLoaiThiDua(diemCuoiCung) {
  if (diemCuoiCung >= 90) return "Xuất sắc";
  if (diemCuoiCung >= 80) return "Tốt";
  if (diemCuoiCung >= 65) return "Đạt";
  if (diemCuoiCung >= 50) return "Cần cải thiện";
  return "Không đạt";
}
