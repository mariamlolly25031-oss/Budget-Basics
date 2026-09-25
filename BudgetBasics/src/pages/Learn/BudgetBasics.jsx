import { useState } from "react";
import { Link } from "react-router-dom";

import {FiArrowRight,FiArrowLeft,FiDollarSign,FiTrendingDown,FiTrendingUp,FiCheckCircle,FiHeart,FiPieChart,FiHelpCircle,FiInfo,FiRotateCcw,FiHome,FiShoppingBag,FiBookOpen,
} from "react-icons/fi";
import budgetTracker from "../../assets/budgetTracker.jpg";

// ================= CONCEPTS =================
const concepts = [
  {
    title: "Income",
    icon: FiDollarSign,
    description:
      "Income is money that comes in. For a student, this could be an allowance, scholarship, part-time income, or money received for a specific purpose.",
    example: "Salary, freelance work, monthly allowance, scholarships.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    title: "Fixed Expenses",
    icon: FiHome,
    description:
      "Fixed expenses are costs that usually stay the same or change very little from month to month.",
    example: "Rent, tuition, subscriptions, internet bills.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Variable Expenses",
    icon: FiTrendingUp,
    description:
      "Variable expenses can change depending on your activities, choices, or needs during the month.",
    example: "Groceries, electricity, transport, eating out.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    title: "Requirements",
    icon: FiCheckCircle,
    description:
      "Requirements are important things you need to pay for or provide for yourself before spending on optional items.",
    example: "Housing, basic food, school materials, healthcare.",
    color: "bg-slate-100 text-[#0F172A] border-slate-200",
  },
  {
    title: "Wants",
    icon: FiShoppingBag,
    description:
      "Wants are things you would like to have but can usually delay or live without.",
    example: "Video games, concerts, designer clothes, dining out.",
    color: "bg-amber-50 text-[#B58A00] border-amber-100",
  },
  {
    title: "Savings",
    icon: FiBookOpen,
    description:
      "Savings are money you intentionally set aside for a future goal, unexpected need, or planned purchase.",
    example: "Emergency fund, laptop savings, future purchases.",
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
];

// ================= QUIZ QUESTIONS =================
const QUIZ_QUESTIONS = [
  {
    question: "Which of the following is considered a Fixed Expense?",
    options: [
      "Groceries bought weekly",
      "Monthly Apartment Rent",
      "Weekend Movie Ticket",
      "Electricity Bill",
    ],
    correctAnswer: 1,
    explanation:
      "Apartment rent is usually a fixed cost because the amount generally stays the same each month under a lease agreement. Groceries and electricity can change from month to month.",
  },
  {
    question: "If an expense is essential for basic survival, it falls under:",
    options: [
      "Wants",
      "Variable Investment",
      "Requirements (Needs)",
      "Discretionary Income",
    ],
    correctAnswer: 2,
    explanation:
      "Requirements or needs are essential expenses such as basic food, housing, transportation, and healthcare.",
  },
  {
    question: "Which of the following is an example of a Want?",
    options: [
      "Basic food",
      "School transportation",
      "Emergency medical care",
      "A new video game",
    ],
    correctAnswer: 3,
    explanation:
      "A want is something you would like to have but can usually live without or delay. A video game is an example of optional spending.",
  },
  {
    question: "What is the main purpose of saving money?",
    options: [
      "To spend everything immediately",
      "To prepare for future goals or unexpected needs",
      "To avoid having a budget",
      "To increase unnecessary spending",
    ],
    correctAnswer: 1,
    explanation:
      "Savings can help you prepare for future goals, planned purchases, and unexpected expenses.",
  },
];

// ================= CONCEPT CARD =================
function ConceptCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${item.color}`}
      >
        <Icon size={23} />
      </div>

      <h3 className="font-serif text-[22px] font-semibold text-[#0F172A]">
        {item.title}
      </h3>

      <p className="mt-3 text-[14px] leading-[1.8] text-slate-600">
        {item.description}
      </p>

      <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3">
        <span className="text-[10px] font-bold uppercase tracking-[1px] text-slate-400">
          Examples
        </span>

        <p className="mt-1 text-[12px] font-medium leading-[1.6] text-slate-700">
          {item.example}
        </p>
      </div>
    </article>
  );
}

// ================= MAIN COMPONENT =================
function BudgetBasics() {
  const [activeQuizIndex, setActiveQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuiz = QUIZ_QUESTIONS[activeQuizIndex];

  // ================= QUIZ FUNCTIONS =================
  const handleSelectOption = (index) => {
    if (showExplanation) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    if (selectedOption === currentQuiz.correctAnswer) {
      setScore((previousScore) => previousScore + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (activeQuizIndex < QUIZ_QUESTIONS.length - 1) {
      setActiveQuizIndex((previousIndex) => previousIndex + 1);
    }
  };

  const handleResetQuiz = () => {
    setActiveQuizIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* =====================================================
          HERO (WITH IMAGE BACKGROUND & OVERLAY)
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#0F172A] px-6 py-24 text-white">
        {/* Background Image */}
        <img
          src={budgetTracker}
          alt="Budget Tracker Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay so white text is easily readable */}
        <div className="absolute inset-0 bg-[#0F172A]/85 backdrop-blur-[2px]" />

        {/* Decorative Glow Elements */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F4C542]/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-300">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-[13px] font-semibold text-slate-300 transition hover:text-white"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>

          <h1 className="max-w-212.5 font-serif text-[42px] font-bold leading-[1.1] sm:text-[55px] lg:text-[68px]">
            Give every naira
            <span className="block text-[#F4C542]">a purpose.</span>
          </h1>

          <p className="mt-6 max-w-175 text-[16px] leading-[1.8] text-slate-200 md:text-[18px]">
            A budget is simply a plan for how you intend to use the money
            available to you. Understanding the basics makes everyday money
            decisions easier.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRO / BUDGET MINDSET
      ===================================================== */}
      <section className="mx-auto max-w-300 px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            
            <h2 className="font-serif text-[34px] font-bold leading-[1.15] text-[#0F172A] sm:text-[44px]">
              Before you budget,
              <br />
              know where your money goes.
            </h2>

            <p className="mt-5 max-w-162.5 text-[15px] leading-[1.9] text-slate-600">
              Budgeting is not about stopping yourself from enjoying your
              money. It is about understanding your income, taking care of
              important expenses, making room for wants, and setting something
              aside for the future.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#F4C542]/30 bg-[#FFFBEA] p-7">
            <p className="text-[12px] font-bold uppercase tracking-[2px] text-[#B58A00]">
              Budget mindset
            </p>

            <p className="mt-4 font-serif text-[25px] font-semibold leading-normal text-[#0F172A]">
              “Plan first. Spend second. Save intentionally.”
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE CONCEPTS
      ===================================================== */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-300">
          <div className="mb-10 max-w-175">
            
            <h2 className="font-serif text-[34px] font-bold leading-[1.15] text-[#0F172A] sm:text-[44px]">
              Six things every student budget should understand.
            </h2>

            <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
              These basic concepts help you understand where money comes from,
              where it goes, and what you can do with what remains.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {concepts.map((item) => (
              <ConceptCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SAMPLE STUDENT BUDGET
      ===================================================== */}
      <section className="mx-auto max-w-300 px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* LEFT TEXT */}
          <div>

            <h2 className="font-serif text-[34px] font-bold leading-[1.15] text-[#0F172A] sm:text-[44px]">
              What could a
              <br />
              ₦100,000 month look like?
            </h2>

            <p className="mt-5 text-[15px] leading-[1.9] text-slate-600">
              Here is a simple educational example. Your actual budget will
              depend on your income, responsibilities, location, and personal
              priorities.
            </p>

            <Link
              to="/Tools/Budget50_30_20"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-slate-800"
            >
              Explore 50 / 30 / 20
              <FiArrowRight size={16} />
            </Link>
          </div>

          {/* RIGHT BUDGET CARD */}
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            {/* Budget Header */}
            <div className="border-b border-slate-200 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] text-slate-500">
                    Sample monthly budget
                  </p>
                  <h3 className="mt-1 font-serif text-[25px] font-bold text-[#0F172A]">
                    ₦100,000
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF7D6] text-[#B58A00]">
                  <FiDollarSign size={19} />
                </div>
              </div>
            </div>

            {/* Budget Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="border-b border-slate-100 bg-slate-50 text-[10px] font-bold uppercase tracking-[1px] text-slate-400">
                  <tr>
                    <th className="px-5 py-3">Category</th>
                    <th className="px-5 py-3">Item Breakdown</th>
                    <th className="px-5 py-3">Type</th>
                    <th className="px-5 py-3 text-right">Amount</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {/* Income */}
                  <tr className="bg-emerald-50/40">
                    <td className="px-5 py-4 font-bold text-emerald-800">
                      Income
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      Allowance + Side Gig
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                        Income
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-bold text-emerald-700">
                      +₦100,000
                    </td>
                  </tr>

                  {/* Accommodation */}
                  <tr>
                    <td className="px-5 py-4 font-semibold text-[#0F172A]">
                      Accommodation
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      Hostel contribution
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700">
                        Fixed / Need
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-slate-800">
                      ₦35,000
                    </td>
                  </tr>

                  {/* Food */}
                  <tr>
                    <td className="px-5 py-4 font-semibold text-[#0F172A]">
                      Food & Groceries
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      Campus meals & cooked food
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700">
                        Variable / Need
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-slate-800">
                      ₦25,000
                    </td>
                  </tr>

                  {/* Transport */}
                  <tr>
                    <td className="px-5 py-4 font-semibold text-[#0F172A]">
                      Transport
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      Campus shuttles
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700">
                        Variable / Need
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-slate-800">
                      ₦10,000
                    </td>
                  </tr>

                  {/* Entertainment */}
                  <tr>
                    <td className="px-5 py-4 font-semibold text-[#0F172A]">
                      Entertainment
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      Outings, streaming subscriptions
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-800">
                        Want
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-slate-800">
                      ₦15,000
                    </td>
                  </tr>

                  {/* Savings */}
                  <tr className="bg-slate-50">
                    <td className="px-5 py-4 font-bold text-emerald-600">
                      Savings Target
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      Emergency fund deposit
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded bg-teal-100 px-2 py-1 text-[10px] font-bold text-teal-800">
                        Savings
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-bold text-emerald-600">
                      ₦15,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KNOWLEDGE CHECK / FULL QUIZ
      ===================================================== */}
      <section className="bg-[#0F172A] px-6 py-16 text-white">
        <div className="mx-auto max-w-225">
          {/* Quiz Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[#F4C542]">
              <FiHelpCircle size={20} />
              <p className="text-[12px] font-bold uppercase tracking-[2px]">
                Knowledge Check
              </p>
            </div>

            <h2 className="mt-3 font-serif text-[34px] font-bold sm:text-[44px]">
              Test your budgeting instinct.
            </h2>

            <p className="mt-4 max-w-175 text-[15px] leading-[1.8] text-slate-300">
              See how well you understand the basic budgeting concepts before
              moving on to the next lesson.
            </p>
          </div>

          {/* Quiz */}
          {activeQuizIndex < QUIZ_QUESTIONS.length ? (
            <div>
              {/* Progress */}
              <div className="flex justify-between text-[11px] font-medium text-slate-400">
                <span>
                  Question {activeQuizIndex + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span>Score: {score}</span>
              </div>

              {/* Progress Bar */}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#F4C542] transition-all duration-300"
                  style={{
                    width: `${((activeQuizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question */}
              <p className="mt-6 text-[17px] font-medium leading-[1.6] text-white md:text-[19px]">
                {currentQuiz.question}
              </p>

              {/* Options */}
              <div className="mt-5 space-y-3">
                {currentQuiz.options.map((option, index) => {
                  const isSelected = selectedOption === index;

                  let optionStyle =
                    "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10";

                  if (showExplanation) {
                    if (index === currentQuiz.correctAnswer) {
                      optionStyle =
                        "border-emerald-500 bg-emerald-500/20 text-emerald-300 font-semibold";
                    } else if (isSelected) {
                      optionStyle =
                        "border-rose-500 bg-rose-500/20 text-rose-300";
                    }
                  } else if (isSelected) {
                    optionStyle =
                      "border-[#F4C542] bg-[#F4C542]/20 text-white font-semibold";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(index)}
                      disabled={showExplanation}
                      className={`w-full rounded-xl border p-4 text-left text-[13px] transition-all ${optionStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Answer Area */}
              <div className="mt-6">
                {!showExplanation ? (
                  <button
                    type="button"
                    onClick={handleCheckAnswer}
                    disabled={selectedOption === null}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#F4C542] px-6 py-3 text-[13px] font-bold text-[#0F172A] transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Check Answer
                    <FiArrowRight size={16} />
                  </button>
                ) : (
                  <div className="space-y-4">
                    {/* Explanation */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-start gap-3">
                        {selectedOption === currentQuiz.correctAnswer ? (
                          <FiCheckCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />
                        ) : (
                          <FiInfo
                            size={18}
                            className="mt-0.5 shrink-0 text-[#F4C542]"
                          />
                        )}

                        <div>
                          <strong className="block text-[14px] font-bold text-white">
                            {selectedOption === currentQuiz.correctAnswer
                              ? "Correct!"
                              : "Not quite!"}
                          </strong>

                          <p className="mt-1 text-[12px] leading-[1.7] text-slate-300">
                            {currentQuiz.explanation}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Next / Reset */}
                    {activeQuizIndex < QUIZ_QUESTIONS.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#F4C542] px-6 py-3 text-[13px] font-bold text-[#0F172A] transition-transform duration-200 hover:scale-[1.02]"
                      >
                        Next Question
                        <FiArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResetQuiz}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-[13px] font-bold text-white transition-transform duration-200 hover:scale-[1.02]"
                      >
                        <FiRotateCcw size={16} />
                        Complete & Reset Quiz
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed */
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <FiCheckCircle size={28} />
              </div>

              <p className="mt-5 font-serif text-[25px] font-bold text-white">
                Quiz Completed!
              </p>

              <p className="mt-2 text-[14px] text-slate-400">
                Your final score:{" "}
                <span className="font-bold text-white">
                  {score} / {QUIZ_QUESTIONS.length}
                </span>
              </p>

              <button
                type="button"
                onClick={handleResetQuiz}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#F4C542] px-6 py-3 text-[13px] font-bold text-[#0F172A]"
              >
                <FiRotateCcw size={16} />
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-300 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-2">
            <FiInfo
              size={15}
              className="mt-0.5 shrink-0 text-[#F4C542]"
            />

            <p className="text-[11px] leading-[1.7] text-slate-500">
              <strong className="text-slate-700">
                Educational Disclaimer:
              </strong>{" "}
              The sample figures provided in this module are purely
              illustrative representations meant to teach budgeting mechanics.
              Your actual financial situation may be different.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT LESSON CTA
      ===================================================== */}
      <section className="px-6 pb-16 pt-8">
        <div className="mx-auto max-w-300 rounded-[28px] bg-[#F4C542] px-7 py-10 text-[#0F172A] sm:px-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[2px]">
                Next lesson
              </p>

              <h2 className="mt-2 font-serif text-[32px] font-bold">
                Needs or wants?
              </h2>

              <p className="mt-2 max-w-150 text-[14px] leading-[1.7] text-slate-800">
                Learn how to tell the difference before making your next
                purchase.
              </p>
            </div>

            <Link
              to="/Learn/Needs_Wants"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-[13px] font-semibold text-white"
            >
              Continue Learning
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BudgetBasics;