import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiTarget,
  FiDollarSign,
  FiCalendar,
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiAward,
} from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";

const SAVINGS_TIPS = [
  "Automate your savings! Setting up a recurring transfer on payday ensures you save before spending.",
  "Consider keeping your savings in a high-yield account to earn more interest over time.",
  "Cutting back on one subscription or small daily expense can significantly speed up your timeline.",
  "Review your goal regularly. Even small increases in your monthly contribution make a big difference!",
];

function SavingsGoals() {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");

  const [errors, setErrors] = useState({});
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState(null);
  const [tip, setTip] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    const newErrors = {};

    // 1. Validate Goal Name
    if (!goalName.trim()) {
      newErrors.goalName = "Please enter a name for your goal.";
    }

    // 2. Validate Target Amount
    const numTarget = Number(targetAmount);
    if (!targetAmount.trim()) {
      newErrors.targetAmount = "Target amount is required.";
    } else if (isNaN(numTarget) || numTarget <= 0) {
      newErrors.targetAmount = "Please enter a valid positive number.";
    }

    // 3. Validate Current Savings
    const numCurrent = Number(currentSavings);
    if (currentSavings.trim() === "") {
      newErrors.currentSavings = "Current savings amount is required.";
    } else if (isNaN(numCurrent) || numCurrent < 0) {
      newErrors.currentSavings = "Amount cannot be negative or invalid.";
    }

    // 4. Validate Monthly Contribution
    const numMonthly = Number(monthlyContribution);
    if (monthlyContribution.trim() === "") {
      newErrors.monthlyContribution = "Monthly contribution is required.";
    } else if (isNaN(numMonthly) || numMonthly < 0) {
      newErrors.monthlyContribution = "Amount cannot be negative or invalid.";
    }

    // Check if target <= current savings
    if (!newErrors.targetAmount && !newErrors.currentSavings && numTarget <= numCurrent) {
      newErrors.targetAmount = "Target amount must be greater than current savings.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setCalculated(false);
      return;
    }

    // Clear errors & perform calculation
    setErrors({});

    const remainingAmount = Math.max(0, numTarget - numCurrent);
    
    // Calculate months needed
    let monthsNeeded = 0;
    if (remainingAmount > 0) {
      if (numMonthly === 0) {
        monthsNeeded = Infinity;
      } else {
        monthsNeeded = Math.ceil(remainingAmount / numMonthly);
      }
    }

    const percentage = Math.min(100, Math.round((numCurrent / numTarget) * 100));

    // Pick a random savings tip
    const randomTip = SAVINGS_TIPS[Math.floor(Math.random() * SAVINGS_TIPS.length)];

    setResult({
      goalName,
      targetAmount: numTarget,
      currentSavings: numCurrent,
      monthlyContribution: numMonthly,
      remainingAmount,
      monthsNeeded,
      percentage,
    });

    setTip(randomTip);
    setCalculated(true);
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatMonthsText = (months) => {
    if (months === Infinity) return "Infinite (no monthly contribution)";
    if (months === 0) return "Goal already reached!";
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0) {
      return `${years} yr${years > 1 ? "s" : ""} ${
        remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}` : ""
      } (${months} months)`;
    }
    return `${months} month${months > 1 ? "s" : ""}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0F172A]"
        >
          <FiArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#F4C542]">
            Interactive Budget Tool
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-[#0F172A] md:text-5xl">
            Savings Goal Calculator
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Set your target, track your current progress, and see how long it will take to reach your financial milestones.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Form Section */}
          <div className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-xl lg:col-span-5 md:p-8">
            <h2 className="font-serif text-2xl font-semibold">Set Your Goal</h2>
            <p className="mt-2 text-xs text-slate-400">
              Enter your target details to calculate your timeline.
            </p>

            <form onSubmit={handleCalculate} className="mt-6 space-y-4">
              {/* Goal Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Goal Name
                </label>
                <div className="relative mt-1.5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <FiTarget size={18} />
                  </span>
                  <input
                    type="text"
                    value={goalName}
                    onChange={(e) => setGoalName(e.target.value)}
                    placeholder="e.g. Emergency Fund, Laptop"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
                  />
                </div>
                {errors.goalName && (
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                    <FiAlertCircle size={12} /> {errors.goalName}
                  </p>
                )}
              </div>

              {/* Target Amount */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Target Amount (₦)
                </label>
                <div className="relative mt-1.5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <TbCurrencyNaira size={18} />
                  </span>
                  <input
                    type="number"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    placeholder="e.g. 500000"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
                  />
                </div>
                {errors.targetAmount && (
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                    <FiAlertCircle size={12} /> {errors.targetAmount}
                  </p>
                )}
              </div>

              {/* Current Savings */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Current Savings (₦)
                </label>
                <div className="relative mt-1.5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <TbCurrencyNaira size={18} />
                  </span>
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
                    placeholder="e.g. 100000"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
                  />
                </div>
                {errors.currentSavings && (
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                    <FiAlertCircle size={12} /> {errors.currentSavings}
                  </p>
                )}
              </div>

              {/* Monthly Contribution */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Expected Monthly Savings (₦)
                </label>
                <div className="relative mt-1.5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <FiCalendar size={18} />
                  </span>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    placeholder="e.g. 25000"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
                  />
                </div>
                {errors.monthlyContribution && (
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                    <FiAlertCircle size={12} /> {errors.monthlyContribution}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-[#F4C542] py-3.5 text-sm font-bold text-[#0F172A] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Calculate Timeline
              </button>
            </form>
          </div>

          {/* Results Display */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm lg:col-span-7 md:p-8">
            {calculated && result ? (
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Goal Progress
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0F172A]">
                      {result.goalName}
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#F4C542]/20 px-3 py-1 text-sm font-bold text-[#0F172A]">
                    {result.percentage}% Complete
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs font-semibold text-slate-500">
                    <span>Saved: {formatCurrency(result.currentSavings)}</span>
                    <span>Target: {formatCurrency(result.targetAmount)}</span>
                  </div>
                  <div className="mt-2 h-4 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                      style={{ width: `${result.percentage}%` }}
                    />
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Remaining Amount
                    </p>
                    <p className="mt-1 font-serif text-2xl font-bold text-[#0F172A]">
                      {formatCurrency(result.remainingAmount)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Estimated Time Needed
                    </p>
                    <p className="mt-1 font-serif text-xl font-bold text-emerald-600">
                      {formatMonthsText(result.monthsNeeded)}
                    </p>
                  </div>
                </div>

                {/* Encourage Tip Box */}
                <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-emerald-900">
                  <div className="flex items-start gap-3">
                    <FiAward size={20} className="mt-0.5 shrink-0 text-emerald-600" />
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wide text-emerald-700">
                        Savings Tip
                      </strong>
                      <p className="mt-1 text-xs leading-relaxed text-emerald-800">
                        {tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty State Placeholder */
              <div className="flex h-full min-h-75 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <FiTarget size={24} />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-600">
                  No Goal Calculated Yet
                </p>
                <p className="mt-1 max-w-xs text-xs text-slate-400">
                  Fill out your goal name, target amount, current savings, and expected contribution to see your progress chart.
                </p>
              </div>
            )}

            {/* Educational Disclaimer */}
            <div className="mt-6 border-t border-slate-100 pt-4 text-[11px] text-slate-400">
              <p className="flex items-start gap-1.5">
                <FiInfo size={14} className="shrink-0 text-[#F4C542]" />
                <span>
                  <strong>Educational Note:</strong> This calculation is an estimate for educational purposes only. It assumes a constant monthly contribution and does not account for potential interest or market returns.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingsGoals;