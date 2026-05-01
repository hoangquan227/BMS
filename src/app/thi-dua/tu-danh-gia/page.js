import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Tự đánh giá",
  description: thiDuaScreens["tu-danh-gia"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="tu-danh-gia" />;
}
