import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { destinations } from "../data/destinations";
import AsyncImage from "../components/AsyncImage";
import WeatherWidget from "../components/WeatherWidget";
import FamousPlaces from "../components/FamousPlaces";
import ItineraryPlanner from "../components/ItineraryPlanner";
import { useActiveDestination } from "../context/ActiveDestinationContext";
import "./DestinationDetail.css";

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);
  const { setActiveDestination } = useActiveDestination();

  useEffect(() => {
    setActiveDestination(destination ?? null);
    return () => setActiveDestination(null);
  }, [destination, setActiveDestination]);

  if (!destination) {
    return <Navigate to="/explore" replace />;
  }

  return (
    <main>
      <section className="dest-hero">
        <AsyncImage
          query={destination.imageQuery}
          alt={`${destination.name}, ${destination.country}`}
          aspect="16/7"
          className="dest-hero-image"
        />
        <div className="container dest-hero-content">
          <Link to="/explore" className="dest-back">
            ← All destinations
          </Link>
          <p className="eyebrow">{destination.region}</p>
          <h1>{destination.name}</h1>
          <p className="dest-hero-country">{destination.country}</p>
        </div>
      </section>

      <section className="section">
        <div className="container dest-overview">
          <div className="dest-overview-main">
            <p className="dest-description">{destination.description}</p>

            <ul className="dest-highlights">
              {destination.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <aside className="dest-sidebar">
            <div className="dest-fact">
              <span>Ideal stay</span>
              <strong>{destination.idealStay}</strong>
            </div>
            <div className="dest-fact">
              <span>Best time to go</span>
              <strong>{destination.bestTime}</strong>
            </div>
            <div className="dest-fact dest-fact--weather">
              <span>Weather right now</span>
              <WeatherWidget lat={destination.lat} lon={destination.lon} label={destination.name} />
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--brass-light)" }}>
            Worth the detour
          </p>
          <h2 className="dest-section-title">Notable places</h2>
          <div style={{ marginTop: "2.5rem" }}>
            <FamousPlaces places={destination.famousPlaces} />
          </div>
        </div>
      </section>

      <section className="section" id="plan">
        <div className="container">
          <p className="eyebrow">Plan the trip</p>
          <h2 className="dest-section-title">Build your itinerary</h2>
          <p className="dest-section-sub">
            Tell the assistant how long you have and how you like to travel — it'll lay out a
            day-by-day plan grounded in {destination.name}'s real sights.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <ItineraryPlanner destination={destination} />
          </div>
        </div>
      </section>
    </main>
  );
}
