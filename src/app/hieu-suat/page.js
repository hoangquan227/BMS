import PagePlaceholder from "../components/PagePlaceholder";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata["hieu-suat"];

export default function Page() {
  return <PagePlaceholder {...metadata} />;
}
