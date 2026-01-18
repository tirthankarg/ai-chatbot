/**
 * server.js
 * ----------
 * Real WebSocket server with streaming responses
 */

const WebSocket = require("ws");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Create WebSocket server
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", async (data) => {
    const message = JSON.parse(data.toString());

    if (message.type !== "user_message") return;

    // Simulated AI response (replace with real LLM later)
    const reply =
      "This is a real WebSocket streaming response from the backend. Each character is sent individually to simulate real-time AI output.";

    for (let char of reply) {
      ws.send(
        JSON.stringify({
          type: "ai_chunk",
          content: char
        })
      );

      // Delay to simulate streaming
      await new Promise((r) => setTimeout(r, 35));
    }

    ws.send(JSON.stringify({ type: "ai_done" }));
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
