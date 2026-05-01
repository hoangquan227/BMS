import MoneyCard from "./MoneyCard";

export default function ContractCard({
  code = "HD-0021",
  customer = "Công ty An Phát",
  amount = "120.000.000 đ",
  status = "Đã duyệt",
}) {
  return <MoneyCard title={`Hợp đồng ${code}`} customer={customer} amount={amount} status={status} />;
}

