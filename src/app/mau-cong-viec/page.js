import PagePlaceholder from "../components/PagePlaceholder";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata["mau-cong-viec"];

export default function Page() {
  return <PagePlaceholder {...metadata} />;
}
