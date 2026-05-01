import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Chấm điểm thi đua",
  description: thiDuaScreens["cham-diem"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="cham-diem" />;
}
