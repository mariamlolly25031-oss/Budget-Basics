import { Link } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiInfo,
  FiMessageSquare,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const siteSections = [
  {
    title: "Main",
    links: [
      {
        name: "Home",
        path: "/",
        description: "Return to the BudgetBasics homepage.",
        icon: FiHome,
      },
      {
        name: "Learning Gallery",
        path: "/gallery",
        description:
          "Explore financial learning content, tips, examples, and infographics.",
        icon: FiBookOpen,
      },
    ],
  },
  {
    title: "Information",
    links: [
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
    ],
  },
];

export default function SiteMap() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Navigate BudgetBasics
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Site Map
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Find your way around BudgetBasics. Explore learning
            resources, learn about the platform, send feedback, or
            get in touch with us.
          </p>

        </div>
      </section>


      {/* SITE LINKS */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-8 md:grid-cols-2">

          {siteSections.map((section) => (
            <div key={section.title}>

              <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>

              <div className="space-y-4">

                {section.links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <h3 className="font-bold text-slate-900 dark:text-white">
                          {link.name}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {link.description}
                        </p>

                      </div>

                      <FiArrowRight
                        className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                        size={20}
                      />

                    </Link>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* LEARNING TOPICS */}
      <section className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Learning Gallery
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              Explore financial topics
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              The Learning Gallery can be filtered by different
              financial topics to help users find relevant content.
            </p>

          </div>


          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Saving",
              "Needs",
              "Expenses",
              "Goals",
              "Budgeting",
              "Spending",
              "Infographics",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {topic}
              </span>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}