import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-media" aria-hidden="true">
        <video
          className={`hero-video ${videoReady ? "is-ready" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" />
      </div>

      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">A field guide for the curious</p>
        <h1 className="hero-title">
          Go somewhere
          <br />
          you'll <em>remember</em>.
        </h1>
        <p className="hero-sub">
          Explore destinations worth crossing time zones for — from Kyoto to Jaipur to Machu
          Picchu — check what the sky looks like there right now, and let an assistant sketch
          out the days once you're sold.
        </p>
        <div className="hero-actions">
          <Link to="/explore" className="btn btn-primary">
            Explore destinations
          </Link>
        </div>
      </div>

      <a className="hero-scroll-cue" href="#why-waypoint">
        <span>Scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.4" />
          <circle className="hero-scroll-dot" cx="7" cy="7" r="2" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}
