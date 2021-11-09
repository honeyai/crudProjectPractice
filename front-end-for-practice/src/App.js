import { useEffect } from 'react';
import './App.css';

function App() {

  const [client, setClient] = [];

  useEffect(async () => {
    const response = await fetch('/clients');
    const body = await response.json();
    setClient(body);
  })
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
