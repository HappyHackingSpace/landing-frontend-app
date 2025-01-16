"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(registration => {
            console.log("SW registered:", registration);
          })
          .catch(error => {
            console.error("SW registration failed:", error);
          });
      });
    }
  }, []);

  return null;
}
