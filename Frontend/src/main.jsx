import React from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import AppRouter from "./AppRouter.jsx";
import { Provider } from "react-redux";
import { store } from "./app/app.store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
);
