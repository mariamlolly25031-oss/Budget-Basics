export default function ChatMessage({ sender, text }) {
  const isBudgetBee = sender === "BudgetBee";

  return (
    <div className={`chat-message ${isBudgetBee ? "bot-message" : "user-message"}`}>
      <strong>{sender}:</strong>
      <p>{text}</p>
    </div>
  );
}