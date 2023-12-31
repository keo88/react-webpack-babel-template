import { createRoot } from 'react-dom/client';
import React from "react";
import App from "./App";

const rootContainer = document.getElementById('root');
if (!rootContainer) throw new Error('div element with id root is not found.');

const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);