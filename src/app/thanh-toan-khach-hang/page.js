import BusinessListPage from "../components/BusinessListPage";
import FinanceActionPanel from "../../components/design-system/FinanceActionPanel";
import { pageMetadata } from "../data/page-metadata";
import { listScreens } from "../data/screens";

export const metadata = pageMetadata["thanh-toan-khach-hang"];

export default function Page() {
  return (
    <div className="space-y-6">
      <BusinessListPage screen={listScreens["thanh-toan-khach-hang"]} />
      <FinanceActionPanel />
    </div>
  );
}
