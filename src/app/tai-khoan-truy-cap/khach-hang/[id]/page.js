import CustomerAccessAccountsPage from "../../../components/CustomerAccessAccountsPage";
import { findAccessCustomer } from "../../../data/access-account-data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const customer = findAccessCustomer(id);

  return {
    title: `Tài khoản truy cập của ${customer.name}`,
    description: `Quản lý tài khoản truy cập, phân quyền xem mật khẩu, lịch sử cập nhật và lịch sử xem mật khẩu của ${customer.name}.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const customer = findAccessCustomer(id);

  return <CustomerAccessAccountsPage customer={customer} />;
}
