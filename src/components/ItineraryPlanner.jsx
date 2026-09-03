import { useState } from "react";
import { generateItinerary } from "../services/geminiService";
import "./ItineraryPlanner.css";

const PACE_OPTIONS = ["relaxed", "balanced", "packed"];

export default function ItineraryPlanner({ destination }) {
  const [days, setDays] = useState(3);
  const [pace, setPace] = useState("balanced");
  const [interests, setInterests] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | error | ready
  const [errorKind, setErrorKind] = useState(null);
  const [itinerary, setItinerary] = useState(null);
  const [activeDay, setActiveDay] = useState(0);

  async function handleGenerate(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorKind(null);
    try {
      const result = await generateItinerary(destination, { days, pace, interests });
      setItinerary(result);
      setActiveDay(0);
      setStatus("ready");
    } catch (err) {
      setErrorKind(err?.kind ?? "unknown");
      setStatus("error");
    }
  }

  return (
    <div className="itinerary-planner">
      <form className="itinerary-form" onSubmit={handleGenerate}>
        <div className="itinerary-field">
          <label htmlFor="itin-days">Length of trip</label>
          <div className="itinerary-stepper">
            <button
              type="button"
              onClick={() => setDays((d) => Math.max(1, d - 1))}
              aria-label="Decrease number of days"
            >
              −
            </button>
            <span id="itin-days" aria-live="polite">
              {days} {days === 1 ? "day" : "days"}
            </span>
            <button
              type="button"
              onClick={() => setDays((d) => Math.min(10, d + 1))}
              aria-label="Increase number of days"
            >
              +
            </button>
          </div>
        </div>

        <div className="itinerary-field">
          <label htmlFor="itin-pace">Pace</label>
          <select id="itin-pace" value={pace} onChange={(e) => setPace(e.target.value)}>
            {PACE_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p[0].toUpperCase() + p.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="itinerary-field itinerary-field--wide">
          <label htmlFor="itin-interests">Interests (optional)</label>
          <input
            id="itin-interests"
            type="text"
            placeholder="e.g. food, hiking, architecture"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary itinerary-submit" disabled={status === "loading"}>
          {status === "loading" ? "Planning…" : "Generate itinerary"}
        </button>
      </form>

      {status === "loading" && (
        <div className="state-message itinerary-status">
          <span className="spinner" role="status" aria-label="Generating itinerary" />
          <p>Sketching out {days} {days === 1 ? "day" : "days"} in {destination.name}…</p>
        </div>
      )}

      {status === "error" && (
        <div className="state-message itinerary-status itinerary-status--error">
          <p>
            {errorKind === "no-key"
              ? "Add a Gemini API key to generate itineraries."
              : errorKind === "parse"
              ? "The assistant's response couldn't be read. Try generating again."
              : "Couldn't generate an itinerary right now. Try again in a moment."}
          </p>
        </div>
      )}

      {status === "ready" && itinerary && (
        <div className="itinerary-result">
          <div className="itinerary-tabs" role="tablist" aria-label="Itinerary days">
            {itinerary.days.map((d, i) => (
              <button
                key={d.day}
                role="tab"
                aria-selected={activeDay === i}
                className={activeDay === i ? "itinerary-tab is-active" : "itinerary-tab"}
                onClick={() => setActiveDay(i)}
              >
                Day {d.day}
              </button>
            ))}
          </div>

          {itinerary.days[activeDay] && (
            <div className="itinerary-day" role="tabpanel">
              <h4>{itinerary.days[activeDay].title}</h4>
              <ol className="itinerary-activities">
                {itinerary.days[activeDay].activities.map((a, i) => (
                  <li key={i}>
                    <span className="itinerary-time">{a.time}</span>
                    <div>
                      <p className="itinerary-activity-title">{a.title}</p>
                      <p className="itinerary-activity-desc">{a.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {itinerary.tips?.length > 0 && (
            <div className="itinerary-tips">
              <h4>Practical tips</h4>
              <ul>
                {itinerary.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
