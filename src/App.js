import React from 'react'
import Navbar from "./Navbar"
import Main from "./Main"
import './App.css';
import About from "./About"
import Experience from './experience';
import Projects from './projects';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
      
      <div>
        
        {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        

       
          <Navbar />
          <Main />
          <About />
          <Experience />
          <Projects />

        
      </div>
  );
}

export default App;
