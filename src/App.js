import React from "react";
import { Navbar, Home, About, Projects, Contact } from "./components";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
