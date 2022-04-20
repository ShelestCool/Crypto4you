import "./App.css";
import NavBarComp from "./components/NavBar/NavBarComp";

import { Routes, Route } from "react-router-dom";

import {
  AboutPage,
  HomePage,
  NewsPage,
  ConverterPage,
  WhatIsBitcoinPage,
  AltCoinsPage,
} from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBarComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/converter" element={<ConverterPage />} />
        <Route path="/whatisbitcoin" element={<WhatIsBitcoinPage />} />
        <Route path="/altcoins" element={<AltCoinsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
