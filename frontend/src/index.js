import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const appElement = document.getElementById('app');
const app = createRoot(appElement);

app.render(
  <StrictMode>
    <App />
  </StrictMode>
);
