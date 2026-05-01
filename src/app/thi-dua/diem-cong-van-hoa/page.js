import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Điểm cộng văn hóa",
  description: thiDuaScreens["diem-cong-van-hoa"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="diem-cong-van-hoa" />;
}
