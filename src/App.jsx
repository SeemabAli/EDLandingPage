import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Stationery from "./pages/Stationery";
import ECommunity from "./pages/ECommunity";
import RequestDemo from "./pages/RequestDemo";
import ServicesPage from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-[70px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/e-community" element={<ECommunity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-demo" element={<RequestDemo />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
