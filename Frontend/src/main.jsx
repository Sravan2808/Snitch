import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import App from "./app/App.jsx";
import AppRouter from "./AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
