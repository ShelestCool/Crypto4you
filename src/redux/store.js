import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import axios from "axios";
import axiosRetry from "axios-retry"; // Импортируем axiosRetry

import rootReducer from "./reducers";

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

// Настроим axiosRetry и возвращаем измененный экземпляр axios
axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => Math.pow(2, retryCount) * 1000,
});

const interceptors = axiosInstance.interceptors;

interceptors.request.use((config) => {
  // Добавьте логику перед отправкой запроса
  return config;
});

interceptors.response.use((response) => {
  // Обработайте ответ запроса
  return response;
});

const persistConfig = {
  key: "crypto-app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
