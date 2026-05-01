import { redirect } from "next/navigation";

export const metadata = {
  title: "Trang chủ",
  description: "Chuyển đến trang tổng quan của hệ thống quản lý nội bộ.",
};

export default function Home() {
  redirect("/tong-quan");
}
