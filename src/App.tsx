import MyNavbar from "./components/MyNavbar";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <main className="app">
      <MyNavbar />
      <HeroSection />
      <WhyUs />
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <Benefits />
      </div>
    </main>
  );
}

export default App;
