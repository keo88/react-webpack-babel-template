import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './tailwind.css';

const rootContainer = document.getElementById('root');
if (!rootContainer) throw new Error('div element with id root is not found.');

const root = createRoot(rootContainer);

root.render(<App />);
