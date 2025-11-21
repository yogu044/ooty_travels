import { Route, Routes, useLocation } from "react-router-dom";
import PopupForm from "./componenets/popupform";  
import Home from "./Pages/Home";
import Footer from "./componenets/Footer.jsx";
import About from "./Pages/About.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Navbar from "./componenets/Navbar.jsx";
import Trips from "./Pages/Trips.jsx";
import Contact from "./Pages/Contact.jsx";
import WhatsAppButton from "./componenets/Whatsapp.jsx";
import TermsAndConditions from "./componenets/TermsAndConditions.jsx";
import PrivacyPolicy from "./componenets/PrivacyPolicy.jsx";

function App() {
  const location = useLocation();

 
  const hideLayout = location.pathname === "/" || location.pathname === "/dataform";

  return (
    <>
      {!hideLayout && <Navbar />}
      <WhatsAppButton/>
      <Routes>
        <Route path="/" element={<PopupForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dataform" element={<PopupForm />} /> 
        <Route path="/activity" element={<Trips />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
