import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Contact from './Components/Contact me/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="section" id="home"><Body /></div>
      <div className="section" id="about"><About /></div>
      <div className="section" id="services"><Services /></div>
      <div className="section" id="portfolio"><Works /></div>
      <div className="section" id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;