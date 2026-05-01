import PagePlaceholder from "../components/PagePlaceholder";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata["lich-su-trao-doi"];

export default function Page() {
  return <PagePlaceholder {...metadata} />;
}
