import { createRoot } from "react-dom/client";
import { usePartySocket } from "partysocket/react";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router";
import { nanoid } from "nanoid";

import { type ChatMessage, type Message } from "../shared";

function App() {
  const [name, setName] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { room } = useParams();

  // Load name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("chatUserName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const socket = usePartySocket({
    party: "chat",
    room,
    onMessage: (evt) => {
      const message = JSON.parse(evt.data as string) as Message;
      if (message.type === "add") {
        const foundIndex = messages.findIndex((m) => m.id === message.id);
        if (foundIndex === -1) {
          setMessages((messages) => [
            ...messages,
            {
              id: message.id,
              content: message.content,
              user: message.user,
              role: message.role,
            },
          ]);
        } else {
          setMessages((messages) => {
            return messages
              .slice(0, foundIndex)
              .concat({
                id: message.id,
                content: message.content,
                user: message.user,
                role: message.role,
              })
              .concat(messages.slice(foundIndex + 1));
          });
        }
      } else if (message.type === "update") {
        setMessages((messages) =>
          messages.map((m) =>
            m.id === message.id
              ? {
                  id: message.id,
                  content: message.content,
                  user: message.user,
                  role: message.role,
                }
              : m,
          ),
        );
      } else {
        setMessages(message.messages);
      }
    },
  });

  const handleSetName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      "userName",
    ) as HTMLInputElement;
    const newName = input.value.trim();
    if (newName) {
      setName(newName);
      localStorage.setItem("chatUserName", newName);
    }
  };

  if (!name) {
    return (
      <div className="container" style={{ marginTop: "25%" }}>
        <div className="row">
          <div className="one-third column">
            <h4><b>Set Your Name</b></h4>
            <p>Please enter your desired name to join the chat.</p>
            <form onSubmit={handleSetName}>
              <input
                type="text"
                name="userName"
                className="u-full-width"
                placeholder="Enter your name"
                autoComplete="off"
                required
              />
              <button type="submit" className="button-primary">Join Chat</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat container">
      {messages.map((message) => (
        <div key={message.id} className="row message">
          <div
            className="two columns user"
            style={{
              fontWeight: "bold",
              color: "#2c3e50", // Name color
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {message.user}
          </div>
          <div className="ten columns">{message.content}</div>
        </div>
      ))}
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          const content = e.currentTarget.elements.namedItem(
            "content",
          ) as HTMLInputElement;
          const chatMessage: ChatMessage = {
            id: nanoid(8),
            content: content.value,
            user: name,
            role: "user",
          };
          setMessages((messages) => [...messages, chatMessage]);

          socket.send(
            JSON.stringify({
              type: "add",
              ...chatMessage,
            } satisfies Message),
          );

          content.value = "";
        }}
      >
        <input
          type="text"
          name="content"
          className="ten columns my-input-text"
          placeholder={`Hello ${name}! Type a message...`}
          autoComplete="off"
        />
        <button type="submit" className="send-message two columns">
          Send
        </button>
      </form>
    </div>
  );
}

// Render the chat app using React 18+
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={`/${nanoid()}`} />} />
      <Route path="/:room" element={<App />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>,
);
