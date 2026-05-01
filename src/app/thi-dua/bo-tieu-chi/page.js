import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Bộ tiêu chí thi đua",
  description: thiDuaScreens["bo-tieu-chi"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="bo-tieu-chi" />;
}
