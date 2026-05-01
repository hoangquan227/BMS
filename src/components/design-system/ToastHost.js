"use client";

import Toast from "./Toast";

export default function ToastHost({ toast }) {
  if (!toast) {
    return null;
  }

  return (
    <div className="fixed right-4 top-4 z-50">
      <Toast {...toast} />
    </div>
  );
}

