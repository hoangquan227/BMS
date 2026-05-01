import ThiDuaModulePage, { thiDuaScreens } from "../components/ThiDuaModulePage";

export const metadata = {
  title: "Góp ý & cải thiện",
  description: thiDuaScreens["gop-y-cai-thien"].description,
};

export default function Page() {
  return <ThiDuaModulePage screenKey="gop-y-cai-thien" />;
}
