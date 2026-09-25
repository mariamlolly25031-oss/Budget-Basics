import { MdSavings } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* HERO */}
      <section className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            About BudgetBasics
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Making personal finance easier to understand.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            BudgetBasics is a learning platform designed to help
            people understand everyday money decisions through
            simple explanations, practical examples, and visual
            learning resources.
          </p>

        </div>
      </section>


      {/* PURPOSE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Our purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              Financial concepts don't have to feel complicated.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-400">

            <p>
              Money management involves everyday decisions about
              income, spending, saving, needs, wants, and goals.
            </p>

            <p>
              BudgetBasics brings these ideas together in one
              accessible learning space so users can explore them
              at their own pace.
            </p>

            <p>
              Our learning gallery uses visual content to make
              important financial concepts easier to read,
              remember, and apply.
            </p>

          </div>

        </div>

      </section>


      {/* WHAT USERS CAN LEARN */}
      <section className="bg-white dark:bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              What you'll find
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              Learn the basics of managing money
            </h2>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                  <MdSavings size={25} />
                </div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Saving
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Understand saving habits, challenges, and goals.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <FaMoneyBillTrendUp size={25} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Budgeting
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Learn how to organize income and planned expenses.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <GiMoneyStack size={25} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Spending
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Explore practical ways to become more intentional
                with spending.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <TbTargetArrow size={25} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Financial Goals
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Learn how to turn financial ideas into clear goals.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-3xl bg-[#F4C542] px-8 py-12 text-[#0F172A] md:px-12">

          <h2 className="text-3xl font-bold">
            Learn. Plan. Understand.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-blue-100">
            BudgetBasics focuses on clear information and practical
            learning so users can build a stronger understanding of
            everyday personal finance.
          </p>

        </div>

      </section>

    </main>
  );
}