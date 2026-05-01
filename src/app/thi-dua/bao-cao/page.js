import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Báo cáo thi đua",
  description: thiDuaScreens["bao-cao"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="bao-cao" />;
}
