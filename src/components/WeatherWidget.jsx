import { useEffect, useState } from "react";
import { getWeatherByCoords } from "../services/weatherService";
import "./WeatherWidget.css";

const ICON_MAP = {
  "01": "☀️",
  "02": "⛅",
  "03": "☁️",
  "04": "☁️",
  "09": "🌧️",
  "10": "🌦️",
  "11": "⛈️",
  "13": "❄️",
  "50": "🌫️",
};

function emojiFor(icon) {
  if (!icon) return "🌡️";
  return ICON_MAP[icon.slice(0, 2)] ?? "🌡️";
}

export default function WeatherWidget({ lat, lon, label }) {
  const [state, setState] = useState("loading");
  const [weather, setWeather] = useState(null);
  const [errorKind, setErrorKind] = useState(null);

  useEffect(() => {
    if (lat == null || lon == null) return;
    let cancelled = false;
    setState("loading");
    getWeatherByCoords(lat, lon)
      .then((data) => {
        if (cancelled) return;
        setWeather(data);
        setState("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        setErrorKind(err?.kind ?? "unknown");
        setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [lat, lon]);

  if (lat == null || lon == null) return null;

  return (
    <div className="weather-widget" aria-live="polite">
      {state === "loading" && (
        <div className="weather-loading">
          <span className="spinner" role="status" aria-label="Loading weather" />
          <span>Checking the sky over {label}…</span>
        </div>
      )}

      {state === "error" && errorKind === "no-key" && (
        <p className="weather-note">Add an OpenWeather API key to show live conditions here.</p>
      )}

      {state === "error" && errorKind !== "no-key" && (
        <p className="weather-note weather-note--error">
          Couldn't load the weather for {label} right now. It may be offline or the request timed out.
        </p>
      )}

      {state === "ready" && weather && (
        <div className="weather-card">
          <span className="weather-emoji" aria-hidden="true">
            {emojiFor(weather.icon)}
          </span>
          <div>
            <p className="weather-temp">
              {weather.tempC}°C
              <span className="weather-feels"> · feels like {weather.feelsLikeC}°C</span>
            </p>
            <p className="weather-desc">
              {weather.description} in {weather.cityName || label}
            </p>
            <p className="weather-meta">
              Humidity {weather.humidity}% · Wind {Math.round(weather.windSpeed)} m/s
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
