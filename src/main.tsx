import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UseProvider } from "./components/contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UseProvider>
      <App />
    </UseProvider>
  </React.StrictMode>
);
