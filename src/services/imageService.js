const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1/search";

// Small in-memory cache so switching tabs/re-renders doesn't refire requests.
const cache = new Map();

export class ImageServiceError extends Error {
  constructor(message, kind) {
    super(message);
    this.kind = kind; // "no-key" | "network" | "unknown"
  }
}

/**
 * Fetch a single representative photo for a query.
 * Returns null (not throw) when no result is found, since "no photo" is a
 * normal empty state, not an error.
 */
export async function getPhotoForQuery(query, { orientation = "landscape" } = {}) {
  if (!API_KEY) {
    throw new ImageServiceError("Missing Pexels API key.", "no-key");
  }
  if (cache.has(query)) return cache.get(query);

  let res;
  try {
    res = await fetch(
      `${BASE_URL}?query=${encodeURIComponent(query)}&per_page=1&orientation=${orientation}`,
      { headers: { Authorization: API_KEY } }
    );
  } catch {
    throw new ImageServiceError("Network request failed.", "network");
  }
  if (!res.ok) {
    throw new ImageServiceError(`Image request failed (${res.status}).`, "unknown");
  }
  const data = await res.json();
  const photo = data.photos?.[0] ?? null;
  const result = photo
    ? {
        url: photo.src.large,
        thumb: photo.src.medium,
        alt: photo.alt || query,
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
      }
    : null;
  cache.set(query, result);
  return result;
}
