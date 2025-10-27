import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { MemeGenerator } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MemeGenerator />
  </StrictMode>
);
