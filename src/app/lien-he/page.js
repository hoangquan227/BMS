import CrmListPage from "../components/CrmListPage";
import { crmModules } from "../data/crm-data";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata["lien-he"];

export default function Page() {
  return <CrmListPage module={crmModules.contacts} />;
}
