import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from 'react-ga4';
ReactGA.initialize('G-CZT9L2946Y');
ReactGA.pageview(window.location.pathname + window.location.search);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
