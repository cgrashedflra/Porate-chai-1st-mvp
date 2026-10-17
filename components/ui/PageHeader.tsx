/** Page title plus its supporting line, at the top of a dashboard screen. */
export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
}
