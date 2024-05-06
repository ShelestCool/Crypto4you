import React from "react";
import NavBarComp from "./components/NavBar/NavBarComp";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

import "./index.css";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
      <NavBarComp />
      <ScrollTop />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
