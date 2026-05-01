import MoneyCard from "./MoneyCard";

export default function TaxInvoiceCard({
  code = "HDTHUE-0042",
  customer = "Công ty An Phát",
  amount = "30.000.000 đ",
  status = "Đã gửi hóa đơn",
}) {
  return <MoneyCard title={`Hóa đơn thuế ${code}`} customer={customer} amount={amount} status={status} />;
}
