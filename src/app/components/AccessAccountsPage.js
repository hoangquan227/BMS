import AccessPasswordCard from "../../components/design-system/AccessPasswordCard";
import ScreenHeader from "./ScreenHeader";

const accounts = [
  {
    systemName: "Tài khoản thuế điện tử",
    username: "mst-0312345678",
    password: "ThueDienTu@2026",
    loginLink: "https://thuedientu.gdt.gov.vn",
  },
  {
    systemName: "Tài khoản bảo hiểm xã hội",
    username: "bhxh-anphat",
    password: "BhxhBaoMat@2026",
    loginLink: "https://dichvucong.baohiemxahoi.gov.vn",
  },
];

export default function AccessAccountsPage() {
  return (
    <section className="space-y-6">
      <ScreenHeader
        description="Quản lý tài khoản truy cập của khách hàng. Mật khẩu mặc định được ẩn và chỉ hiển thị sau khi xác nhận."
        title="Tài khoản truy cập"
      />
      <div className="grid gap-4 xl:grid-cols-2">
        {accounts.map((account) => (
          <AccessPasswordCard key={account.systemName} {...account} />
        ))}
      </div>
    </section>
  );
}

