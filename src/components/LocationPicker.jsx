import { useEffect, useRef, useState } from "react";
import { searchLocations } from "../services/weatherService";
import { useLocationContext } from "../context/LocationContext";
import "./LocationPicker.css";

export default function LocationPicker() {
  const { status, coords, source, requestLocation, setManualLocation } = useLocationContext();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchState, setSearchState] = useState("idle"); // idle | loading | error | no-key
  const debounceRef = useRef(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.trim().length < 2) {
      setSuggestions([]);
      setSearchState("idle");
      return;
    }
    debounceRef.current = setTimeout(async () => {
      setSearchState("loading");
      try {
        const results = await searchLocations(query);
        setSuggestions(results);
        setSearchState("idle");
      } catch (err) {
        setSuggestions([]);
        setSearchState(err?.kind === "no-key" ? "no-key" : "error");
      }
    }, 400);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  const handleSelect = (place) => {
    setManualLocation(place);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="location-picker">
      <div className="location-picker-row">
        <div className="location-search-box">
          <label htmlFor="location-input" className="visually-hidden">
            Search for a city
          </label>
          <input
            id="location-input"
            type="text"
            placeholder="Search a city for local weather…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            role="combobox"
            aria-expanded={suggestions.length > 0}
            aria-controls="location-suggestions"
          />
          {searchState === "loading" && <span className="spinner" aria-hidden="true" />}
        </div>
        <button type="button" className="btn btn-outline location-btn" onClick={requestLocation}>
          {status === "loading" ? "Locating…" : "Use my location"}
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul id="location-suggestions" className="location-suggestions" role="listbox">
          {suggestions.map((place) => (
            <li key={`${place.lat}-${place.lon}`}>
              <button type="button" role="option" onClick={() => handleSelect(place)}>
                {place.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {searchState === "no-key" && (
        <p className="location-note">Add an OpenWeather API key to search for cities.</p>
      )}
      {searchState === "error" && <p className="location-note">Couldn't search locations right now.</p>}

      {status === "denied" && (
        <p className="location-note">
          Location access was denied — search for a city above instead.
        </p>
      )}
      {status === "unsupported" && (
        <p className="location-note">This browser doesn't support location — search for a city instead.</p>
      )}
      {status === "unavailable" && (
        <p className="location-note">Couldn't determine your location — search for a city instead.</p>
      )}
      {status === "granted" && coords && (
        <p className="location-note location-note--ok">
          Showing weather for {coords.label || (source === "browser" ? "your current location" : "selected location")}.
        </p>
      )}
    </div>
  );
}
