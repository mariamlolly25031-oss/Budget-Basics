import { Link } from "react-router-dom";
import BudgetBasicsLogo from "../assets/budget_logo.png";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white transition-colors duration-200 dark:bg-slate-950">

      <div className="mx-auto grid max-w-350 gap-10 px-6 py-17.5 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-5">
            <div className="flex h-10.5 w-10.5 items-center justify-center rounded-xl bg-[#F4C542] text-[22px]">
              <img 
                src={BudgetBasicsLogo} 
                alt="BudgetBasics Logo" 
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <span className="font-serif text-[22px] font-bold">
              BudgetBasics
            </span>
          </div>

          <p className="mt-5 max-w-70 text-[14px] leading-[1.8] text-slate-400">
            Simple, student-friendly financial education for building better
            money habits.
          </p>
        </div>

        {/* Learn */}
        <div>
          <h3 className="mb-4.5 text-[14px] font-semibold uppercase tracking-[1.5px] text-[#F4C542]">
            Learn
          </h3>

          <div className="flex flex-col gap-4 text-[14px] text-slate-300">
            <Link to="/Learn/BudgetBasics" className="hover:text-[#F4C542]">Budgeting Basics</Link>
            <Link to="/Learn/Needs_Wants" className="hover:text-[#F4C542]">Needs vs Wants</Link>
            <Link to="/Learn/MoneyMistakes" className="hover:text-[#F4C542]">Money Mistakes</Link>
            <Link to="/Gallery" className="hover:text-[#F4C542]">Infographics & Gallery</Link>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="mb-4.5 text-[14px] font-semibold uppercase tracking-[1.5px] text-[#F4C542]">
            Tools
          </h3>

          <div className="flex flex-col gap-4 text-[14px] text-slate-300">
            <Link to="/Tools/Budget50_30_20" className="hover:text-[#F4C542]">50 / 30 / 20</Link>
            <Link to="/Tools/SavingsGoals" className="hover:text-[#F4C542]">Savings Goals</Link>
            <Link to="/Tools/ExpensePlanner" className="hover:text-[#F4C542]">Expense Planner</Link>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-4.5 text-[14px] font-semibold uppercase tracking-[1.5px] text-[#F4C542]">
            Explore
          </h3>

          <div className="flex flex-col gap-4 text-[14px] text-slate-300">
            <Link to="/about" className="hover:text-[#F4C542]">About Us</Link>
            <Link to="/feedback" className="hover:text-[#F4C542]">Feedback</Link>
            <Link to="/contact" className="hover:text-[#F4C542]">Contact Us</Link>
            <Link to="/sitemap" className="hover:text-[#F4C542]">Sitemap</Link>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-350 flex-col gap-2.5 px-6 py-5.5 text-[12px] text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 BudgetBasics. Educational purposes only.
          </p>

          <p>
            Not banking. Not financial advice.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;