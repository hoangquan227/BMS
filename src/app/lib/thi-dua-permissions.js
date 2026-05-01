export const vaiTroThiDua = {
  ADMIN: "Admin",
  GIAM_DOC: "Giám đốc",
  TRUONG_NHOM: "Trưởng nhóm",
  NHAN_VIEN: "Nhân viên",
};

export function coTheXemToanBo(vaiTro) {
  return vaiTro === vaiTroThiDua.ADMIN || vaiTro === vaiTroThiDua.GIAM_DOC;
}

export function locDuLieuTheoQuyen(items, nguoiDung = {}) {
  if (coTheXemToanBo(nguoiDung.vaiTro)) {
    return items;
  }

  if (nguoiDung.vaiTro === vaiTroThiDua.TRUONG_NHOM) {
    return items.filter((item) => item.teamId === nguoiDung.teamId);
  }

  return items.filter((item) => item.nhanVienId === nguoiDung.id || item.id === nguoiDung.id);
}
