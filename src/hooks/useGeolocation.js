import { useCallback, useState } from "react";

/**
 * Tracks the visitor's location. Starts as "idle", moves to "loading" when
 * requested, then "granted" | "denied" | "unsupported" | "unavailable".
 * A manually-picked location (from search) always overrides the browser one.
 */
export function useGeolocation() {
  const [status, setStatus] = useState("idle");
  const [coords, setCoords] = useState(null);
  const [source, setSource] = useState(null); // "browser" | "manual"

  const requestLocation = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        setSource("browser");
        setStatus("granted");
      },
      (err) => {
        setStatus(err.code === err.PERMISSION_DENIED ? "denied" : "unavailable");
      },
      { timeout: 10000, maximumAge: 5 * 60 * 1000 }
    );
  }, []);

  const setManualLocation = useCallback((place) => {
    setCoords({ lat: place.lat, lon: place.lon, label: place.label });
    setSource("manual");
    setStatus("granted");
  }, []);

  return { status, coords, source, requestLocation, setManualLocation };
}
