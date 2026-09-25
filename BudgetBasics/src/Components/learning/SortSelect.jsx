export default function SortSelect({
  sortBy,
  onChange
}) {
  return (
    <div className="mt-5">
      <label
        htmlFor="sort-learning"
        className="mb-2 block text-sm font-semibold"
      >
        Sort by
      </label>

      <select
        id="sort-learning"
        value={sortBy}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900"
      >
        <option value="relevant">
          Most Relevant
        </option>

        <option value="newest">
          Newest
        </option>

        <option value="az">
          A-Z
        </option>
      </select>
    </div>
  );
}