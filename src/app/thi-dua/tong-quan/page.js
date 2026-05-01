import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Tổng quan thi đua",
  description: thiDuaScreens["tong-quan"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="tong-quan" />;
}
