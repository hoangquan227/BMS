import BusinessListPage from "../components/BusinessListPage";
import { pageMetadata } from "../data/page-metadata";
import { listScreens } from "../data/screens";

export const metadata = pageMetadata["cong-ty"];

export default function Page() {
  return <BusinessListPage screen={listScreens["cong-ty"]} />;
}
