export function gioiHanDiem(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

export function tinhDiemKetQuaCongViec({ tyLeHoanThanh = 0, tyLeDungHan = 0, tyLeLamLai = 0 }) {
  return Math.round(gioiHanDiem(tyLeHoanThanh * 0.5 + tyLeDungHan * 0.3 + (100 - tyLeLamLai) * 0.2) * 10) / 10;
}

export function tinhDiemThiDua({
  diemKetQuaCongViec = 0,
  diemHelpdesk = 0,
  diemGiaTriConNguoi = 0,
  diemChamCong = 0,
  diemDongGop = 0,
}) {
  const diem =
    diemKetQuaCongViec * 0.35 +
    diemHelpdesk * 0.2 +
    diemGiaTriConNguoi * 0.2 +
    diemChamCong * 0.15 +
    diemDongGop * 0.1;

  return Math.round(gioiHanDiem(diem) * 10) / 10;
}

export function xepLoaiTheoDiem(diem) {
  if (diem >= 90) return "Xuất sắc";
  if (diem >= 80) return "Tốt";
  if (diem >= 65) return "Đạt";
  if (diem >= 50) return "Cần cải thiện";
  return "Cần hỗ trợ nhiều";
}

export function tyLeQuyDoiP3(diem, cauHinh = null) {
  const bac = cauHinh || [
    { tu: 90, den: 100, tyLe: 1.2 },
    { tu: 80, den: 89.99, tyLe: 1 },
    { tu: 65, den: 79.99, tyLe: 0.8 },
    { tu: 50, den: 64.99, tyLe: 0.5 },
    { tu: 0, den: 49.99, tyLe: 0.3 },
  ];

  return bac.find((item) => diem >= item.tu && diem <= item.den)?.tyLe ?? 0;
}

export function tinhLuongKetQua({ mucP3Chuan = 0, diemThiDua = 0, tyLeNgayCongHopLe = 1, cauHinhP3 }) {
  return Math.round(mucP3Chuan * tyLeQuyDoiP3(diemThiDua, cauHinhP3) * tyLeNgayCongHopLe);
}

export function tinhThuNhapTamTinh({
  luongViTri = 0,
  luongNangLuc = 0,
  luongKetQua = 0,
  thuong = 0,
  phuCap = 0,
  phucLoi = 0,
  giamTru = 0,
}) {
  return Math.max(0, luongViTri + luongNangLuc + luongKetQua + thuong + phuCap + phucLoi - giamTru);
}
