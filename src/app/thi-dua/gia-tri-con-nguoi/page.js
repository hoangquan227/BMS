import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Giá trị con người TCKN",
  description: thiDuaScreens["gia-tri-con-nguoi"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="gia-tri-con-nguoi" />;
}
