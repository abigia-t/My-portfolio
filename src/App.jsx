import React from 'react'
import Navbar from './Components/Navbar';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Body/>
      <About/>
      <Services/>
    </div>
  )
}

export default App