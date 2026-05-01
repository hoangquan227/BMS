export default function PagePlaceholder({ title, description }) {
  return (
    <section>
      <p className="text-sm font-medium text-slate-500">Màn hình khung</p>
      <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
      <p className="mt-3 max-w-2xl text-base text-slate-600">{description}</p>
    </section>
  );
}
