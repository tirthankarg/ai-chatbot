export default function MessageBubble({ message }) {
  return (
    <div className={`message-row ${message.role}`}>
      <div className={`message-bubble ${message.role}`}>
        {message.content}
      </div>
    </div>
  );
}
