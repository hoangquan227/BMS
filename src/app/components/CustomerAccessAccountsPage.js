"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../components/design-system/Button";
import ConfirmModal from "../../components/design-system/ConfirmModal";
import StatusBadge from "../../components/design-system/StatusBadge";
import ToastHost from "../../components/design-system/ToastHost";
import { accountUpdateLogs, getCustomerAccounts, passwordViewLogs } from "../data/access-account-data";

function InfoRow({ label, value }) {
  return (
    <div className="grid grid-cols-[150px_1fr] gap-3 text-[14px]">
      <p className="font-semibold text-slate-600">{label}</p>
      <p className="font-extrabold text-slate-950">{Array.isArray(value) ? value.join(", ") : value || "--"}</p>
    </div>
  );
}

export default function CustomerAccessAccountsPage({ customer }) {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [toast, setToast] = useState(null);
  const accounts = getCustomerAccounts(customer.id);
  const customerViewLogs = passwordViewLogs.filter((log) => log.customerId === customer.id);
  const customerUpdateLogs = accountUpdateLogs.filter((log) => log.customerId === customer.id);

  useEffect(() => {
    if (!Object.keys(visiblePasswords).length) return undefined;
    const timer = window.setTimeout(() => setVisiblePasswords({}), 15000);
    return () => window.clearTimeout(timer);
  }, [visiblePasswords]);

  async function revealPassword(account) {
    const response = await fetch(`/api/tai-khoan-truy-cap/${account.id}/xem-mat-khau`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason: "Xử lý công việc được giao" }),
    });
    const data = await response.json();

    if (!response.ok) {
      setToast({ title: "Không có quyền", description: data.message || "Bạn không có quyền xem mật khẩu này.", status: "Cần kiểm tra" });
      return;
    }

    setVisiblePasswords((current) => ({ ...current, [account.id]: data.password }));
    setToast({ title: "Đã ghi log xem mật khẩu", description: "Hệ thống đã ghi nhận người xem, tài khoản, khách hàng và thời điểm.", status: "Đã xác nhận" });
  }

  async function copyPassword(account) {
    const password = visiblePasswords[account.id];
    if (!password) return;

    await navigator.clipboard?.writeText(password);
    await fetch(`/api/tai-khoan-truy-cap/${account.id}/sao-chep-mat-khau`, { method: "POST" });
    setToast({ title: "Đã sao chép mật khẩu", description: "Hệ thống đã ghi log sao chép. Vui lòng bảo mật thông tin.", status: "Cần kiểm tra" });
  }

  async function markWrongPassword(account) {
    await fetch(`/api/tai-khoan-truy-cap/${account.id}/bao-sai-mat-khau`, { method: "POST" });
    setToast({ title: "Đã báo sai mật khẩu", description: "Leader sẽ kiểm tra và yêu cầu khách hàng cập nhật lại.", status: "Sai mật khẩu" });
  }

  async function confirmChecked(account) {
    await fetch(`/api/tai-khoan-truy-cap/${account.id}/xac-nhan-da-kiem-tra`, { method: "POST" });
    setToast({ title: "Đã xác nhận kiểm tra", description: "Lịch sử cập nhật tài khoản đã được ghi nhận.", status: "Đã xác nhận" });
  }

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-600">
        <Link className="font-extrabold text-bms-primary hover:underline" href="/tai-khoan-truy-cap">
          Tài khoản truy cập
        </Link>
        <span>/</span>
        <span>{customer.name}</span>
      </div>

      <section className="rounded-[14px] border border-bms-border bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-[13px] font-extrabold uppercase text-bms-primary">Thông tin khách hàng</p>
            <h1 className="text-[28px] font-extrabold leading-9 text-slate-950">{customer.name}</h1>
            <p className="text-[14px] font-semibold text-slate-600">Mỗi khách hàng có nhiều tài khoản truy cập, phân quyền và lịch sử riêng.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-bms-pill bg-bms-primary px-4 py-2 text-[14px] font-extrabold text-white" type="button">
              + Thêm tài khoản
            </button>
            <button className="rounded-bms-pill border border-bms-border px-4 py-2 text-[14px] font-extrabold text-slate-800" type="button">
              Phân quyền xem mật khẩu
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-3">
          <div className="space-y-3 xl:col-span-2">
            <InfoRow label="Mã số thuế" value={customer.taxCode} />
            <InfoRow label="Loại khách hàng" value={customer.type} />
            <InfoRow label="Địa chỉ" value={customer.address} />
            <InfoRow label="Người đại diện" value={customer.representative} />
            <InfoRow label="Người phụ trách nội bộ" value={customer.owner} />
            <InfoRow label="Nhóm dịch vụ" value={customer.services} />
            <InfoRow label="Trạng thái khách hàng" value={customer.status} />
          </div>
          <div className="rounded-[12px] border border-blue-100 bg-blue-50 p-4">
            <p className="text-[13px] font-extrabold uppercase text-bms-primary">Ghi chú bảo mật</p>
            <p className="mt-2 text-[14px] font-bold leading-6 text-slate-900">{customer.securityNote}</p>
            <p className="mt-3 text-[13px] font-semibold text-slate-700">
              Mật khẩu không hiển thị trong danh sách. API danh sách không trả về mật khẩu.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {accounts.map((account) => (
            <article className="rounded-[14px] border border-bms-border bg-white p-4" key={account.id}>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-[13px] font-extrabold uppercase text-bms-primary">{account.type}</p>
                  <h2 className="text-[20px] font-extrabold text-slate-950">{account.systemName}</h2>
                  <p className="text-[14px] font-semibold text-slate-600">{account.loginUrl}</p>
                </div>
                <StatusBadge status={account.status} />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <InfoRow label="Tên đăng nhập" value={account.username} />
                <InfoRow label="Mật khẩu" value={visiblePasswords[account.id] || "************"} />
                <InfoRow label="Gợi ý mật khẩu" value={account.passwordHint} />
                <InfoRow label="Ngày nhận bàn giao" value={account.handoverDate} />
                <InfoRow label="Người bàn giao" value={account.customerHandoverPerson} />
                <InfoRow label="Người nhận nội bộ" value={account.internalReceiver} />
                <InfoRow label="Phụ trách chính" value={account.owner} />
                <InfoRow label="Người được phép xem" value={account.allowedUsers.join(", ")} />
                <InfoRow label="Kiểm tra gần nhất" value={account.lastCheckedAt} />
                <InfoRow label="Cập nhật mật khẩu" value={account.lastPasswordUpdatedAt} />
                <InfoRow label="File bàn giao" value={account.handoverFile} />
                <InfoRow label="Ghi chú" value={account.note} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {account.canViewPassword ? (
                  <Button onClick={() => setSelectedAccount(account)} size="sm" variant="secondary">
                    Xem mật khẩu
                  </Button>
                ) : (
                  <span className="rounded-bms-pill bg-slate-100 px-3 py-2 text-[13px] font-extrabold text-slate-600">
                    Bạn không có quyền xem mật khẩu này
                  </span>
                )}
                <Button disabled={!visiblePasswords[account.id]} onClick={() => copyPassword(account)} size="sm">
                  Sao chép mật khẩu
                </Button>
                <Button onClick={() => markWrongPassword(account)} size="sm" variant="danger">
                  Báo sai mật khẩu
                </Button>
                <Button onClick={() => confirmChecked(account)} size="sm" variant="ghost">
                  Xác nhận đã kiểm tra
                </Button>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4">
          <section className="rounded-[14px] border border-bms-border bg-white p-4">
            <h2 className="mb-3 text-[18px] font-extrabold text-slate-950">Người được phân quyền</h2>
            <div className="space-y-2">
              {Array.from(new Set(accounts.flatMap((account) => account.allowedUsers))).map((user) => (
                <div className="rounded-[10px] bg-slate-50 px-3 py-2 text-[14px] font-extrabold text-slate-900" key={user}>
                  {user}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[14px] border border-bms-border bg-white p-4">
            <h2 className="mb-3 text-[18px] font-extrabold text-slate-950">Lịch sử xem mật khẩu</h2>
            <div className="space-y-3">
              {customerViewLogs.map((log) => (
                <article className="rounded-[10px] bg-slate-50 px-3 py-2 text-[13px]" key={log.id}>
                  <p className="font-extrabold text-slate-950">{log.action}</p>
                  <p className="font-semibold text-slate-700">{log.user} · {log.viewedAt}</p>
                  <p className="font-semibold text-slate-600">Lý do: {log.reason}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[14px] border border-bms-border bg-white p-4">
            <h2 className="mb-3 text-[18px] font-extrabold text-slate-950">Lịch sử cập nhật</h2>
            <div className="space-y-3">
              {customerUpdateLogs.map((log) => (
                <article className="rounded-[10px] bg-slate-50 px-3 py-2 text-[13px]" key={log.id}>
                  <p className="font-extrabold text-slate-950">{log.action}</p>
                  <p className="font-semibold text-slate-700">{log.user} · {log.createdAt}</p>
                  <p className="font-semibold text-slate-600">{log.note}</p>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </section>

      {selectedAccount ? (
        <div aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4" role="dialog">
          <ConfirmModal
            confirmText="Tôi hiểu và muốn xem"
            description={`Bạn sắp xem mật khẩu của ${selectedAccount.systemName} thuộc ${customer.name}. Hệ thống sẽ ghi log người xem, thời điểm và lý do xem.`}
            onCancel={() => setSelectedAccount(null)}
            onConfirm={() => {
              revealPassword(selectedAccount);
              setSelectedAccount(null);
            }}
            title="Xác nhận xem mật khẩu"
          />
        </div>
      ) : null}

      <ToastHost toast={toast} />
    </section>
  );
}
