import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { MemeGenerator } from './MemeGenerator';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemeGenerator />
  </StrictMode>
);
