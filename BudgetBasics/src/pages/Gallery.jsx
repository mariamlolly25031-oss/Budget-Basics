import { useMemo, useState } from "react";

import SearchBar from "../Components/learning/SearchBar"
import SortSelect from "../Components/learning/SortSelect";
import FilterTabs from "../Components/learning/FilterTabs";
import GalleryCard from "../Components/learning/GalleryCard";

import learningData from "../data/gallery";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [sortBy, setSortBy] = useState("relevant");

  const filteredContent = useMemo(() => {
    let results = [...learningData];

    // SEARCH
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      results = results.filter((item) => {
        return (
          item.title.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search) ||
          item.topic.toLowerCase().includes(search) ||
          item.type.toLowerCase().includes(search)
        );
      });
    }

    // FILTER
    if (selectedTopic !== "All") {
      results = results.filter(
        (item) => item.topic === selectedTopic
      );
    }

    // SORT
    if (sortBy === "newest") {
      results.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }

    if (sortBy === "az") {
      results.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return results;
  }, [searchTerm, selectedTopic, sortBy]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* HERO */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Learn • Understand • Grow
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Learning Gallery
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Explore simple visual guides that make personal finance
            easier to understand. Learn about saving, budgeting,
            spending, expenses, and financial goals.
          </p>

        </div>
      </section>


      {/* SEARCH + FILTERS */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <FilterTabs
            selectedTopic={selectedTopic}
            onSelect={setSelectedTopic}
          />

          <SortSelect
            sortBy={sortBy}
            onChange={setSortBy}
          />

        </div>


        {/* RESULTS HEADER */}
        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Explore the Gallery
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {filteredContent.length}{" "}
              {filteredContent.length === 1
                ? "learning resource"
                : "learning resources"}{" "}
              found
            </p>
          </div>

        </div>


        {/* RESULTS */}
        {filteredContent.length > 0 ? (

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredContent.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

        ) : (

          /* EMPTY STATE */
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto max-w-md">

              <div className="text-5xl">
                🔎
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                No learning content found
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                We couldn't find anything matching your search
                or selected topic. Try another keyword or choose
                a different topic.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTopic("All");
                  setSortBy("relevant");
                }}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Clear Search & Filters
              </button>

            </div>

          </div>

        )}

      </section>

    </main>
  );
}