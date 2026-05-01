import MoneyCard from "./MoneyCard";

export default function CustomerPaymentCard({
  code = "TT-0031",
  customer = "Công ty An Phát",
  amount = "15.000.000 đ",
  status = "Đã thanh toán",
}) {
  return <MoneyCard title={`Thanh toán khách hàng ${code}`} customer={customer} amount={amount} status={status} />;
}
