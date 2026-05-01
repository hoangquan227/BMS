import BusinessListPage from "../components/BusinessListPage";
import { pageMetadata } from "../data/page-metadata";
import { otherScreens } from "../data/screens";

export const metadata = pageMetadata["cai-dat"];

export default function Page() {
  return <BusinessListPage screen={otherScreens["cai-dat"]} />;
}
