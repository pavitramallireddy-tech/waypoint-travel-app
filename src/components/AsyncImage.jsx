import { useEffect, useState } from "react";
import { getPhotoForQuery } from "../services/imageService";
import "./AsyncImage.css";

/**
 * Fetches a photo for `query` from Pexels and renders it, with dedicated
 * loading / empty / error states instead of a broken image or blank space.
 */
export default function AsyncImage({ query, alt, className = "", aspect = "4/3" }) {
  const [state, setState] = useState("loading"); // loading | ready | empty | error
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    getPhotoForQuery(query)
      .then((result) => {
        if (cancelled) return;
        if (result) {
          setPhoto(result);
          setState("ready");
        } else {
          setState("empty");
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setState(err?.kind === "no-key" ? "no-key" : "error");
      });
    return () => {
      cancelled = true;
    };
  }, [query]);

  return (
    <div className={`async-image ${className}`} style={{ aspectRatio: aspect }}>
      {state === "loading" && (
        <div className="async-image-fallback">
          <span className="spinner" role="status" aria-label="Loading image" />
        </div>
      )}
      {state === "ready" && (
        <img src={photo.url} alt={alt || photo.alt} loading="lazy" />
      )}
      {state === "empty" && (
        <div className="async-image-fallback">
          <span>No photo found</span>
        </div>
      )}
      {state === "error" && (
        <div className="async-image-fallback">
          <span>Image unavailable</span>
        </div>
      )}
      {state === "no-key" && (
        <div className="async-image-fallback async-image-fallback--muted">
          <span>Add a Pexels API key to load photos</span>
        </div>
      )}
    </div>
  );
}
