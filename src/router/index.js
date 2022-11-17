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
} from "../pages";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cryptocurrency", element: <CryptocurrencyPage /> },
  { path: "/whatisbitcoin", element: <WhatIsBitcoinPage /> },
  { path: "/altcoins", element: <AltCoinsPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/cryptonotes", element: <CryptoNotesPage /> },
];
