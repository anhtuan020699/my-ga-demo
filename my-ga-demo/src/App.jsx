import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    ReactGA.send('pageview', {
      page_path: window.location.pathname + window.location.search,
    });
  }, []);
  const handleSubmid = () => {
    if (value) { 
      ReactGA.event({
        category: 'User Interaction',
        action: 'button_Submid',
        label: value,
      });
    } else {
      console.warn('Value is empty, event not sent.');
    }
  };
 
  const [value, setValue] = useState();
const handleChangevalue = (e) => {
  setValue(e.target.value);
}
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
      <input type="text" value={value} onChange={(e)=>handleChangevalue(e)}  className="styled-input" />
      </div>
      <div className="card">
        <button onClick={handleSubmid}>
         Submit
        </button>
        
      </div>
    </>
  );
}

export default App;
