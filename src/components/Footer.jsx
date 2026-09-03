import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">Waypoint</p>
        <p className="footer-note">
          Weather by OpenWeather · Images by Pexels · Trip planning by Google Gemini
        </p>
      </div>
    </footer>
  );
}
