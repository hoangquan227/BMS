import MoneyCard from "./MoneyCard";

export default function PaymentRequestCard({
  code = "DNTT-0015",
  customer = "Công ty An Phát",
  amount = "30.000.000 đ",
  status = "Chờ thanh toán",
}) {
  return <MoneyCard title={`Đề nghị thanh toán ${code}`} customer={customer} amount={amount} status={status} />;
}
