import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Điểm cần nhắc nhở",
  description: thiDuaScreens["diem-can-nhac-nho"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="diem-can-nhac-nho" />;
}
