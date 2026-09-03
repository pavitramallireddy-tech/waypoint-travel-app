# Waypoint

A travel exploration app: browse curated destinations, check live weather for any place (including your own), read through properly presented highlights for each destination, and hand the trip-planning off to an AI assistant that turns "3 days, relaxed pace" into a real day-by-day itinerary.

**Live demo:** https://waypoint-travel-app-one.vercel.app/
**Repo:** https://github.com/pavitramallireddy-tech/waypoint-travel-app

## Features

- **Landing hero** — full-bleed looping background video with an animated headline reveal (degrades gracefully to a gradient background if no video is present).
- **Destination explorer** — search by name/country and filter by region; each destination opens onto its own page.
- **Destination pages** — description, highlights, ideal stay, best time to visit, live weather, and a set of famous places presented as an editorial alternating image/text layout (not a bare list).
- **Location awareness** — the visitor can grant browser geolocation for local weather, or search for any city by name; every failure mode (denied, unsupported, unavailable, no results) has its own message instead of a silent blank.
- **Real-time weather** — current conditions (temperature, feels-like, humidity, wind, condition) via the OpenWeather API, for both the visitor's location and every destination.
- **Images fetched at runtime** — every photo (destination cards, hero image, famous places) is fetched from the Pexels API by search query; nothing is hardcoded or bundled.
- **AI chatbot** — a floating assistant (Google Gemini) that's aware of whichever destination page you're on and can answer questions like "how long should I stay" or "when should I go."
- **AI itinerary planner** — pick a trip length, pace, and optional interests; the assistant returns a structured plan rendered as tabbed days with timed activities and practical tips — not a wall of chat text.
- **Designed-for error states** — every async surface (images, weather, geocoding, chatbot, itinerary) has a loading, empty, and error state, including a friendly nudge when an API key is missing.
- **Accessibility** — semantic landmarks, a skip-to-content link, visible focus states, `aria-live` regions on async content, and full keyboard operability. Respects `prefers-reduced-motion`.
- **Responsive** — holds together from a small phone up to a large desktop screen.

## Tech stack

- React 19 + Vite
- React Router
- Plain CSS with custom properties (no UI framework) — see the design tokens at the top of `src/styles/global.css`
- OpenWeather API (weather + geocoding)
- Pexels API (images)
- Google Gemini API for the chatbot and itinerary generation

## Project structure

```
src/
  components/     Reusable UI: Hero, Navbar, Footer, DestinationCard, FamousPlaces,
                  WeatherWidget, LocationPicker, Chatbot, ItineraryPlanner, AsyncImage
  pages/          Home, Explore, DestinationDetail, NotFound
  data/           Curated destination dataset (no image URLs — only search queries)
  services/       API clients: weatherService, imageService, geminiService
  hooks/          useGeolocation
  context/        LocationContext (visitor's location), ActiveDestinationContext (chatbot context)
  styles/         global.css (design tokens + base styles)
```

Destinations span six continents (Asia, Europe, Africa, North America, South America, Oceania), including a dedicated cluster of Indian destinations (Jaipur, Agra, Varanasi, the Kerala backwaters, Goa, Ladakh, Udaipur) alongside long-standing entries like Kyoto, Reykjavík, Machu Picchu, and Santorini.

## Running locally

**Requirements:** Node.js 18+

```bash
npm install
cp .env.example .env.local
# then fill in .env.local with your own API keys — see below
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production: `npm run build`, then `npm run preview` to check the build locally.

### API keys

Copy `.env.example` to `.env.local` and fill in:

| Variable | Where to get it | Free tier? |
|---|---|---|
| `VITE_OPENWEATHER_API_KEY` | https://openweathermap.org/api | Yes |
| `VITE_PEXELS_API_KEY` | https://www.pexels.com/api/ | Yes |
| `VITE_GEMINI_API_KEY` | https://ai.google.dev/ | Yes |

`.env.local` is already in `.gitignore` — never commit real keys. `.env.example` only holds the variable names.

> **Note on client-side keys:** this is a front-end-only app, so these keys ship inside the built JS bundle (a Vite/CRA limitation, not specific to this project). For a portfolio/assignment deployment that's a normal tradeoff; for production use you'd proxy these calls through a small server or serverless function so the keys never reach the browser. Use free-tier, rate-limited keys and consider setting HTTP referrer restrictions on the OpenWeather/Pexels keys.

### Hero video

The hero looks for `public/hero.mp4` (looping background video). None is bundled here to keep the repo small — download a suitable clip from [Coverr](https://coverr.co) or [Mixkit](https://mixkit.co) (something aerial/coastal/mountain works well) and save it as `public/hero.mp4`. If the file is missing, the hero still renders correctly with a gradient background instead of a broken video element.

## Deployment

Built with Vite, so it deploys as a static site to Vercel, Netlify, or GitHub Pages:

1. Push this repo to GitHub.
2. On Vercel/Netlify: import the repo, framework preset "Vite," build command `npm run build`, output directory `dist`.
3. Add the three `VITE_...` environment variables in the host's project settings (not in the repo).
4. Deploy, then open the live URL in a private/incognito window to confirm it works without any local `.env.local`.
5. On Vercel specifically, check **Settings → Deployment Protection** is set to disabled/public — it defaults to requiring a Vercel login on some account tiers, which will block visitors from viewing the live site.

## Design notes

The visual direction is an "atlas / field journal" feel rather than a generic travel-site look: deep ink navy paired with warm parchment, Fraunces for display type and Public Sans for UI/body text, brass and teal as the two accent colors, and hairline borders instead of card shadows. Destination cards are labeled with real coordinates rather than decorative numbering, since that's actual data about the place rather than a sequence marker.

## What's not included

- No backend/database — destinations are a static dataset in `src/data/destinations.js`. Adding more is just adding entries to that array.
- No automated tests.
- No key-proxying server (see the API keys note above).
