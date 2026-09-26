export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <label
        htmlFor="learning-search"
        className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
      >
        Search learning content
      </label>

      <input
        id="learning-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Try saving, needs, expenses, goals..."
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
      />
    </div>
  );
}