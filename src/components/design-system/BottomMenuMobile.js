import Link from "next/link";
import { joinClassNames } from "./utils";

const mobileItems = [
  { label: "Tổng quan", href: "/tong-quan" },
  { label: "Công ty", href: "/cong-ty" },
  { label: "Việc của tôi", href: "/viec-cua-toi" },
  { label: "Chứng từ", href: "/chung-tu" },
  { label: "Thêm", href: "/cai-dat" },
];

export default function BottomMenuMobile({ activeHref = "/tong-quan" }) {
  function isItemActive(href) {
    if (href === "/cai-dat") {
      return !["/tong-quan", "/cong-ty", "/viec-cua-toi", "/chung-tu"].some(
        (primaryHref) => activeHref === primaryHref || activeHref.startsWith(`${primaryHref}/`)
      );
    }

    return activeHref === href || activeHref.startsWith(`${href}/`);
  }

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-bms-border bg-white lg:hidden"
      aria-label="Menu di động"
    >
      {mobileItems.map((item) => {
        const isActive = isItemActive(item.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={joinClassNames(
              "min-h-14 px-2 py-2 text-center text-xs font-semibold transition active:bg-blue-50",
              isActive ? "text-bms-primary" : "text-bms-text"
            )}
            href={item.href}
            key={item.href}
          >
            <span
              className={joinClassNames(
                "mx-auto mb-1 block h-1 w-8 rounded-bms-pill",
                isActive ? "bg-bms-primary" : "bg-transparent"
              )}
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
