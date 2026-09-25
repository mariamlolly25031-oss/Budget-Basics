import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiHeart,
  FiTrendingUp,
  FiInfo,
  FiAlertCircle,
  FiDollarSign,
} from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";

function Budget50_30_20() {
  const [incomeInput, setIncomeInput] = useState("");
  const [error, setError] = useState("");
  const [calculated, setCalculated] = useState(false);
  const [breakdown, setBreakdown] = useState({ needs: 0, wants: 0, savings: 0 });

  const handleCalculate = (e) => {
    e.preventDefault();

    // 1. Validate blank input
    if (!incomeInput.trim()) {
      setError("Please enter a monthly income amount.");
      setCalculated(false);
      return;
    }

    const numericIncome = Number(incomeInput);

    // 2. Validate invalid/negative/zero inputs
    if (isNaN(numericIncome) || numericIncome <= 0) {
      setError("Please enter a valid positive number.");
      setCalculated(false);
      return;
    }

    // 3. Perform calculations
    setError("");
    setBreakdown({
      needs: numericIncome * 0.5,
      wants: numericIncome * 0.3,
      savings: numericIncome * 0.2,
    });
    setCalculated(true);
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Navigation Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0F172A]"
        >
          <FiArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#F4C542]">
            Interactive Budget Tool
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-[#0F172A] md:text-5xl">
            50/30/20 Calculator
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            A simple rule of thumb to help you divide your monthly income into
            three balanced categories: Essentials, Enjoyment, and Savings.
          </p>
        </div>

        {/* ================= SECTION 1: EXPLANATION ================= */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Needs */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#0F172A]">
              <FiCheckCircle size={20} />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-xl font-semibold text-[#0F172A]">
                Needs
              </h3>
              <span className="text-sm font-bold text-slate-500">50%</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Essential expenses you cannot avoid. Includes housing, food,
              utilities, transport, and necessary bills.
            </p>
          </div>

          {/* Wants */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#F4C542]">
              <FiHeart size={20} />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-xl font-semibold text-[#0F172A]">
                Wants
              </h3>
              <span className="text-sm font-bold text-[#F4C542]">30%</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Non-essential spending that improves lifestyle. Includes dining
              out, entertainment, hobbies, and personal shopping.
            </p>
          </div>

          {/* Savings */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiTrendingUp size={20} />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-xl font-semibold text-[#0F172A]">
                Savings
              </h3>
              <span className="text-sm font-bold text-emerald-500">20%</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Money set aside for future security. Includes emergency funds,
              investments, and debt repayment goals.
            </p>
          </div>
        </div>

        {/* ================= SECTION 2: CALCULATOR ================= */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Form Input Card */}
          <div className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-xl lg:col-span-5 md:p-8">
            <h2 className="font-serif text-2xl font-semibold">
              Calculate Your Budget
            </h2>
            <p className="mt-2 text-xs text-slate-400">
              Enter your total expected monthly income below to see the
              suggested split.
            </p>

            <form onSubmit={handleCalculate} className="mt-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Monthly Income (₦)
              </label>
              <div className="relative mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <TbCurrencyNaira size={18} />
                </span>
                <input
                  type="number"
                  value={incomeInput}
                  onChange={(e) => {
                    setIncomeInput(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="e.g. 100000"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm font-medium text-white placeholder-slate-500 outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-rose-400">
                  <FiAlertCircle size={14} />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-[#F4C542] py-3.5 text-sm font-bold text-[#0F172A] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Calculate Breakdown
              </button>
            </form>

            <div className="mt-6 border-t border-white/10 pt-4 text-[11px] text-slate-400">
              <p className="flex items-start gap-1.5">
                <FiInfo size={14} className="shrink-0 text-[#F4C542]" />
                <span>
                  <strong>Formula used:</strong> Needs (Income × 0.50), Wants
                  (Income × 0.30), Savings (Income × 0.20).
                </span>
              </p>
            </div>
          </div>

          {/* Output Display Card */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm lg:col-span-7 md:p-8">
            <h2 className="font-serif text-2xl font-semibold text-[#0F172A]">
              Suggested Split
            </h2>

            {calculated ? (
              <div className="mt-6 space-y-6">
                {/* 1. Needs Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="flex items-center gap-2 text-[#0F172A]">
                      <FiCheckCircle size={16} /> Needs (50%)
                    </span>
                    <span className="text-[#0F172A]">
                      {formatCurrency(breakdown.needs)}
                    </span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#0F172A] transition-all duration-500"
                      style={{ width: "50%" }}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Target for rent, utilities, food, and basic necessities.
                  </p>
                </div>

                {/* 2. Wants Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="flex items-center gap-2 text-[#0F172A]">
                      <FiHeart size={16} className="text-[#F4C542]" /> Wants (30%)
                    </span>
                    <span className="text-[#0F172A]">
                      {formatCurrency(breakdown.wants)}
                    </span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#F4C542] transition-all duration-500"
                      style={{ width: "30%" }}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Target for leisure, subscriptions, dining out, and hobbies.
                  </p>
                </div>

                {/* 3. Savings Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="flex items-center gap-2 text-[#0F172A]">
                      <FiTrendingUp size={16} className="text-emerald-500" /> Savings (20%)
                    </span>
                    <span className="text-[#0F172A]">
                      {formatCurrency(breakdown.savings)}
                    </span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Target for emergency savings and future personal goals.
                  </p>
                </div>

                {/* Breakdown Summary Box */}
                <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Total Monthly Income:</span>
                    <span className="font-bold text-[#0F172A]">
                      {formatCurrency(Number(incomeInput))}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty State Placeholder */
              <div className="flex h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <TbCurrencyNaira size={24} />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-600">
                  No calculation yet
                </p>
                <p className="mt-1 max-w-xs text-xs text-slate-400">
                  Enter an income amount in the calculator to view your suggested breakdown.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ================= SECTION 3: EDUCATIONAL DISCLAIMER ================= */}
        <div className="mt-10 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 text-amber-900">
          <div className="flex items-start gap-3">
            <FiInfo size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <div className="text-xs leading-relaxed">
              <strong className="font-bold">Educational Note:</strong> This calculation is an estimate intended strictly for learning and educational purposes. The 50/30/20 split is a general framework and may be adjusted to better fit your personal circumstances, location, and financial goals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget50_30_20;