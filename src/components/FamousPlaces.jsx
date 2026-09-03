import AsyncImage from "./AsyncImage";
import "./FamousPlaces.css";

export default function FamousPlaces({ places }) {
  if (!places?.length) {
    return (
      <div className="state-message">
        <p>No notable places have been added for this destination yet.</p>
      </div>
    );
  }

  return (
    <ul className="famous-places" aria-label="Notable places to visit">
      {places.map((place) => (
        <li key={place.name} className="famous-place">
          <div className="famous-place-media">
            <AsyncImage query={place.imageQuery} alt={place.name} aspect="3/2" />
          </div>
          <div className="famous-place-body">
            <h3>{place.name}</h3>
            <p>{place.blurb}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
