import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

function TipTicker() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // ================= VISITOR COUNT =================
    const storedVisitors =
      Number(localStorage.getItem("budgetBasicsVisitors")) || 0;

    const newCount = storedVisitors + 1;

    localStorage.setItem("budgetBasicsVisitors", newCount);
    setVisitorCount(newCount);

    // ================= LIVE TIME =================
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <section className="sticky bottom-0 border-t border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-xs md:flex-row md:items-center md:justify-between">
        
        {/* LIVE DATE & TIME */}
        <div className="flex items-center gap-2">
          <FaClock size={14} className="text-slate-400" />
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{formattedTime}</span>
        </div>

        {/* VISITOR COUNT */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          
          <div className="flex items-center gap-1">
            <IoEyeSharp size={15} className="text-slate-500" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {visitorCount.toLocaleString()}
            </span>
          </div>

          <span>visits to BudgetBasics</span>
        </div>

      </div>
    </section>
  );
}

export default TipTicker;