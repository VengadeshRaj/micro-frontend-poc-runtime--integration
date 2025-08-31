import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

declare global {
  interface Window {
    renderMicrofrontend1: (containerId: string, history?: any) => void;
    unmountMicrofrontend1: (containerId: string) => void;
  }
}

window.renderMicrofrontend1 = (containerId:string, history:any) => {
  const container:any = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<App history={history} />);
  }
};

window.unmountMicrofrontend1 = (containerId:string) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.unmount();
  }
};

const rootContainer = document.getElementById("root");
if (rootContainer && !document.getElementById("Microfrontend1-container")) {
  createRoot(rootContainer).render(<App />);
}

