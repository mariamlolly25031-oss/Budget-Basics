import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BudgetBee from "./Components/BudgetBee";
import BackToTop from "./Components/BackToTop";

import Home from "./pages/Home";
import BudgetBasics from "./pages/Learn/BudgetBasics";
import NeedsWants from "./pages/Learn/Needs_Wants";
import MoneyMistakes from "./pages/Learn/MoneyMistakes";
import Budget50_30_20 from "./pages/Tools/Budget50_30_20";
import SavingsGoals from "./pages/Tools/SavingsGoals";
import ExpensePlanner from "./pages/Tools/ExpensePlanner";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import TipTicker from "./Components/TipTicker";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Matched to Navbar links */}
          <Route path="/Learn/BudgetBasics" element={<BudgetBasics />} />
          <Route path="/learn/Needs_Wants" element={<NeedsWants />} />
          <Route path="/learn/MoneyMistakes" element={<MoneyMistakes />} />

          <Route path="/Tools/Budget50_30_20" element={<Budget50_30_20 />} />
          <Route path="/Tools/SavingsGoals" element={<SavingsGoals />} />
          <Route path="/tools/ExpensePlanner" element={<ExpensePlanner />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>

      <Footer />
      <TipTicker/>
      <BudgetBee/>
      <BackToTop/>
    </div>
  );
}

export default App;