import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiDollarSign,
  FiInfo,
  FiCheck,
  FiX,
  FiPieChart,
} from "react-icons/fi";

const CATEGORIES = [
  "Food",
  "Transport",
  "Education",
  "Entertainment",
  "Shopping",
  "Utilities",
  "Miscellaneous",
];

function ExpensePlanner() {
  const [budget, setBudget] = useState(100000);
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      date: "2026-09-20",
      category: "Food",
      description: "Weekly Groceries",
      amount: 15000,
    },
    {
      id: "2",
      date: "2026-09-22",
      category: "Transport",
      description: "Monthly Bus Pass",
      amount: 8000,
    },
  ]);

  // Form state
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    date: "",
    category: CATEGORIES[0],
    description: "",
    amount: "",
  });

  // Calculate totals
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const remainingBalance = budget - totalExpenses;

  // Format currency helper
  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Add Expense
  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!date || !description.trim() || !amount) {
      setError("Please fill in all fields (date, description, and amount).");
      return;
    }

    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Please enter a valid positive expense amount.");
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      date,
      category,
      description: description.trim(),
      amount: numAmount,
    };

    setExpenses([newExpense, ...expenses]);
    setDate("");
    setDescription("");
    setAmount("");
    setCategory(CATEGORIES[0]);
    setError("");
  };

  // Delete Expense
  const handleDelete = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  // Start Editing Inline
  const handleStartEdit = (item) => {
    setEditingId(item.id);
    setEditForm({
      date: item.date,
      category: item.category,
      description: item.description,
      amount: item.amount.toString(),
    });
  };

  // Save Edit
  const handleSaveEdit = (id) => {
    const numAmount = Number(editForm.amount);
    if (!editForm.date || !editForm.description.trim() || isNaN(numAmount) || numAmount <= 0) {
      return;
    }

    setExpenses(
      expenses.map((item) =>
        item.id === id
          ? {
              ...item,
              date: editForm.date,
              category: editForm.category,
              description: editForm.description.trim(),
              amount: numAmount,
            }
          : item
      )
    );
    setEditingId(null);
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
            Expense Planner Demonstration
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Log, categorize, and modify sample expenses in real time to understand how everyday spending impacts your monthly budget.
          </p>
        </div>

        {/* Budget Overview Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/* Sample Budget */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sample Budget
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-[#0F172A]">
                {formatCurrency(budget)}
              </span>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value) || 0)}
                title="Edit Budget"
                className="w-24 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-right text-xs font-semibold text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#F4C542]"
              />
            </div>
          </div>

          {/* Planned Expenses */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Total Planned Expenses
            </p>
            <p className="mt-2 font-serif text-2xl font-bold text-rose-500">
              {formatCurrency(totalExpenses)}
            </p>
          </div>

          {/* Remaining Balance */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Remaining Balance
            </p>
            <p
              className={`mt-2 font-serif text-2xl font-bold ${
                remainingBalance < 0 ? "text-rose-600" : "text-emerald-500"
              }`}
            >
              {formatCurrency(remainingBalance)}
            </p>
          </div>
        </div>

        {/* Add Expense Form Card */}
        <div className="mt-8 rounded-3xl bg-[#0F172A] p-6 text-white shadow-xl md:p-8">
          <h2 className="font-serif text-xl font-semibold">Add New Expense</h2>
          <form onSubmit={handleAddExpense} className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Date Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
              />
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#0F172A] px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Description
              </label>
              <input
                type="text"
                placeholder="e.g. Lunch with team"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Amount (₦)
              </label>
              <input
                type="number"
                placeholder="e.g. 2500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542]"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-4">
              {error && <p className="mb-2 text-xs text-rose-400">{error}</p>}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4C542] px-6 py-2.5 text-sm font-bold text-[#0F172A] transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                <FiPlus size={16} /> Add Entry
              </button>
            </div>
          </form>
        </div>

        {/* Expenses On-Screen Table */}
        <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between pb-4">
            <h2 className="font-serif text-xl font-semibold text-[#0F172A]">
              Temporary Session Log
            </h2>
            <span className="text-xs font-semibold text-slate-400">
              {expenses.length} Entry{expenses.length !== 1 ? "s" : ""}
            </span>
          </div>

          {expenses.length === 0 ? (
            <div className="flex h-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center">
              <FiPieChart size={24} className="text-slate-300" />
              <p className="mt-2 text-sm font-semibold text-slate-600">
                No expense entries added
              </p>
              <p className="text-xs text-slate-400">
                Fill out the form above to add temporary entries for this session.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <tr>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Description</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {expenses.map((item) =>
                    editingId === item.id ? (
                      /* Editing Row */
                      <tr key={item.id} className="bg-amber-50/40">
                        <td className="py-3 px-4">
                          <input
                            type="date"
                            value={editForm.date}
                            onChange={(e) =>
                              setEditForm({ ...editForm, date: e.target.value })
                            }
                            className="rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <select
                            value={editForm.category}
                            onChange={(e) =>
                              setEditForm({ ...editForm, category: e.target.value })
                            }
                            className="rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                          >
                            {CATEGORIES.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="py-3 px-4">
                          <input
                            type="text"
                            value={editForm.description}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                description: e.target.value,
                              })
                            }
                            className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <input
                            type="number"
                            value={editForm.amount}
                            onChange={(e) =>
                              setEditForm({ ...editForm, amount: e.target.value })
                            }
                            className="w-24 rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                          />
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleSaveEdit(item.id)}
                              className="rounded p-1 text-emerald-600 hover:bg-emerald-100"
                              title="Save Changes"
                            >
                              <FiCheck size={16} />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="rounded p-1 text-rose-500 hover:bg-rose-100"
                              title="Cancel Edit"
                            >
                              <FiX size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      /* Display Row */
                      <tr key={item.id} className="hover:bg-slate-50/60">
                        <td className="py-3 px-4 font-mono text-xs">{item.date}</td>
                        <td className="py-3 px-4">
                          <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium text-[#0F172A]">
                          {item.description}
                        </td>
                        <td className="py-3 px-4 font-semibold text-[#0F172A]">
                          {formatCurrency(item.amount)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end gap-2 text-slate-400">
                            <button
                              onClick={() => handleStartEdit(item)}
                              className="rounded p-1 transition-colors hover:text-[#0F172A]"
                              title="Edit Entry"
                            >
                              <FiEdit2 size={15} />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="rounded p-1 transition-colors hover:text-rose-600"
                              title="Remove Entry"
                            >
                              <FiTrash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Educational Note */}
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 text-slate-600">
          <div className="flex items-start gap-3">
            <FiInfo size={18} className="mt-0.5 shrink-0 text-[#F4C542]" />
            <div className="text-xs leading-relaxed">
              <strong className="font-bold text-[#0F172A]">Educational Note:</strong> This demonstration session is stored in temporary browser memory for learning purposes. Reloading or navigating away will reset the session log.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensePlanner;