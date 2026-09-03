import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-brand" aria-label="Waypoint home">
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="14" fill="var(--brass)" />
            <path d="M20 12l-6 4-2 6 6-4 2-6z" fill="var(--ink)" />
          </svg>
          <span>Waypoint</span>
        </NavLink>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" className={({ isActive }) => (isActive ? "active" : "")}>
                Explore
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
