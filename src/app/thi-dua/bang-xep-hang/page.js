import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Bảng xếp hạng",
  description: thiDuaScreens["bang-xep-hang"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="bang-xep-hang" />;
}
