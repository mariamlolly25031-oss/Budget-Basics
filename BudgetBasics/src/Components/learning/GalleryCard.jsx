export default function GalleryCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div className="aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">

        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {item.topic} • {item.type}
        </span>

        <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {item.description}
        </p>

        <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
          Visual learning graphic about {item.title.toLowerCase()}.
        </p>

      </div>

    </article>
  );
}