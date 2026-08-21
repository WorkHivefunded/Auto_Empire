import { CATEGORIES } from '@/data';

export function AdminCategoriesPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-extrabold text-white">Categories</h1>
        <p className="mt-1 text-sm text-ink-400">Manage car body-type categories.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <div key={c.id} className="card-surface overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-bold text-white">{c.name}</h3>
              <p className="mt-1 text-xs text-ink-400">{c.description}</p>
              <p className="mt-2 text-xs font-semibold text-brand-400">{c.count} cars</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
