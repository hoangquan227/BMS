import PagePlaceholder from "../components/PagePlaceholder";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata["quy-trinh"];

export default function Page() {
  return <PagePlaceholder {...metadata} />;
}
