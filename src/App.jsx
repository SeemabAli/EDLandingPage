import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Stationery from "./pages/Stationery";
import ECommunity from "./pages/ECommunity";
import RequestDemo from "./pages/RequestDemo";
import ServicesPage from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop"; // Import the component
import Pricing from "./components/Pricing/Pricing";
import TermsAndConditions from "./pages/TOC";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure this is inside Router */}
      <Navbar />
      <div className="pt-[70px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/e-community" element={<ECommunity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/t&c" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
