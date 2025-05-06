import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/app-router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
