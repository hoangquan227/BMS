import SimpleModulePage, { getModuleMetadata } from "../../components/SimpleModulePage";

export async function generateMetadata({ params }) {
  const { screen } = await params;
  return getModuleMetadata("luongThuong", screen);
}

export default async function Page({ params }) {
  const { screen } = await params;
  return <SimpleModulePage moduleKey="luongThuong" screenKey={screen} />;
}
