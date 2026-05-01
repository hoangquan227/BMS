import SimpleModulePage, { getModuleMetadata } from "../../components/SimpleModulePage";

export const thiDuaScreens = {
  "tong-quan": getModuleMetadata("thiDua", "tong-quan"),
  "ket-qua-cong-viec": getModuleMetadata("thiDua", "ket-qua-cong-viec"),
  "danh-gia-helpdesk": getModuleMetadata("thiDua", "danh-gia-helpdesk"),
  "ghi-nhan-dong-gop": getModuleMetadata("thiDua", "ghi-nhan-dong-gop"),
  "diem-can-cai-thien": getModuleMetadata("thiDua", "diem-can-cai-thien"),
  "tu-danh-gia": getModuleMetadata("thiDua", "tu-danh-gia"),
  "leader-duyet": getModuleMetadata("thiDua", "leader-duyet"),
  "bang-xep-hang": getModuleMetadata("thiDua", "bang-xep-hang"),
  "gop-y-cai-thien": getModuleMetadata("thiDua", "gop-y-cai-thien"),
  "ky-thi-dua": getModuleMetadata("thiDua", "ky-thi-dua"),
  "bo-tieu-chi": getModuleMetadata("thiDua", "bo-tieu-chi"),
  "cham-diem": getModuleMetadata("thiDua", "cham-diem"),
  "gia-tri-con-nguoi": getModuleMetadata("thiDua", "gia-tri-con-nguoi"),
  "nhat-ky-ghi-nhan": getModuleMetadata("thiDua", "nhat-ky-ghi-nhan"),
  "diem-cong-van-hoa": getModuleMetadata("thiDua", "diem-cong-van-hoa"),
  "diem-can-nhac-nho": getModuleMetadata("thiDua", "diem-can-nhac-nho"),
  "bao-cao": getModuleMetadata("thiDua", "bao-cao"),
};

export default function ThiDuaModulePage({ screenKey }) {
  return <SimpleModulePage moduleKey="thiDua" screenKey={screenKey} />;
}
