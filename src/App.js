import React from "react";
import { Navbar, Home, About, Portfolio, Contact } from "./components";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
