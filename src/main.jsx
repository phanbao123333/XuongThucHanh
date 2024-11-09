import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/css/main.css";
import "./assets/css/home-responsive.css";
import "./assets/css/toast-message.css";
import "./assets/font/font-awesome-pro-v6-6.2.0/css/all.min.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
