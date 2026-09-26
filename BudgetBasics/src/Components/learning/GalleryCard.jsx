export default function GalleryCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-slate-800 dark:bg-slate-900"
      aria-label={`Open details for ${item.title}`}
    >

      {/* IMAGE */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-800">

        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">

          <span className="px-5 pb-5 text-sm font-semibold text-white">
            Click to learn more →
          </span>

        </div>

      </div>


      {/* CONTENT */}
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

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xs text-slate-400 dark:text-slate-500">
            {item.date}
          </span>

          <span className="text-sm font-semibold text-blue-600 transition group-hover:translate-x-1 dark:text-blue-400">
            Explore →
          </span>

        </div>

      </div>

    </button>
  );
}