import MoneyCard from "./MoneyCard";

export default function QuoteCard({
  code = "BG-0008",
  customer = "Công ty An Phát",
  amount = "18.000.000 đ",
  status = "Chờ duyệt",
}) {
  return <MoneyCard title={`Báo giá ${code}`} customer={customer} amount={amount} status={status} />;
}

