import { Link } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiInfo,
  FiMessageSquare,
  FiMail,
  FiArrowRight,
  FiTarget,
  FiPieChart,
  FiCreditCard,
  FiAlertTriangle,
  FiImage,
} from "react-icons/fi";

const learnLinks = [
  {
    name: "Budgeting Basics",
    path: "/Learn/BudgetBasics",
    description:
      "Master the fundamentals of income, expenses, needs, wants, and savings.",
    icon: FiBookOpen,
    iconStyle:
      "bg-blue-50 text-blue-600 group-hover:bg-blue-600 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    name: "Needs vs Wants",
    path: "/Learn/Needs_Wants",
    description:
      "Learn how to distinguish essential expenses from discretionary spending.",
    icon: FiCreditCard,
    iconStyle:
      "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
  },
  {
    name: "Money Mistakes",
    path: "/Learn/MoneyMistakes",
    description:
      "Recognize common student money mistakes and learn practical ways to avoid them.",
    icon: FiAlertTriangle,
    iconStyle:
      "bg-amber-50 text-amber-600 group-hover:bg-amber-600 dark:bg-amber-950 dark:text-amber-400",
  },
  {
    name: "Learning Gallery",
    path: "/gallery",
    description:
      "Explore financial learning content, tips, examples, and infographics.",
    icon: FiImage,
    iconStyle:
      "bg-purple-50 text-purple-600 group-hover:bg-purple-600 dark:bg-purple-950 dark:text-purple-400",
  },
];

const toolLinks = [
  {
    name: "50/30/20 Budget",
    path: "/Tools/Budget50_30_20",
    description:
      "Explore the 50/30/20 budgeting guideline and see how income can be divided.",
    icon: FiPieChart,
    iconStyle:
      "bg-blue-50 text-blue-600 group-hover:bg-blue-600 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    name: "Savings Goals",
    path: "/Tools/SavingsGoals",
    description:
      "Set a savings target, track your progress, and estimate how long it may take.",
    icon: FiTarget,
    iconStyle:
      "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
  },
  {
    name: "Expense Planner",
    path: "/Tools/ExpensePlanner",
    description:
      "Plan your expenses, organize spending categories, and see your remaining balance.",
    icon: FiCreditCard,
    iconStyle:
      "bg-amber-50 text-amber-600 group-hover:bg-amber-600 dark:bg-amber-950 dark:text-amber-400",
  },
];

const informationLinks = [
  {
    name: "About",
    path: "/about",
    description: "Learn more about BudgetBasics and its purpose.",
    icon: FiInfo,
  },
  {
    name: "Feedback",
    path: "/feedback",
    description:
      "Share your thoughts and suggestions about the platform.",
    icon: FiMessageSquare,
  },
  {
    name: "Contact Us",
    path: "/contact",
    description: "Get in touch with the BudgetBasics team.",
    icon: FiMail,
  },
];

function SitemapCard({ item }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      className="group relative block rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-start gap-4">
        <div
          className={`shrink-0 rounded-xl p-3 transition-colors duration-200 group-hover:text-white ${item.iconStyle}`}
        >
          <Icon size={24} />
        </div>

        <div className="flex-1 pr-6">
          <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {item.name}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
        </div>

        <FiArrowRight
          className="absolute right-6 top-6 shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400"
          size={20}
        />
      </div>
    </Link>
  );
}

export default function SiteMap() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* ==================== HEADER ==================== */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Navigate BudgetBasics
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Site Map
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Explore BudgetBasics by learning section, interactive tools,
            and information pages.
          </p>

        </div>
      </section>


      {/* ==================== LEARN ==================== */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">

        <div className="mb-6">

          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Educational Content
          </span>

          <h2 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
            Learn
          </h2>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            Explore practical guides and financial literacy topics
            to build better money habits.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {learnLinks.map((item) => (
            <SitemapCard key={item.path} item={item} />
          ))}
        </div>

      </section>


      {/* ==================== TOOLS ==================== */}
      <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">

          <div className="mb-6">

            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Interactive Tools
            </span>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
              Tools
            </h2>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
              Put what you learn into practice with simple budgeting
              and planning tools.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {toolLinks.map((item) => (
              <SitemapCard key={item.path} item={item} />
            ))}
          </div>

        </div>

      </section>


      {/* ==================== MAIN ==================== */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">

        <div className="mb-6">

          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Website
          </span>

          <h2 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
            Main
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">

          <SitemapCard
            item={{
              name: "Home",
              path: "/",
              description:
                "Return to the BudgetBasics homepage and explore the platform.",
              icon: FiHome,
              iconStyle:
                "bg-purple-50 text-purple-600 group-hover:bg-purple-600 dark:bg-purple-950 dark:text-purple-400",
            }}
          />

        </div>

      </section>


      {/* ==================== INFORMATION ==================== */}
      <section className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">

          <div className="mb-6">

            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              About BudgetBasics
            </span>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
              Information
            </h2>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
              Learn more about the platform, share your experience,
              or get in touch with the team.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {informationLinks.map((item) => (
              <SitemapCard
                key={item.path}
                item={{
                  ...item,
                  iconStyle:
                    "bg-slate-100 text-slate-600 group-hover:bg-slate-700 dark:bg-slate-800 dark:text-slate-300",
                }}
              />
            ))}
          </div>

        </div>

      </section>

    </main>
  );
}