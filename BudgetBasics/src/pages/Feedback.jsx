import { useState } from "react";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-5xl text-blue-600 dark:text-blue-400">✓</div>
          <h1 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
            Thank you for your feedback
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Your feedback helps us improve the BudgetBasics learning experience.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Send More Feedback
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Your voice matters
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            Share your feedback
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Tell us what you think about BudgetBasics, what you found useful, or what you think could be improved.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="feedback-name"
                className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
              >
                Name
              </label>
              <input
                id="feedback-name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="feedback-email"
                className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
              >
                Email
              </label>
              <input
                id="feedback-email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="feedback-type"
              className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
            >
              Feedback type
            </label>
            <select
              id="feedback-type"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">General Feedback</option>
              <option className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">Learning Gallery</option>
              <option className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">Website Experience</option>
              <option className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">Suggestion</option>
              <option className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">Report a Problem</option>
            </select>
          </div>

          <div className="mt-6">
            <label
              htmlFor="feedback-message"
              className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
            >
              Your feedback
            </label>
            <textarea
              id="feedback-message"
              rows="6"
              placeholder="Tell us what you think..."
              required
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </section>
    </main>
  );
}