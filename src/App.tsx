import { useState, useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import Header from './components/Header';
import RestaurantHero from './components/RestaurantHero';
import CateringInfo from './components/CateringInfo';
import FoodGallery from './components/FoodGallery';
import VenueBooking from './components/VenueBooking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Toaster position="top-right" />
      <Header isScrolled={isScrolled} />
      <RestaurantHero />
      <CateringInfo />
      <FoodGallery />
      <VenueBooking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
