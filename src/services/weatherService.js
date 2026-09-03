const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";

class WeatherServiceError extends Error {
  constructor(message, kind) {
    super(message);
    this.kind = kind; // "no-key" | "not-found" | "network" | "unknown"
  }
}

/** Fetch current weather for a lat/lon pair. */
export async function getWeatherByCoords(lat, lon) {
  if (!API_KEY) {
    throw new WeatherServiceError(
      "Missing OpenWeather API key.",
      "no-key"
    );
  }
  let res;
  try {
    res = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
  } catch {
    throw new WeatherServiceError("Network request failed.", "network");
  }
  if (res.status === 404) {
    throw new WeatherServiceError("Location not found.", "not-found");
  }
  if (!res.ok) {
    throw new WeatherServiceError(`Weather request failed (${res.status}).`, "unknown");
  }
  const data = await res.json();
  return normalizeWeather(data);
}

/** Geocode a free-text place name into coordinates + display name. */
export async function searchLocations(query) {
  if (!API_KEY) {
    throw new WeatherServiceError("Missing OpenWeather API key.", "no-key");
  }
  if (!query || query.trim().length < 2) return [];
  let res;
  try {
    res = await fetch(
      `${GEO_URL}?q=${encodeURIComponent(query)}&limit=5&appid=${API_KEY}`
    );
  } catch {
    throw new WeatherServiceError("Network request failed.", "network");
  }
  if (!res.ok) {
    throw new WeatherServiceError(`Location search failed (${res.status}).`, "unknown");
  }
  const data = await res.json();
  return data.map((place) => ({
    name: place.name,
    country: place.country,
    state: place.state,
    lat: place.lat,
    lon: place.lon,
    label: [place.name, place.state, place.country].filter(Boolean).join(", "),
  }));
}

function normalizeWeather(data) {
  return {
    tempC: Math.round(data.main.temp),
    feelsLikeC: Math.round(data.main.feels_like),
    condition: data.weather?.[0]?.main ?? "Unknown",
    description: data.weather?.[0]?.description ?? "",
    icon: data.weather?.[0]?.icon,
    humidity: data.main.humidity,
    windSpeed: data.wind?.speed,
    cityName: data.name,
    country: data.sys?.country,
  };
}

export { WeatherServiceError };
