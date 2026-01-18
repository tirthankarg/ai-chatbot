Real-Time AI Chatbot with Streaming (WebSocket)
📌 Project Overview

This project is a real-time chat application built using Create React App on the frontend and a Node.js WebSocket server on the backend.
It demonstrates streaming responses from the server to the client, where messages are displayed incrementally (character-by-character) to simulate real-time AI output.

The focus of this assignment is core functionality, including:

WebSocket communication

Streaming UI updates

Clean state management

Clear separation of frontend and backend

🚀 Features Implemented

✅ Real-time chat using WebSockets

✅ Streaming responses (chunk-by-chunk)

✅ Auto-scroll to latest message

✅ Distinct UI for user and assistant messages

✅ Connection status indicator

✅ Input disabled while streaming

✅ Clean, eye-catchy dark UI using pure CSS

✅ Create React App–compatible setup

🛠️ Tech Stack
Frontend

React 18 (Create React App)

JavaScript (ES6+)

Custom CSS (no UI libraries)

WebSocket (browser native API)

Backend

Node.js

ws (WebSocket library)

JavaScript

📁 Project Structure
REALTIMEAICHATBOT/
│
├── backend/
│ ├── package.json
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ChatInput.js
│ │ │ ├── ChatWindow.js
│ │ │ ├── MessageBubble.js
│ │ │ └── ConnectionStatus.js
│ │ │
│ │ ├── hooks/
│ │ │ └── useWebSocket.js
│ │ │
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ │
│ ├── .env
│ └── package.json
│
└── README.md
