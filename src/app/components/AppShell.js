"use client";

import { usePathname } from "next/navigation";
import BottomMenuMobile from "../../components/design-system/BottomMenuMobile";
import SidebarDesktop from "../../components/design-system/SidebarDesktop";
import BmsActivityTracker from "./BmsActivityTracker";
import WorkSessionClock from "./WorkSessionClock";

export default function AppShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-bms-subtle text-bms-text">
      <BmsActivityTracker />
      <div className="fixed inset-y-0 left-0 z-20 hidden lg:block">
        <SidebarDesktop activeHref={pathname} />
      </div>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-bms-border bg-white px-5 py-4 transition-shadow">
          <p className="text-sm font-semibold text-bms-primary">TCKN BMS</p>
          <h1 className="text-lg font-semibold">Hệ thống quản lý nội bộ - Cty Kế toán dịch vụ</h1>
          <WorkSessionClock />
        </header>

        <main className="px-5 py-6 pb-24 lg:px-8">{children}</main>
      </div>

      <BottomMenuMobile activeHref={pathname} />
    </div>
  );
}
