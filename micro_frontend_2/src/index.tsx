import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

declare global {
  interface Window {
    renderMicrofrontend2: (containerId: string, history?: any) => void;
    unmountMicrofrontend2: (containerId: string) => void;
  }
}

window.renderMicrofrontend2 = (containerId:string, history:any) => {
  const container:any = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<App history={history} />);
  }
};

window.unmountMicrofrontend2 = (containerId:string) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.unmount();
  }
};

const rootContainer = document.getElementById("root");
if (rootContainer && !document.getElementById("Microfrontend2-container")) {
  createRoot(rootContainer).render(<App />);
}

