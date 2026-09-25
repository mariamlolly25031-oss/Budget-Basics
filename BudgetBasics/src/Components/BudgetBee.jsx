import { useState } from "react";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";
import ChatWindow from "./ChatWindow";

function BudgetBee() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "BudgetBee",
      text: "Hi! I'm BudgetBee 🐝 Ask me something about budgeting, saving, needs, wants, or spending.",
    },
  ]);

  const getResponse = (question) => {
    const text = question.toLowerCase();

    if (text.includes("need")) {
      return "A need is something essential, such as food, basic transport, school supplies, or other necessary expenses.";
    }

    if (text.includes("want")) {
      return "A want is something you would like to have but can live without. Ask yourself: Can I delay this purchase?";
    }

    if (text.includes("save") || text.includes("saving")) {
      return "Start with a realistic amount and give your savings a clear goal. Consistency matters more than starting with a large amount.";
    }

    if (
      text.includes("overspend") ||
      text.includes("overspending")
    ) {
      return "Try tracking your expenses, separating needs from wants, and pausing before impulse purchases.";
    }

    if (text.includes("budget")) {
      return "A budget is a simple plan for how you expect to use your available money across expenses, wants, and savings.";
    }

    return "I'm still learning! Try asking me about budgeting, saving, needs, wants, or avoiding overspending.";
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((previous) => [
      ...previous,
      {
        sender: "You",
        text: userMessage,
      },
      {
        sender: "BudgetBee",
        text: getResponse(userMessage),
      },
    ]);

    setMessage("");
  };

  return (
    <>
      {/* ================= CHAT WINDOW ================= */}

      {isOpen && (
        <div className="fixed bottom-22.5 right-5 z-100 w-87.5 max-w-[calc(100vw-40px)] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#0F172A] px-5 py-4 text-white">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4C542] text-[19px]">
                🐝
              </div>

              <div>
                <p className="text-[14px] font-bold">
                  BudgetBee
                </p>

                <p className="text-[10px] text-slate-400">
                  Financial learning assistant
                </p>
              </div>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close BudgetBee"
              className="rounded-full p-2 hover:bg-white/10"
            >
              <FiX size={18} />
            </button>

          </div>


          {/* ================= CHAT MESSAGES ================= */}

          <div className="h-80 overflow-y-auto bg-slate-50 p-4">

            <ChatWindow messages={messages} />

          </div>


          {/* ================= SUGGESTED QUESTIONS ================= */}

          <div className="border-t border-slate-100 bg-white px-3 py-3">

            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[1px] text-slate-400">
              Try asking
            </p>

            <div className="flex gap-2 overflow-x-auto">

              <button
                onClick={() => setMessage("What is a need?")}
                className="shrink-0 rounded-full border border-slate-200 px-3 py-2 text-[10px] text-slate-600"
              >
                What is a need?
              </button>

              <button
                onClick={() => setMessage("How should I save?")}
                className="shrink-0 rounded-full border border-slate-200 px-3 py-2 text-[10px] text-slate-600"
              >
                How should I save?
              </button>

              <button
                onClick={() => setMessage("How do I avoid overspending?")}
                className="shrink-0 rounded-full border border-slate-200 px-3 py-2 text-[10px] text-slate-600"
              >
                Avoid overspending?
              </button>

            </div>

          </div>


          {/* ================= INPUT ================= */}

          <div className="flex gap-2 border-t border-slate-200 bg-white p-3">

            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask BudgetBee..."
              className="min-w-0 flex-1 rounded-[10px] border border-slate-200 px-3 py-3 text-[12px] outline-none focus:border-[#F4C542]"
            />

            <button
              onClick={handleSend}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#F4C542] text-[#0F172A]"
            >
              <FiSend size={15} />
            </button>

          </div>


          {/* Disclaimer */}

          <div className="bg-white px-3 pb-2 text-center text-[9px] text-slate-400">
            Educational information only — not professional financial advice.
          </div>

        </div>
      )}


      {/* ================= FLOATING BUTTON ================= */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open BudgetBee"
        className="fixed bottom-5 right-5 z-101 flex h-15 w-15 items-center justify-center rounded-full bg-[#F4C542] text-[26px] shadow-xl"
      >
        {isOpen ? <FiX size={23} /> : "🐝"}
      </button>
    </>
  );
}

export default BudgetBee;