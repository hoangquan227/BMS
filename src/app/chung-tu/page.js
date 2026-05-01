import BusinessListPage from "../components/BusinessListPage";
import { pageMetadata } from "../data/page-metadata";
import { otherScreens } from "../data/screens";

export const metadata = pageMetadata["chung-tu"];

export default function Page() {
  return <BusinessListPage screen={otherScreens["chung-tu"]} />;
}
