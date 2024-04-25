import {
  AboutPage,
  HomePage,
  NewsPage,
  LoginPage,
  RegisterPage,
  CryptoNotesPage,
  CryptocurrencyPage,
  WhatIsBlockChainPage,
  NftTokensPage,
  CryptoWalletPage,
  WhatIsBitcoinPage,
  AltCoinsPage,
} from "../pages";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cryptocurrency", element: <CryptocurrencyPage /> },
  { path: "/whatisbitcoin", element: <WhatIsBitcoinPage /> },
  { path: "/whatisblockchain", element: <WhatIsBlockChainPage /> },
  { path: "/nft-tokens", element: <NftTokensPage /> },
  { path: "/cryptowallet", element: <CryptoWalletPage /> },
  { path: "/altcoins", element: <AltCoinsPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/cryptonotes", element: <CryptoNotesPage /> },
];
