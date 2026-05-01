import KanbanPage from "../components/KanbanPage";
import { pageMetadata } from "../data/page-metadata";
import { opportunityScreen } from "../data/screens";

export const metadata = pageMetadata["co-hoi"];

export default function Page() {
  return <KanbanPage screen={opportunityScreen} />;
}
