"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function postJson(url, payload, useBeacon = false) {
  const body = JSON.stringify(payload);

  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
    return;
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function BmsActivityTracker() {
  const pathname = usePathname();
  const [sessionId] = useState(() => crypto.randomUUID());
  const currentPageRef = useRef(null);
  const interactionCountRef = useRef(0);

  useEffect(() => {
    const now = new Date();
    const previous = currentPageRef.current;

    if (previous) {
      postJson(
        "/api/phan-tich-hoat-dong/trong-bms/page-view",
        {
          sessionId,
          route: previous.route,
          tenManHinh: previous.route,
          thoiGianVao: previous.startedAt,
          thoiGianRoi: now.toISOString(),
          tongThoiLuong: Math.max(1, Math.round((now.getTime() - previous.startedAtMs) / 1000)),
          soLanTuongTac: interactionCountRef.current,
          trinhDuyet: navigator.userAgent,
        },
        true
      );
    }

    interactionCountRef.current = 0;
    currentPageRef.current = {
      route: pathname,
      startedAt: now.toISOString(),
      startedAtMs: now.getTime(),
    };
  }, [pathname, sessionId]);

  useEffect(() => {
    function handleClick(event) {
      const target = event.target.closest("button, a");
      if (!target) return;

      interactionCountRef.current += 1;
      const label = target.innerText?.trim()?.slice(0, 80) || target.getAttribute("aria-label") || "Thao tác";

      postJson("/api/phan-tich-hoat-dong/trong-bms/feature-event", {
        sessionId,
        route: pathname,
        tenTinhNang: label,
        loaiSuKien: target.tagName === "A" ? "Mở liên kết" : "Bấm nút quan trọng",
      });
    }

    function handleBeforeUnload() {
      const page = currentPageRef.current;
      if (!page) return;

      const now = new Date();
      postJson(
        "/api/phan-tich-hoat-dong/trong-bms/page-view",
        {
          sessionId,
          route: page.route,
          tenManHinh: page.route,
          thoiGianVao: page.startedAt,
          thoiGianRoi: now.toISOString(),
          tongThoiLuong: Math.max(1, Math.round((now.getTime() - page.startedAtMs) / 1000)),
          soLanTuongTac: interactionCountRef.current,
          trinhDuyet: navigator.userAgent,
        },
        true
      );
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname, sessionId]);

  return null;
}
