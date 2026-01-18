import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import ConnectionStatus from "./components/ConnectionStatus";
import useWebSocket from "./hooks/useWebSocket";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);

const { status, sendMessage } = useWebSocket({
  onChunk: (chunk) => {
    setMessages((prev) => {
      const lastMessage = prev[prev.length - 1];

      // Create a NEW object (do NOT mutate)
      const updatedAssistant = {
        ...lastMessage,
        content: lastMessage.content + chunk
      };

      return [...prev.slice(0, -1), updatedAssistant];
    });
  },
  onDone: () => setIsStreaming(false)
});


  const handleSend = (text) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
      { role: "assistant", content: "" },
    ]);

    setIsStreaming(true);
    sendMessage(text);
  };

  return (
    <div className="app-container">
      <ConnectionStatus status={status} />
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} disabled={isStreaming} />
    </div>
  );
}
