import MyNavbar from "./components/MyNavbar";
import HeroSection from "./components/HeroSection";
import WhyUs from "./components/WhyUs";
import Benefits from "./components/Benefits";
import ResourceCounts from "./components/ResourceCounts";
import Services from "./components/Services";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
// Custom Css
import "./globals.css";

function App() {
  return (
    <main className="app">
      <MyNavbar />
      <HeroSection />
      <WhyUs />
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center gap-5">
        <Benefits />
        <ResourceCounts />
        <Services />
      </div>
    </main>
  );
}

export default App;
