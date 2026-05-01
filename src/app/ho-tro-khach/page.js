import BusinessListPage from "../components/BusinessListPage";
import { pageMetadata } from "../data/page-metadata";
import { otherScreens } from "../data/screens";

export const metadata = pageMetadata["ho-tro-khach"];

export default function Page() {
  return <BusinessListPage screen={otherScreens["ho-tro-khach"]} />;
}
