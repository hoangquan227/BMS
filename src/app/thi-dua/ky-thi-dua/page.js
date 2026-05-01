import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Kỳ thi đua",
  description: thiDuaScreens["ky-thi-dua"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="ky-thi-dua" />;
}
