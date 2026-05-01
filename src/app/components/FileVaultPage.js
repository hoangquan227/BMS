const fileGroups = [
  {
    title: "Pháp lý",
    color: "text-bms-success",
    icon: (
      <svg aria-hidden="true" className="h-10 w-10 text-amber-400" viewBox="0 0 48 48" fill="none">
        <path d="M6 14a5 5 0 0 1 5-5h10l4 5h12a5 5 0 0 1 5 5v17a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V14Z" fill="currentColor" />
        <path d="M6 18h36v18a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V18Z" fill="#fbbf24" />
      </svg>
    ),
  },
  {
    title: "Sổ sách",
    color: "text-orange-600",
    icon: (
      <svg aria-hidden="true" className="h-10 w-10 text-yellow-400" viewBox="0 0 48 48" fill="none">
        <path d="M14 7h22a4 4 0 0 1 4 4v30H14a6 6 0 0 1-6-6V13a6 6 0 0 1 6-6Z" fill="currentColor" />
        <path d="M14 12h22M14 18h22M14 24h22M14 30h22" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 10v28" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Chứng từ",
    color: "text-bms-primary",
    icon: (
      <svg aria-hidden="true" className="h-10 w-10 text-slate-300" viewBox="0 0 48 48" fill="none">
        <path d="M13 6h15l9 9v27H13V6Z" fill="currentColor" />
        <path d="M28 6v10h9" fill="#e8edf5" />
        <path d="M18 24h14M18 30h14M18 36h9" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Thuế",
    color: "text-bms-danger",
    icon: (
      <svg aria-hidden="true" className="h-10 w-10 text-rose-500" viewBox="0 0 48 48" fill="none">
        <path d="M12 34 31 15l6 6-19 19H12v-6Z" fill="currentColor" />
        <path d="m29 17 4-7 5 5-7 4-2-2Z" fill="#fb7185" />
        <path d="M12 34 8 30M18 40l-4 4M30 28l6 6" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "BHXH",
    color: "text-cyan-600",
    icon: (
      <svg aria-hidden="true" className="h-10 w-10 text-violet-700" viewBox="0 0 48 48" fill="none">
        <circle cx="18" cy="16" r="6" fill="currentColor" />
        <circle cx="31" cy="16" r="6" fill="#6d28d9" />
        <path d="M8 36c1-8 6-12 13-12s12 4 13 12H8Z" fill="currentColor" />
        <path d="M22 36c1-7 5-11 11-11s10 4 11 11H22Z" fill="#6d28d9" />
      </svg>
    ),
  },
];

export default function FileVaultPage() {
  return (
    <section className="max-w-5xl">
      <div className="mb-4 border-l-4 border-bms-primary pl-4">
        <h2 className="text-2xl font-extrabold uppercase text-bms-text">Kho lưu trữ hồ sơ</h2>
      </div>

      <label className="mb-4 block">
        <span className="sr-only">Tìm kiếm file trong tất cả thư mục</span>
        <div className="flex min-h-11 items-center gap-3 rounded-2xl border border-bms-border bg-white px-4 shadow-sm">
          <svg aria-hidden="true" className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none">
            <path d="m20 20-4.2-4.2M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            className="w-full bg-transparent text-base text-bms-text outline-none placeholder:text-slate-400"
            placeholder="Tìm kiếm file trong tất cả thư mục..."
            type="search"
          />
        </div>
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        {fileGroups.map((group) => (
          <button
            className="min-h-24 rounded-[22px] border border-bms-border bg-white px-6 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] active:translate-y-px"
            key={group.title}
            type="button"
          >
            <span className="mx-auto flex justify-center">{group.icon}</span>
            <span className={`mt-2 block text-sm font-extrabold uppercase ${group.color}`}>
              {group.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
