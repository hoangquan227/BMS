import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Nhật ký ghi nhận hành vi",
  description: thiDuaScreens["nhat-ky-ghi-nhan"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="nhat-ky-ghi-nhan" />;
}
