import { useMemo, useState } from "react";
import { destinations, regions } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import "./Explore.css";

export default function Explore() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter((d) => {
      const matchesRegion = region === "All" || d.region === region;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [query, region]);

  return (
    <main>
      <section className="section explore-header">
        <div className="container">
          <p className="eyebrow">Destinations</p>
          <h1 className="explore-title">Where to next?</h1>
          <p className="explore-sub">
            Eight places, picked for what happens when you actually go — not just how they
            photograph. Search by name or country, or narrow by region.
          </p>

          <div className="explore-controls">
            <div className="explore-search">
              <label htmlFor="destination-search" className="visually-hidden">
                Search destinations
              </label>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                id="destination-search"
                type="search"
                placeholder="Search by name or country…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="explore-filters" role="group" aria-label="Filter by region">
              <button
                className={region === "All" ? "chip is-active" : "chip"}
                onClick={() => setRegion("All")}
                aria-pressed={region === "All"}
              >
                All regions
              </button>
              {regions.map((r) => (
                <button
                  key={r}
                  className={region === r ? "chip is-active" : "chip"}
                  onClick={() => setRegion(r)}
                  aria-pressed={region === r}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section explore-results">
        <div className="container">
          {results.length === 0 ? (
            <div className="state-message" role="status">
              <p>No destinations match "{query}"{region !== "All" ? ` in ${region}` : ""}.</p>
              <p>Try a different name, country, or clear the region filter.</p>
            </div>
          ) : (
            <div className="explore-grid">
              {results.map((d) => (
                <DestinationCard key={d.id} destination={d} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
