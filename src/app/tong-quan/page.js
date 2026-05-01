import DashboardPage from "../components/DashboardPage";
import { pageMetadata } from "../data/page-metadata";
import { dashboardScreen } from "../data/screens";

export const metadata = pageMetadata["tong-quan"];

export default function Page() {
  return <DashboardPage screen={dashboardScreen} />;
}
