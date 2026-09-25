import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiHeart,
  FiHelpCircle,
  FiInfo,
  FiRotateCcw,
  FiShoppingBag,
  FiTarget,
  FiX,
} from "react-icons/fi";


// ======================================================
// NEEDS VS WANTS CATEGORIES
// ======================================================

const EXAMPLE_CATEGORIES = [
  {
    type: "Needs (Requirements)",
    color:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeBg:
      "bg-emerald-100 text-emerald-800",

    description:
      "Expenses required for basic health, safety, education, responsibilities, and everyday survival.",

    items: [
      {
        name: "Rent & Housing",
        detail:
          "Shelter and basic living accommodations",
      },
      {
        name: "Basic Groceries",
        detail:
          "Nutritious raw foods and meal staples",
      },
      {
        name: "Utilities",
        detail:
          "Electricity, running water, and cooking gas",
      },
      {
        name: "Essential Transport",
        detail:
          "Fares to commute to work or school",
      },
    ],
  },

  {
    type: "Wants (Optional)",
    color:
      "bg-amber-50 text-amber-800 border-amber-200",
    badgeBg:
      "bg-amber-100 text-amber-900",

    description:
      "Discretionary items that bring enjoyment but are not essential to basic living.",

    items: [
      {
        name: "Dining Out & Takeout",
        detail:
          "Restaurant meals and cafe visits",
      },
      {
        name: "Gaming & Streaming",
        detail:
          "Video games, subscriptions, and movies",
      },
      {
        name: "Brand Name Apparel",
        detail:
          "Designer footwear and luxury fashion",
      },
      {
        name: "Latest Gadget Upgrades",
        detail:
          "Replacing functional devices early",
      },
    ],
  },
];


// ======================================================
// CLASSIFICATION QUESTIONS
// ======================================================

const SAMPLE_ITEMS = [
  {
    id: 1,
    name: "Prescription Medication",
    correct: "Need",

    explanation:
      "Health and medical supplies are vital needs required for physical well-being.",
  },

  {
    id: 2,
    name: "Concert Ticket",
    correct: "Want",

    explanation:
      "Live entertainment is fun, but it is an optional lifestyle purchase.",
  },

  {
    id: 3,
    name: "Electricity Bill",
    correct: "Need",

    explanation:
      "Basic utilities keep your living environment safe and functional.",
  },

  {
    id: 4,
    name: "Designer Sneakers",
    correct: "Want",

    explanation:
      "While footwear is a need, premium designer brands represent a discretionary want.",
  },

  {
    id: 5,
    name: "Weekly Cooking Groceries",
    correct: "Need",

    explanation:
      "Basic home-cooked groceries supply necessary sustenance for daily living.",
  },
];


// ======================================================
// DECISION GUIDE
// ======================================================

const DECISION_STEPS = [
  {
    number: "01",
    title: "Do I actually need it?",

    text:
      "Ask whether the item is necessary for your health, education, safety, responsibilities, or basic daily life.",
  },

  {
    number: "02",
    title: "Can I delay it?",

    text:
      "If you can wait a few days without a real problem, the purchase may be a want rather than an urgent need.",
  },

  {
    number: "03",
    title: "Do I already have something similar?",

    text:
      "Check what you already own before buying another item that serves the same purpose.",
  },

  {
    number: "04",
    title: "Does it fit my budget?",

    text:
      "Even a genuine need should be planned for. Check whether you have enough available money before spending.",
  },
];


// ======================================================
// MAIN COMPONENT
// ======================================================

export default function NeedsWants() {

  // Classification Quiz State
  const [currentIndex, setCurrentIndex] = useState(0);

  const [userChoice, setUserChoice] = useState(null);

  const [score, setScore] = useState(0);


  const currentItem = SAMPLE_ITEMS[currentIndex];


  // ======================================================
  // QUIZ FUNCTIONS
  // ======================================================

  const handleSelect = (choice) => {

    // Prevent selecting another answer after one has already
    // been selected.
    if (userChoice !== null) return;

    setUserChoice(choice);

    if (choice === currentItem.correct) {
      setScore((previousScore) => previousScore + 1);
    }
  };


  const handleNext = () => {

    setUserChoice(null);

    setCurrentIndex(
      (previousIndex) => previousIndex + 1
    );
  };


  const handleReset = () => {

    setCurrentIndex(0);

    setUserChoice(null);

    setScore(0);
  };


  return (

    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden bg-[#0F172A] px-6 py-20 text-white">

        {/* Decorative circles */}

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#F4C542]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />


        <div className="relative mx-auto max-w-6xl">


          {/* Back Home */}

          <Link
            to="/"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            <FiArrowLeft size={16} />

            Back to Home
          </Link>


          {/* Heading */}

          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Not every “I want it” means
            <span className="block text-[#F4C542]">
              “I need it.”
            </span>
          </h1>


          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Learning the difference between needs and wants can help you pause,
            prioritize important spending, and make more intentional choices.
          </p>

        </div>

      </section>


      {/* ==================================================
          NEEDS VS WANTS COMPARISON
      ================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="mb-10 max-w-2xl">

          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Needs come first. Wants come second.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Knowing which category a purchase belongs to makes it easier to
            decide what deserves your money first.
          </p>

        </div>


        <div className="grid gap-6 md:grid-cols-2">


          {/* NEEDS */}

          <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-7">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <FiTarget size={23} />
            </div>


            <h2 className="font-serif text-3xl font-bold text-emerald-950">
              Needs
            </h2>


            <p className="mt-4 leading-7 text-emerald-900/80">
              Needs are things that are important for your basic life,
              responsibilities, education, health, safety, or essential
              commitments.
            </p>


            <div className="mt-6 space-y-3">

              {[
                "Required school materials",
                "Essential transportation",
                "Basic food",
                "Necessary bills",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3 text-sm font-medium"
                >

                  <FiCheck className="text-emerald-600" />

                  {item}

                </div>

              ))}

            </div>

          </div>


          {/* WANTS */}

          <div className="rounded-[28px] border border-[#F4C542]/40 bg-[#FFFBEA] p-7">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4C542]/20 text-[#B58A00]">
              <FiShoppingBag size={23} />
            </div>


            <h2 className="font-serif text-3xl font-bold">
              Wants
            </h2>


            <p className="mt-4 leading-7 text-slate-700">
              Wants are things that can make life more enjoyable but can often
              be delayed, reduced, replaced, or skipped when money is limited.
            </p>


            <div className="mt-6 space-y-3">

              {[
                "Extra clothing",
                "Entertainment",
                "Impulse purchases",
                "Optional upgrades",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3 text-sm font-medium"
                >

                  <FiShoppingBag className="text-[#B58A00]" />

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CORE SPENDING CATEGORIES
      ================================================== */}

      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 max-w-2xl">

            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              See the difference in everyday spending.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Context matters. Something can be necessary in one situation
              while becoming optional in another.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {EXAMPLE_CATEGORIES.map((category) => (

              <article
                key={category.type}
                className={`rounded-3xl border p-6 shadow-sm md:p-8 ${category.color}`}
              >

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${category.badgeBg}`}
                >
                  {category.type}
                </span>


                <p className="mt-4 text-sm leading-7 opacity-90">
                  {category.description}
                </p>


                <div className="mt-6 space-y-3">

                  {category.items.map((item) => (

                    <div
                      key={item.name}
                      className="rounded-xl bg-white/80 p-3.5 shadow-sm"
                    >

                      <p className="text-sm font-bold text-[#0F172A]">
                        {item.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {item.detail}
                      </p>

                    </div>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          INTERACTIVE CLASSIFICATION PRACTICE
      ================================================== */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-5xl rounded-3xl bg-[#0F172A] p-6 text-white shadow-xl md:p-8">


          {/* Heading */}

          <div className="flex items-center gap-2 text-[#F4C542]">

            <FiHelpCircle size={20} />

            <h2 className="font-serif text-2xl font-semibold text-white">
              Interactive Classification Practice
            </h2>

          </div>


          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Test yourself by deciding whether each item is a need or a want.
            You will receive an explanation after every answer.
          </p>


          {/* Active Quiz */}

          {currentIndex < SAMPLE_ITEMS.length ? (

            <div className="mt-6">


              {/* Progress */}

              <div className="flex justify-between text-xs font-medium text-slate-400">

                <span>
                  Item {currentIndex + 1} of {SAMPLE_ITEMS.length}
                </span>

                <span>
                  Score: {score}
                </span>

              </div>


              {/* Progress Bar */}

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-[#F4C542] transition-all duration-300"
                  style={{
                    width: `${
                      ((currentIndex + 1) /
                        SAMPLE_ITEMS.length) *
                      100
                    }%`,
                  }}
                />

              </div>


              {/* Question Card */}

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

                <span className="text-xs font-bold uppercase tracking-wider text-[#F4C542]">
                  Classify This Item
                </span>


                <h3 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
                  {currentItem.name}
                </h3>


                {/* Choice Buttons */}

                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">


                  {/* NEED */}

                  <button
                    type="button"
                    onClick={() => handleSelect("Need")}
                    disabled={userChoice !== null}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold transition-all ${
                      userChoice === "Need"
                        ? currentItem.correct === "Need"
                          ? "bg-emerald-500 text-white"
                          : "bg-rose-500 text-white"
                        : "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >

                    <FiCheckCircle size={18} />

                    Classify as Need

                  </button>


                  {/* WANT */}

                  <button
                    type="button"
                    onClick={() => handleSelect("Want")}
                    disabled={userChoice !== null}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold transition-all ${
                      userChoice === "Want"
                        ? currentItem.correct === "Want"
                          ? "bg-amber-500 text-white"
                          : "bg-rose-500 text-white"
                        : "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >

                    <FiHeart size={18} />

                    Classify as Want

                  </button>

                </div>

              </div>


              {/* Feedback */}

              {userChoice && (

                <div className="mt-6 space-y-4">


                  <div
                    className={`rounded-2xl border p-5 text-xs leading-relaxed ${
                      userChoice === currentItem.correct
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                        : "border-rose-500/40 bg-rose-500/10 text-rose-200"
                    }`}
                  >

                    <strong className="block text-sm font-bold">

                      {userChoice === currentItem.correct
                        ? "Correct Classification!"
                        : `Not quite! It's classified as a ${currentItem.correct}.`}

                    </strong>


                    <p className="mt-1">
                      {currentItem.explanation}
                    </p>

                  </div>


                  {/* Next */}

                  {currentIndex < SAMPLE_ITEMS.length - 1 ? (

                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#F4C542] px-6 py-3 text-sm font-bold text-[#0F172A] transition-transform duration-200 hover:scale-[1.02]"
                    >

                      Next Item

                      <FiArrowRight size={16} />

                    </button>

                  ) : (

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02]"
                    >

                      <FiRotateCcw size={16} />

                      Practice Again

                    </button>

                  )}

                </div>

              )}

            </div>

          ) : (

            /* Complete */

            <div className="mt-6 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">

                <FiCheckCircle size={28} />

              </div>


              <p className="mt-5 text-2xl font-bold text-white">
                Activity Complete!
              </p>


              <p className="mt-1 text-sm text-slate-400">
                You correctly classified {score} out of{" "}
                {SAMPLE_ITEMS.length} items.
              </p>


              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F4C542] px-6 py-3 text-sm font-bold text-[#0F172A]"
              >

                <FiRotateCcw size={16} />

                Reset Practice

              </button>

            </div>

          )}

        </div>

      </section>


      {/* ==================================================
          VISUAL PURCHASE DECISION GUIDE
      ================================================== */}

      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-6xl">


          {/* Heading */}

          <div className="max-w-2xl">

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Pause before you purchase.
            </h2>


            <p className="mt-3 text-sm leading-7 text-slate-600">
              Use these questions whenever you are unsure whether something
              belongs in your needs or wants category.
            </p>

          </div>


          {/* Steps */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {DECISION_STEPS.map((step, index) => (

              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {step.number}
                  </span>


                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] text-[#F4C542]">

                    {index === 0 && (
                      <FiHelpCircle size={18} />
                    )}

                    {index === 1 && (
                      <FiClock size={18} />
                    )}

                    {index === 2 && (
                      <FiShoppingBag size={18} />
                    )}

                    {index === 3 && (
                      <FiDollarSign size={18} />
                    )}

                  </div>

                </div>


                <h3 className="mt-4 font-serif text-lg font-bold text-[#0F172A]">
                  {step.title}
                </h3>


                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          EDUCATIONAL NOTE
      ================================================== */}

      <section className="px-6 pb-8">

        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200/80 bg-white p-4 text-xs text-slate-500">

          <p className="flex items-start gap-1.5">

            <FiInfo
              size={14}
              className="mt-0.5 shrink-0 text-[#F4C542]"
            />

            <span>

              <strong>
                Educational Note:
              </strong>{" "}

              An item can shift between a need and a want depending on
              context. For example, a basic phone is often a need for safety
              and communication, whereas upgrading to the latest flagship
              phone every year is a want.

            </span>

          </p>

        </div>

      </section>


      {/* ==================================================
          NEXT LESSON CTA
      ================================================== */}

      <section className="bg-[#FFFBEA] px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

            <div>

              <h2 className="mt-2 font-serif text-3xl font-bold">
                Small spending mistakes can add up.
              </h2>


              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Learn how common money mistakes affect student budgets and
                what you can do differently.
              </p>

            </div>


            <Link
              to="/Learn/MoneyMistakes"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 font-semibold text-white"
            >

              Explore money mistakes

              <FiArrowRight />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}