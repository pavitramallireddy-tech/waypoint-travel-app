import { useEffect, useRef, useState } from "react";
import { askAboutDestination } from "../services/geminiService";
import "./Chatbot.css";

export default function Chatbot({ destination }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [errorKind, setErrorKind] = useState(null);
  const listRef = useRef(null);
  const panelId = "waypoint-chat-panel";

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, status]);

  useEffect(() => {
    // Reset conversation when the destination context changes.
    setMessages([]);
    setStatus("idle");
  }, [destination?.id]);

  const suggestions = destination
    ? [
        `How many days should I spend in ${destination.name}?`,
        `What's the best time to visit ${destination.name}?`,
        `What should I not miss in ${destination.name}?`,
      ]
    : [
        "Where should I go for a first trip to South America?",
        "What's a good 5-day itinerary for Iceland?",
      ];

  async function send(text) {
    const question = text ?? input;
    if (!question.trim() || status === "sending") return;
    const history = messages.map((m) => ({ role: m.role, text: m.text }));
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setStatus("sending");
    setErrorKind(null);
    try {
      const reply = await askAboutDestination(
        destination ?? FALLBACK_DESTINATION,
        history,
        question
      );
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
      setStatus("idle");
    } catch (err) {
      setErrorKind(err?.kind ?? "unknown");
      setStatus("error");
    }
  }

  return (
    <div className="chatbot">
      {open && (
        <div className="chatbot-panel" id={panelId} role="dialog" aria-label="Travel assistant">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-title">Trip assistant</p>
              <p className="chatbot-subtitle">
                {destination ? `Asking about ${destination.name}` : "Ask about any destination"}
              </p>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages" ref={listRef} aria-live="polite">
            {messages.length === 0 && (
              <div className="chatbot-empty">
                <p>Ask me anything about {destination ? destination.name : "where to go next"} —</p>
                <ul className="chatbot-suggestions">
                  {suggestions.map((s) => (
                    <li key={s}>
                      <button type="button" onClick={() => send(s)}>
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg--${m.role}`}>
                {m.text}
              </div>
            ))}
            {status === "sending" && (
              <div className="chatbot-msg chatbot-msg--model chatbot-msg--loading">
                <span className="spinner" role="status" aria-label="Assistant is thinking" />
              </div>
            )}
            {status === "error" && (
              <div className="chatbot-error">
                {errorKind === "no-key"
                  ? "Add a Gemini API key to enable the assistant."
                  : "Something went wrong reaching the assistant. Try again."}
              </div>
            )}
          </div>

          <form
            className="chatbot-form"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <label htmlFor="chatbot-input" className="visually-hidden">
              Message the trip assistant
            </label>
            <input
              id="chatbot-input"
              type="text"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              Send
            </button>
          </form>
        </div>
      )}

      <button
        className="chatbot-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {open ? "Close" : "Ask the assistant"}
      </button>
    </div>
  );
}

const FALLBACK_DESTINATION = {
  name: "the world",
  country: "",
  description: "The visitor hasn't picked a specific destination yet.",
  bestTime: "varies by destination",
  idealStay: "varies by destination",
  famousPlaces: [],
};
