import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import LocationPicker from "../components/LocationPicker";
import WeatherWidget from "../components/WeatherWidget";
import { destinations } from "../data/destinations";
import { useLocationContext } from "../context/LocationContext";
import "./Home.css";

const FEATURED_IDS = ["kyoto", "jaipur", "santorini", "machu-picchu"];

export default function Home() {
  const { coords } = useLocationContext();
  const featured = destinations.filter((d) => FEATURED_IDS.includes(d.id));

  return (
    <main>
      <Hero />

      <section className="section" id="why-waypoint">
        <div className="container why-grid">
          <div>
            <p className="eyebrow">Why Waypoint</p>
            <h2 className="why-title">Fewer places, chosen properly.</h2>
          </div>
          <div className="why-copy">
            <p>
              We'd rather show you two dozen destinations worth understanding than hundreds worth
              skimming. Each one comes with real weather, real places to see, and an assistant
              who can turn "I have five days" into an actual plan.
            </p>
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-grid">
          <div>
            <p className="eyebrow">Right now, near you</p>
            <h2 className="location-title">What's the weather like where you are?</h2>
            <p className="location-sub">
              Share your location, or search for any city — we'll pull live conditions before
              you even pick a destination.
            </p>
            <div className="location-widget-wrap">
              <LocationPicker />
            </div>
          </div>
          <div className="location-weather-display">
            {coords ? (
              <WeatherWidget lat={coords.lat} lon={coords.lon} label={coords.label || "your location"} />
            ) : (
              <p className="location-placeholder">
                Your local weather will appear here once you share or search a location.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="featured-header">
            <div>
              <p className="eyebrow">A place to start</p>
              <h2 className="featured-title">A few to consider first</h2>
            </div>
            <Link to="/explore" className="btn btn-outline">
              See all destinations
            </Link>
          </div>
          <div className="featured-grid">
            {featured.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
