import ActivityAnalyticsPage, { getActivityMetadata } from "../../components/ActivityAnalyticsPage";

export async function generateMetadata({ params }) {
  const { screen } = await params;
  return getActivityMetadata(screen);
}

export default async function Page({ params }) {
  const { screen } = await params;
  return <ActivityAnalyticsPage screenKey={screen} />;
}
