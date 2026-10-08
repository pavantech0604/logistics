import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './showcase.css';
import './dark-theme.css';
import './ocean-theme.css';
import './depth-motion.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
