// import { Link } from "react-router-dom";
// import { BiChevronDown } from "react-icons/bi";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useState } from "react";
// import BudgetBasicsLogo from "../assets/budget_logo.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [learnOpen, setLearnOpen] = useState(false);
//   const [toolsOpen, setToolsOpen] = useState(false);

//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setLearnOpen(false);
//     setToolsOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
//       <nav className="mx-auto flex h-19 max-w-350 items-center justify-between px-6">

//         {/* Logo */}
//         <Link
//           to="/"
//           onClick={closeMobileMenu}
//           className="flex items-center gap-2.5"
//         >
//           <div className="flex h-10.5 w-10.5 items-center justify-center rounded-xl bg-[#F4C542]">
//             <img 
//               src={BudgetBasicsLogo} 
//               alt="BudgetBasics Logo" 
//               className="h-full w-full object-cover rounded-xl"
//             />
//           </div>

//           <div>
//             <p className="font-serif text-[22px] font-bold leading-none text-[#0F172A]">
//               BudgetBasics
//             </p>

//             <p className="mt-1 text-[10px] font-medium uppercase tracking-[2px] text-slate-500">
//               Money made simple
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-7.5 md:flex">

//           <Link
//             to="/"
//             className="text-[14px] font-medium text-[#0F172A] transition hover:text-[#F4C542]"
//           >
//             Home
//           </Link>

//           {/* Learn */}
//           <div className="group relative">
//             <button className="flex items-center gap-1.25 text-[14px] font-medium text-[#0F172A] hover:text-[#F4C542]">
//               Learn
//               <BiChevronDown size={15} />
//             </button>

//             <div className="absolute left-0 top-7.5 w-55 rounded-[14px] border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

//               <Link
//                 to="/learn/budgeting-basics"
//                 className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542]"
//               >
//                 Budgeting Basics
//               </Link>

//               <Link
//                 to="/learn/needs-wants"
//                 className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542]"
//               >
//                 Needs vs Wants
//               </Link>

//               <Link
//                 to="/learn/money-mistakes"
//                 className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50"
//               >
//                 Money Mistakes
//               </Link>

//             </div>
//           </div>

//           {/* Tools */}
//           <div className="group relative">
//             <button className="flex items-center gap-1.25 text-[14px] font-medium text-[#0F172A] hover:text-[#F4C542]">
//               Tools
//               <BiChevronDown size={15} />
//             </button>

//             <div className="absolute left-0 top-7.5 w-55 rounded-[14px] border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

//               <Link
//                 to="/tools/50-30-20"
//                 className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542]"
//               >
//                 50 / 30 / 20
//               </Link>

//               <Link
//                 to="/tools/savings-goals"
//                 className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50"
//               >
//                 Savings Goals
//               </Link>

//               <Link
//                 to="/tools/expense-planner"
//                 className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542]"
//               >
//                 Expense Planner
//               </Link>

//             </div>
//           </div>

//           <Link
//             to="/gallery"
//             className="text-[14px] font-medium text-[#0F172A] transition hover:text-[#F4C542]"
//           >
//             Gallery
//           </Link>

//           <Link
//             to="/about"
//             className="text-[14px] font-medium text-[#0F172A] transition hover:text-[#F4C542]"
//           >
//             About
//           </Link>

//         </div>

//         {/* CTA */}
//         <Link
//           to="/learn/budgeting-basics"
//           className="hidden rounded-[10px] bg-[#0F172A] px-5 py-2.75 text-[14px] font-semibold text-white transition hover:bg-[#F4C542] hover:text-[#0F172A] md:block"
//         >
//           Get Started
//         </Link>

//         {/* Mobile Hamburger Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0F172A] hover:bg-slate-100 md:hidden hover:cursor-pointer hover:text-[#F4C542]"
//           aria-label="Toggle Navigation Menu"
//         >
//           {isOpen ? (
//             <FiX size={24} />
//           ) : (
//             <FiMenu size={24} />
//           )}
//         </button>

//       </nav>

//       {/* Mobile Slide-down Menu */}
//       {isOpen && (
//         <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 md:hidden">
//           <div className="flex flex-col gap-3">

//             <Link
//               to="/"
//               onClick={closeMobileMenu}
//               className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542]"
//             >
//               Home
//             </Link>

//             {/* Mobile Accordion: Learn */}
//             <div>
//               <button
//                 onClick={() => setLearnOpen(!learnOpen)}
//                 className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542]"
//               >
//                 <span>Learn</span>

//                 <BiChevronDown
//                   size={18}
//                   className={`transition-transform duration-200 ${
//                     learnOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {learnOpen && (
//                 <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">

//                   <Link
//                     to="/learn/budgeting-basics"
//                     onClick={closeMobileMenu}
//                     className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A]"
//                   >
//                     Budgeting Basics
//                   </Link>

//                   <Link
//                     to="/learn/needs-wants"
//                     onClick={closeMobileMenu}
//                     className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A]"
//                   >
//                     Needs vs Wants
//                   </Link>

//                   <Link
//                     to="/learn/money-mistakes"
//                     onClick={closeMobileMenu}
//                     className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A]"
//                   >
//                     Money Mistakes
//                   </Link>

//                 </div>
//               )}
//             </div>

//             {/* Mobile Accordion: Tools */}
//             <div>
//               <button
//                 onClick={() => setToolsOpen(!toolsOpen)}
//                 className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542]"
//               >
//                 <span>Tools</span>

//                 <BiChevronDown
//                   size={18}
//                   className={`transition-transform duration-200 ${
//                     toolsOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {toolsOpen && (
//                 <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">

//                   <Link
//                     to="/tools/50-30-20"
//                     onClick={closeMobileMenu}
//                     className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A]"
//                   >
//                     50 / 30 / 20
//                   </Link>

//                   <Link
//                     to="/tools/savings-goals"
//                     onClick={closeMobileMenu}
//                     className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A]"
//                   >
//                     Savings Goals
//                   </Link>

//                   <Link
//                     to="/tools/expense-planner"
//                     onClick={closeMobileMenu}
//                     className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A]"
//                   >
//                     Expense Planner
//                   </Link>

//                 </div>
//               )}
//             </div>

//             <Link
//               to="/gallery"
//               onClick={closeMobileMenu}
//               className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542]"
//             >
//               Gallery
//             </Link>

//             <Link
//               to="/about"
//               onClick={closeMobileMenu}
//               className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542]"
//             >
//               About
//             </Link>

//             <Link
//               to="/learn/budgeting-basics"
//               onClick={closeMobileMenu}
//               className="mt-2 block w-full rounded-[10px] bg-[#0F172A] py-3 text-center text-[14px] font-semibold text-white hover:text-[#F4C542]"
//             >
//               Get Started
//             </Link>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import BudgetBasicsLogo from "../assets/budget_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  // Theme state setup (defaults to dark or light based on localStorage/preference)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setLearnOpen(false);
    setToolsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900">
      <nav className="mx-auto flex h-19 max-w-350 items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-10.5 w-10.5 items-center justify-center rounded-xl bg-[#F4C542]">
            <img 
              src={BudgetBasicsLogo} 
              alt="BudgetBasics Logo" 
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div>
            <p className="font-serif text-[22px] font-bold leading-none text-[#0F172A] dark:text-white">
              BudgetBasics
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[2px] text-slate-500 dark:text-slate-400">
              Money made simple
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7.5 md:flex">

          <Link
            to="/"
            className="text-[14px] font-medium text-[#0F172A] transition hover:text-[#F4C542] dark:text-slate-200 dark:hover:text-[#F4C542]"
          >
            Home
          </Link>

          {/* Learn */}
          <div className="group relative">
            <button className="flex items-center gap-1.25 text-[14px] font-medium text-[#0F172A] hover:text-[#F4C542] dark:text-slate-200 dark:hover:text-[#F4C542]">
              Learn
              <BiChevronDown size={15} />
            </button>

            <div className="absolute left-0 top-7.5 w-55 rounded-[14px] border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">

              <Link
                to="/Learn/BudgetBasics"
                className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F4C542]"
              >
                Budgeting Basics
              </Link>

              <Link
                to="/Learn/Needs_Wants"
                className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F4C542]"
              >
                Needs vs Wants
              </Link>

              <Link
                to="/learn/MoneyMistakes"
                className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F4C542]"
              >
                Money Mistakes
              </Link>

            </div>
          </div>

          {/* Tools */}
          <div className="group relative">
            <button className="flex items-center gap-1.25 text-[14px] font-medium text-[#0F172A] hover:text-[#F4C542] dark:text-slate-200 dark:hover:text-[#F4C542]">
              Tools
              <BiChevronDown size={15} />
            </button>

            <div className="absolute left-0 top-7.5 w-55 rounded-[14px] border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">

              <Link
                to="/Tools/Budget50_30_20"
                className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F4C542]"
              >
                50 / 30 / 20
              </Link>

              <Link
                to="/Tools/SavingsGoals"
                className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F4C542]"
              >
                Savings Goals
              </Link>

              <Link
                to="/tools/ExpensePlanner"
                className="block rounded-[10px] px-3.5 py-2.75 text-[14px] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F4C542]"
              >
                Expense Planner
              </Link>

            </div>
          </div>

          <Link
            to="/gallery"
            className="text-[14px] font-medium text-[#0F172A] transition hover:text-[#F4C542] dark:text-slate-200 dark:hover:text-[#F4C542]"
          >
            Gallery
          </Link>

          <Link
            to="/about"
            className="text-[14px] font-medium text-[#0F172A] transition hover:text-[#F4C542] dark:text-slate-200 dark:hover:text-[#F4C542]"
          >
            About
          </Link>

        </div>

        {/* Action Controls (CTA + Theme Toggle) */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0F172A] transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Desktop CTA */}
          <Link
            to="/Learn/BudgetBasics"
            className="hidden rounded-[10px] bg-[#0F172A] px-5 py-2.75 text-[14px] font-semibold text-white transition hover:bg-[#F4C542] hover:text-[#0F172A] dark:bg-white dark:text-[#0F172A] dark:hover:bg-[#F4C542] md:block"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0F172A] transition hover:bg-slate-100 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

        </div>

      </nav>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-3">

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Home
            </Link>

            {/* Mobile Accordion: Learn */}
            <div>
              <button
                onClick={() => setLearnOpen(!learnOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span>Learn</span>
                <BiChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    learnOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {learnOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3 dark:border-slate-800">
                  <Link
                    to="/Learn/BudgetBasics"
                    onClick={closeMobileMenu}
                    className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white"
                  >
                    Budgeting Basics
                  </Link>

                  <Link
                    to="/Learn/Needs_Wants"
                    onClick={closeMobileMenu}
                    className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white"
                  >
                    Needs vs Wants
                  </Link>

                  <Link
                    to="/Learn/MoneyMistakes"
                    onClick={closeMobileMenu}
                    className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white"
                  >
                    Money Mistakes
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion: Tools */}
            <div>
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span>Tools</span>
                <BiChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    toolsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {toolsOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3 dark:border-slate-800">
                  <Link
                    to="/Tools/Budget50_30_20"
                    onClick={closeMobileMenu}
                    className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white"
                  >
                    50 / 30 / 20
                  </Link>

                  <Link
                    to="/tools/SavingsGoals"
                    onClick={closeMobileMenu}
                    className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white"
                  >
                    Savings Goals
                  </Link>

                  <Link
                    to="/tools/ExpensePlanner"
                    onClick={closeMobileMenu}
                    className="py-1.5 text-[14px] text-slate-600 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white"
                  >
                    Expense Planner
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Gallery
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#F4C542] dark:text-slate-200 dark:hover:bg-slate-800"
            >
              About
            </Link>

            <Link
              to="/Learn/BudgetBasics"
              onClick={closeMobileMenu}
              className="mt-2 block w-full rounded-[10px] bg-[#0F172A] py-3 text-center text-[14px] font-semibold text-white hover:text-[#F4C542] dark:bg-white dark:text-[#0F172A] dark:hover:bg-[#F4C542]"
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;