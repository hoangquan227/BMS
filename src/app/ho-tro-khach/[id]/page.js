import SupportDetailPage from "../../components/SupportDetailPage";
import { findSupportTicket } from "../../data/support-data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const ticket = findSupportTicket(id);

  return {
    title: `Chi tiết hỗ trợ ${ticket.code}`,
    description: `Chi tiết ticket ${ticket.code}, công ty gửi ${ticket.company}, người gửi ${ticket.senderName} và nhân viên xử lý ${ticket.assignedStaff}.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const ticket = findSupportTicket(id);

  return <SupportDetailPage ticket={ticket} />;
}
