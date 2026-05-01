import AppShell from "./components/AppShell";
import "./globals.css";

export const metadata = {
  title: "Hệ thống quản lý doanh nghiệp",
  description:
    "Hệ thống hỗ trợ công ty kế toán dịch vụ quản lý khách hàng, công việc, hồ sơ, chứng từ, nhân sự và báo cáo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
