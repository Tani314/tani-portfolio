import React from 'react';
import {Navbar,Home,About,Portfolio,Skills} from './components'
import {HashRouter} from 'react-router-dom';


const App = () => {
  return (
    <HashRouter>
    <div>
      <Navbar />
      <Home/>
      <About />
      <Portfolio/>
      <Skills/>
    </div>
    </HashRouter>
  )
}

export default App;
