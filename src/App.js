import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/HomePage';
import BreedPage from './pages/BreedsPage/BreedPage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <BreedPage/>
    </div>
  );
}

export default App;
