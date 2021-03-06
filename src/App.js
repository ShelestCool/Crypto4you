import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarComp from "./components/NavBar/NavBarComp";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

import {
  AboutPage,
  HomePage,
  NewsPage,
  CryptocurrencyPage,
  WhatIsBitcoinPage,
  AltCoinsPage,
  LoginPage,
  RegisterPage,
  CryptoNotesPage,
} from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <NavBarComp />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cryptocurrency" element={<CryptocurrencyPage />} />
        <Route path="/whatisbitcoin" element={<WhatIsBitcoinPage />} />
        <Route path="/altcoins" element={<AltCoinsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cryptonotes" element={<CryptoNotesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
