const topics = [
  "All",
  "Saving",
  "Needs",
  "Expenses",
  "Goals",
  "Budgeting",
  "Spending",
  "Infographics"
];

export default function FilterTabs({
  selectedTopic,
  onSelect
}) {
  return (
    <div className="mt-5">
      <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
        Filter by topic
      </p>

      <div
        className="flex flex-wrap gap-2"
        aria-label="Learning content topics"
      >
        {topics.map((topic) => {
          const isActive = selectedTopic === topic;

          return (
            <button
              key={topic}
              type="button"
              onClick={() => onSelect(topic)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {topic}
            </button>
          );
        })}
      </div>
    </div>
  );
}