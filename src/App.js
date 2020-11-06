import React from 'react';
import {Navbar,Home,About,Portfolio,Contact} from './components'
import {HashRouter} from 'react-router-dom';



const App = () => {
  return (
    <HashRouter>

     <Navbar />

    <Home/>
    <About />
     <Portfolio/>
     <Contact/>


    <footer>
            Nuzhat Tabassum Tani <span>&copy;{new Date().getFullYear()}</span>
          </footer>
    </HashRouter>
  )
}

export default App;
