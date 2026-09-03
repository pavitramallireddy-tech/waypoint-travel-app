import { Link } from "react-router-dom";
import AsyncImage from "./AsyncImage";
import "./DestinationCard.css";

function formatCoord(lat, lon) {
  const latDir = lat >= 0 ? "N" : "S";
  const lonDir = lon >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(1)}°${latDir}, ${Math.abs(lon).toFixed(1)}°${lonDir}`;
}

export default function DestinationCard({ destination }) {
  return (
    <Link to={`/destinations/${destination.id}`} className="dest-card">
      <AsyncImage query={destination.imageQuery} alt={`${destination.name}, ${destination.country}`} aspect="4/5" />
      <div className="dest-card-body">
        <span className="dest-card-coord">{formatCoord(destination.lat, destination.lon)}</span>
        <h3 className="dest-card-name">{destination.name}</h3>
        <p className="dest-card-country">{destination.country}</p>
        <p className="dest-card-tagline">{destination.tagline}</p>
      </div>
    </Link>
  );
}
