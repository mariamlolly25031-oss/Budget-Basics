import ChatMessage from "./ChatMessage";

export default function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <div className="chat-empty">
          <p>
            Hi! I'm BudgetBee 🐝 Ask me something about budgeting,
            saving, needs, wants, or overspending.
          </p>
        </div>
      ) : (
        messages.map((message, index) => (
          <ChatMessage
            key={index}
            sender={message.sender}
            text={message.text}
          />
        ))
      )}
    </div>
  );
}