"use client";

import Button from "../../components/design-system/Button";

export default function PrintButton({ children = "In giấy chứng nhận" }) {
  return (
    <Button onClick={() => window.print()} type="button">
      {children}
    </Button>
  );
}
