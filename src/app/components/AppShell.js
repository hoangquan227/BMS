"use client";

import { usePathname } from "next/navigation";
import BottomMenuMobile from "../../components/design-system/BottomMenuMobile";
import SidebarDesktop from "../../components/design-system/SidebarDesktop";
import BmsActivityTracker from "./BmsActivityTracker";
import ReleaseNotesButton from "./ReleaseNotesButton";
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
        <header className="sticky top-0 z-10 border-b border-bms-border bg-white px-5 py-3 font-sans transition-shadow">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-[13px] font-bold text-bms-primary">TCKN BMS</p>
              <h1 className="text-[18px] font-extrabold leading-6">Hệ thống quản lý nội bộ - Cty Kế toán dịch vụ</h1>
              <p className="text-[12px] font-extrabold uppercase tracking-normal text-bms-success">Làm việc trong hạnh phúc</p>
            </div>
            <ReleaseNotesButton />
          </div>
          <WorkSessionClock />
        </header>

        <main className="px-5 py-6 pb-24 lg:px-8">{children}</main>
      </div>

      <BottomMenuMobile activeHref={pathname} />
    </div>
  );
}
