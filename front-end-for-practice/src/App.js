import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [client, setClient] = useState([]);

  const getBooks = async () => {
    try {
      let response = await fetch('http://localhost:8080/b/list');
      const body = await response.json();
      setClient(body);
      console.log(body)
      console.log("I have done the thing");
    } catch (err) {
      console.error("Oops!", err.message);
    }
  } 

  useEffect(() => {  
    getBooks();
}, []);
  
  return (
    <div className="App">
      {client ?
        client.map((book, key) => {
          return <div key={key}> 
            {book.title}
            {book.author}
            {book.genre}
            {book.price}
          </div>
          }) : "loading"
      }
    </div>
  );
}

export default App;
