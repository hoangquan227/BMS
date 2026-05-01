"use client";

import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import StatusBadge from "./StatusBadge";

export default function FolderDisclosureCard({
  title = "Hồ sơ thuế tháng này",
  status = "Thiếu hồ sơ",
  files = ["Tờ khai thuế", "Bảng kê chứng từ", "Biên bản đối chiếu"],
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card title={title} className={status === "Thiếu hồ sơ" ? "ring-2 ring-red-100" : ""}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <StatusBadge status={status} />
        <Button onClick={() => setOpen((current) => !current)} variant="secondary">
          {open ? "Thu gọn hồ sơ" : "Mở hồ sơ"}
        </Button>
      </div>
      <div
        className={`grid transition-all duration-200 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 overflow-hidden space-y-2 text-sm text-bms-muted">
          {files.map((file) => (
            <li className="rounded-bms-control bg-bms-subtle px-4 py-3" key={file}>
              {file}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

