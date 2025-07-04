import React from 'react'
import Navbar from './Components/Navbar';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';

const App = () => {
  return (
    <div>
      <Navbar />
      <Body/>
      <About/>
      <Services/>
      <Works/>
    </div>
  )
}

export default App