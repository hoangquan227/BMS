import CompanyDetailPage from "../../components/CompanyDetailPage";

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Chi tiết công ty ${id}`,
    description: `Chi tiết công ty ${id}, bao gồm liên hệ, cơ hội, báo giá, hợp đồng, thanh toán, hồ sơ và hỗ trợ.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;

  return <CompanyDetailPage id={id} />;
}
