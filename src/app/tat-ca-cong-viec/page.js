import BusinessListPage from "../components/BusinessListPage";
import { pageMetadata } from "../data/page-metadata";
import { taskScreens } from "../data/screens";

export const metadata = pageMetadata["tat-ca-cong-viec"];

export default function Page() {
  return <BusinessListPage screen={taskScreens["tat-ca-cong-viec"]} />;
}
