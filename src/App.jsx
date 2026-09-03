import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import DestinationDetail from "./pages/DestinationDetail";
import NotFound from "./pages/NotFound";
import { ActiveDestinationProvider, useActiveDestination } from "./context/ActiveDestinationContext";

function AppShell() {
  const { activeDestination } = useActiveDestination();
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Chatbot destination={activeDestination} />
    </>
  );
}

export default function App() {
  return (
    <ActiveDestinationProvider>
      <AppShell />
    </ActiveDestinationProvider>
  );
}
