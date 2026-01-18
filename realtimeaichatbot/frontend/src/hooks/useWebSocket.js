/**
 * useWebSocket.js
 * ----------------
 * StrictMode-safe WebSocket hook for CRA (React 18)
 */

import { useEffect, useRef, useState } from "react";

export default function useWebSocket({ onChunk, onDone }) {
  const wsRef = useRef(null);
  const initializedRef = useRef(false);
  const [status, setStatus] = useState("connecting");

  useEffect(() => {
    // Prevent double connection in React StrictMode
    if (initializedRef.current) return;
    initializedRef.current = true;

    const wsUrl = "ws://localhost:8080"; // keep hardcoded for now

    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connected");
      setStatus("connected");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "ai_chunk") {
        onChunk(data.content);
      }

      if (data.type === "ai_done") {
        onDone();
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error", err);
      setStatus("error");
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
      setStatus("disconnected");
    };

    return () => {
      // Close socket ONLY when app truly unmounts
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }
    };
  }, [onChunk, onDone]);

  const sendMessage = (text) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "user_message",
          content: text
        })
      );
    }
  };

  return { status, sendMessage };
}
