import { useState } from "react";
import {
  FiAlertCircle,
  FiArrowRight,
  FiChevronDown,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const mistakes = [
  {
    number: "01",
    title: "Impulse Buying",
    scenario:
      "You see a trendy item online, buy it immediately, and later realize that you did not actually need it.",
    whyItMatters:
      "Impulse purchases can quietly reduce the money available for important expenses and savings.",
    action:
      "Try a pause rule. Add the item to your wishlist and wait before deciding whether it still deserves your money.",
  },
  {
    number: "02",
    title: "Ignoring Small Expenses",
    scenario:
      "You spend small amounts on snacks, delivery fees, drinks, or little purchases throughout the week without tracking them.",
    whyItMatters:
      "Individual purchases may look insignificant, but several small expenses can become a noticeable part of your monthly spending.",
    action:
      "Write down small purchases for a week. Seeing the total can help you identify where your money is actually going.",
  },
  {
    number: "03",
    title: "Late Payments",
    scenario:
      "You forget an important payment deadline and have to deal with additional charges, inconvenience, or loss of access.",
    whyItMatters:
      "Forgetting planned payments can make a manageable expense harder to handle.",
    action:
      "Keep a simple list of important payment dates and set reminders before each deadline.",
  },
  {
    number: "04",
    title: "Unused Subscriptions",
    scenario:
      "You subscribe to an app, platform, or service because it seems useful, but rarely use it after the first few weeks.",
    whyItMatters:
      "Recurring payments can continue reducing your available money even when you are no longer getting much value from them.",
    action:
      "Review subscriptions regularly and cancel services you no longer use or need.",
  },
  {
    number: "05",
    title: "Spending Without a Plan",
    scenario:
      "You receive your monthly allowance and start spending immediately without deciding how much should go toward important expenses or savings.",
    whyItMatters:
      "Without a plan, it becomes harder to know how much money is safe to spend.",
    action:
      "Create a simple budget before spending. Give your income categories and set limits that you can actually follow.",
  },
];

export default function MoneyMistakes() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleMistake = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F172A] px-6 py-20 text-white">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#F4C542]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-300/10 px-4 py-2 text-sm font-semibold text-red-200">
            <FiAlertCircle />
            Learn • Money Mistakes
          </span>

          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Your money habits matter more than one perfect month.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Everyone makes spending mistakes. The important part is noticing
            the pattern, understanding the effect, and knowing what you can do
            differently.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B58A00]">
              Spot the pattern
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Five habits worth watching.
            </h2>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              These are common student spending situations. They are not about
              judging your choices; they are about making the consequences
              easier to see.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF7D6] text-[#B58A00] dark:bg-[#3A3217] dark:text-[#F4C542]">
                <FiCheckCircle />
              </div>

              <div>
                <h3 className="font-bold">The goal is awareness.</h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  A budgeting mistake is easier to correct when you can
                  identify it early. Use these examples as prompts to review
                  your own spending habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900/40">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4">
            {mistakes.map((mistake, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={mistake.title}
                  className={`overflow-hidden rounded-3xl border transition ${
                    isOpen
                      ? "border-[#F4C542]/50 bg-[#FFFBEA] dark:border-[#F4C542]/20 dark:bg-[#28240F]"
                      : "border-slate-200 bg-[#F8FAFC] dark:border-slate-700 dark:bg-slate-900"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleMistake(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 px-6 py-6 text-left"
                  >
                    <span className="text-sm font-bold text-[#B58A00] dark:text-[#F4C542]">
                      {mistake.number}
                    </span>

                    <span className="flex-1">
                      <span className="block text-xl font-bold">
                        {mistake.title}
                      </span>

                      <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                        {isOpen ? "Close example" : "View student scenario"}
                      </span>
                    </span>

                    <FiChevronDown
                      className={`shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={22}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 px-6 pb-7 pt-6 dark:border-slate-700">
                      <div className="grid gap-5 md:grid-cols-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Student scenario
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                            {mistake.scenario}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Why it matters
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                            {mistake.whyItMatters}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 dark:bg-slate-900">
                          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            Try this instead
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                            {mistake.action}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-4xl bg-[#0F172A] p-8 text-white sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F4C542]">
                Quick reset
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                Before your next purchase...
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Give yourself a few seconds to check whether the spending
                supports something important or can wait.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Do I need it?",
                "Can I delay it?",
                "Did I budget for it?",
                "Do I already own something similar?",
                "Will I still want it later?",
                "Does this affect my savings goal?",
              ].map((question) => (
                <div
                  key={question}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <FiCheckCircle className="shrink-0 text-[#F4C542]" />
                  <span className="text-sm font-medium">{question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#B58A00] dark:text-[#F4C542]">
                Put it into practice
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold">
                Ready to build your own budget?
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
                Use the budgeting tools to turn what you have learned into a
                simple plan.
              </p>
            </div>

            <Link
              to="/Tools/ExpensePlanner"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 font-semibold text-white"
            >
              Open Expense Planner
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}