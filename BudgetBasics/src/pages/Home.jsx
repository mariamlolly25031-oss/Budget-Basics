import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiTarget, FiTrendingUp } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import budgetChart from "../assets/budgetChart2.0.png";
import { FaLightbulb } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import heroVideo from "../assets/heroVideo.mp4"; 

function Home() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-[#0F172A] min-h-[85vh] flex items-center">
        
        {/* Background Video */}
        <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay to maintain high text contrast */}
        <div className="absolute inset-0 bg-[#0F172A]/30 z-10" />

        {/* Content Container */}
        <div className="relative z-20 mx-auto max-w-350 px-8 py-20 w-full">
          <div className="max-w-225">

            <h1 className="max-w-175 font-serif text-[52px] font-semibold leading-[1.05] text-white md:text-[72px]">
              Make your money
              <span className="block text-[#F4C542]">
                make sense.
              </span>
            </h1>

            <p className="mt-6.25 max-w-175 text-[17px] leading-[1.8] text-slate-200">
              Understand your income, manage your expenses, separate needs
              from wants, and build better saving habits; one simple lesson
              at a time.
            </p>

            <div className="mt-8.75 flex flex-wrap gap-3">
              <Link
                to="/Learn/BudgetBasics"
                className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#F4C542] px-5.5 py-3.5 text-[14px] font-bold text-[#0F172A] transition-transform duration-200 hover:scale-105"
              >
                Start Learning
                <FiArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/Tools/Budget50_30_20"
                className="inline-flex items-center gap-2.5 rounded-[10px] border border-white/20 bg-white/10 backdrop-blur-sm px-5.5 py-3.5 text-[14px] font-semibold text-white transition-transform duration-200 hover:scale-105"
              >
                Explore Budget Tools
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-[#F8FAFC] px-6 py-12">
        <div className="mx-auto max-w-300">
          <div className="max-w-175">

            <h2 className="mt-3 font-serif text-[40px] font-semibold leading-[1.15] text-[#0F172A] md:text-[50px]">
              Your money has a story.
              <br />
              Learn how to read it.
            </h2>

            <p className="mt-4.5 text-[16px] leading-[1.8] text-slate-600">
              BudgetBasics breaks personal budgeting into simple ideas you
              can understand and actually use.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <div className="rounded-[20px] bg-white p-6.25 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <TbCurrencyNaira size={25} />
              </div>

              <h3 className="mt-5 Playfair text-[23px] font-semibold">
                Income
              </h3>

              <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">
                Understand where your money comes from and what you actually
                have available to spend.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-6.25 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <FiTrendingUp size={20} />
              </div>

              <h3 className="mt-5 Playfair text-[23px] font-semibold">
                Expenses
              </h3>

              <p className="mt-2.5 text-[13px] leading-[1.7] text-slate-500">
                See where your money goes and learn to recognise spending
                patterns.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-6.25 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <FiCheckCircle size={20} />
              </div>

              <h3 className="mt-5 text-[23px] Playfair">
                Needs & Wants
              </h3>

              <p className="mt-2.5 text-[13px] leading-[1.7] text-slate-500">
                Learn the difference between essential spending and optional
                purchases.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-6.25 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <FiTarget size={20} />
              </div>

              <h3 className="mt-5 Playfair text-[23px] font-semibold">
                Savings
              </h3>

              <p className="mt-2.5 text-[13px] leading-[1.7] text-slate-500">
                Set simple goals and understand how long it may take to reach
                them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 50/30/20 ================= */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto grid max-w-300 items-center gap-15 md:grid-cols-2">
          <div>
            
            <h2 className="mt-3 Playfair text-[42px] font-semibold leading-[1.1] text-[#0F172A]">
              Meet the
              <br />
              50 / 30 / 20 rule.
            </h2>

            <p className="mt-5 max-w-130 text-[15px] leading-[1.8] text-slate-600">
              Explore a suggested way to divide a monthly income between
              needs, wants, and savings. Use it as a learning guideline, not
              a fixed rule.
            </p>

            <Link
              to="/Tools/Budget50_30_20"
              className="mt-6.25 inline-flex items-center gap-2 text-[14px] font-bold text-[#0F172A]"
            >
              Try the calculator
              <FiArrowRight size={20} className="hover:transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 50_30_20 Chart */}
          <div className="rounded-[25px] p-4 md:p-8">
            <div className="grid gap-3">
              <img 
                src={budgetChart} 
                alt="50_30_20_Chart" 
                className="h-76 w-76 rounded-xl object-cover"
              />
            </div>
          </div>    
        </div>
      </section>

      {/* ================= TIPS ================= */}
      <section className="bg-[#F8FAFC] px-6 py-18">
        <div className="mx-auto max-w-300">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>

              <h2 className="mt-3 Playfair text-[40px] font-semibold">
                Small habits matter.
              </h2>
            </div>

            <Link
              to="/Learn/MoneyMistakes"
              className="flex items-center gap-2 text-[14px] font-semibold"
            >
              Explore money mistakes
              <FiArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1"/>
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-[20px] bg-white p-7">
              <span className="text-[30px]"><FaLightbulb size={27}/></span>

              <h3 className="mt-5 Playfair text-[23px] font-semibold">
                Track the small stuff
              </h3>

              <p className="mt-2 text-[13px] leading-[1.8] text-slate-500">
                Small purchases can become a large part of your spending
                when they happen repeatedly.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-7">
              <span className="text-[30px]"><FaShoppingCart size={27}/></span>

              <h3 className="mt-5 font-serif text-[23px] font-semibold">
                Pause before buying
              </h3>

              <p className="mt-3 text-[13px] leading-[1.8] text-slate-500">
                Ask yourself whether something is a need, a want, or simply
                an impulse.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-7">
              <span className="text-[30px]"><TbTargetArrow size={27}/></span>

              <h3 className="mt-5 font-serif text-[23px] font-semibold">
                Give savings a goal
              </h3>

              <p className="mt-3 text-[13px] leading-[1.8] text-slate-500">
                A clear target can make saving feel more concrete and easier
                to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#F4C542] px-6 py-18">
        <div className="mx-auto flex max-w-275 flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
          
            <h2 className="mt-2 max-w-162 Playfair text-[40px] font-semibold leading-[1.1] text-[#0F172A]">
              Start building better money habits today.
            </h2>
          </div>

          <Link
            to="/Learn/BudgetBasics"
            className="inline-flex shrink-0 items-center gap-3 rounded-[10px] bg-[#0F172A] px-6 py-4 text-[14px] font-bold text-white"
          >
            Start Learning
            <FiArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1"/>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;