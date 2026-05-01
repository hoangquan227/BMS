export default function ScreenHeader({ title, description, action }) {
  return (
    <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-medium text-bms-muted">TCKN BMS</p>
        <h2 className="mt-1 text-2xl font-bold text-bms-text sm:text-3xl">{title}</h2>
        <p className="mt-2 max-w-3xl text-base leading-7 text-bms-muted">{description}</p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}

