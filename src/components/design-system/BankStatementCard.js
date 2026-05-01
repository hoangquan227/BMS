import MoneyCard from "./MoneyCard";

export default function BankStatementCard({
  code = "SK-0098",
  customer = "Công ty An Phát",
  amount = "15.000.000 đ",
  status = "Đã đối chiếu",
}) {
  return <MoneyCard title={`Sao kê giao dịch ${code}`} customer={customer} amount={amount} status={status} />;
}
