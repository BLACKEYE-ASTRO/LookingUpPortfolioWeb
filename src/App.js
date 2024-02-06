import Header from './components/Header';
import Main from './components/AboutUs';
import Magzine from './components/Magzine';
import UpcomingEvents from './components/UpcomingEvents';
import AdvertiseWithUS from './components/AdvertiseWithUS';
import OurAdvertiser from './components/OurAdvertiser';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/about-us" element={<Main />} />
          <Route path="/e-magzine" element={<Magzine />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/advertise-with-us" element={<AdvertiseWithUS />} />
          <Route path="/our-advertiser" element={<OurAdvertiser />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  );
}

export default App;
