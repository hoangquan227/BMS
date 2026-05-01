import SimpleModulePage, { getModuleMetadata } from "../../components/SimpleModulePage";

export async function generateMetadata({ params }) {
  const { screen } = await params;
  return getModuleMetadata("mucTieu", screen);
}

export default async function Page({ params }) {
  const { screen } = await params;
  return <SimpleModulePage moduleKey="mucTieu" screenKey={screen} />;
}
