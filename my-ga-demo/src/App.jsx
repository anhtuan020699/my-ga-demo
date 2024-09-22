import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    // Gọi pageview
    ReactGA.send('pageview', {
      page_path: window.location.pathname + window.location.search,
    });
  }, []);

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'button_click',
      label: 'Demo Button',
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Demo ga</h1>
      <div className="card">
        <button onClick={handleButtonClick}>
          Click me to track event!
        </button>
      </div>
    </>
  );
}

export default App;
