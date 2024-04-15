import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement) || hydrateRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

