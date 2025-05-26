import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./utils/i18n/i18n";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
