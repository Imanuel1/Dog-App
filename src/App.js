import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/HomePage';
import BreedPage from './pages/BreedsPage/BreedPage';
import axios from 'axios';

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then( response =>
    {
      const dogs = response.data.message;
      setBreeds(Object.keys(dogs));
    });
  }, []);

  return (
    <div className="App">
      <HomePage/>
      <BreedPage breeds={breeds}/>
    </div>
  );
}

export default App;
