import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="section container" style={{ textAlign: "center", minHeight: "50vh" }}>
      <p className="eyebrow">Off the map</p>
      <h1 style={{ fontSize: "2.5rem", marginTop: "0.75rem" }}>This page doesn't exist.</h1>
      <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
        Check the address, or head back to explore the destinations we do have.
      </p>
      <Link to="/explore" className="btn btn-primary" style={{ marginTop: "2rem" }}>
        Explore destinations
      </Link>
    </main>
  );
}
