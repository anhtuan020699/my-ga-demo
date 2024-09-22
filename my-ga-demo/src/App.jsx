import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactGA from 'react-ga';

function App() {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleButtonClick = () => {
    ReactGA.event({
      action: 'button_click', 
      params: {
        label: 'Demo Button', 
        user_category: 'User' 
      }
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
  )
}

export default App
