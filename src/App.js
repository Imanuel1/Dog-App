import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/HomePage';
import axios from 'axios';
import Breed from './model/Breed';
import BreedPage from './pages/BreedsPage/BreedPage';

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then( response =>
    {
      const dogs = Object.keys(response.data.message);
      console.log(dogs);
      setBreeds(breeds.concat(dogs))
      // axios.get()
      // UpdateImage(dogs)
    });
  }, []);

  console.log("this is breeds: ")
  console.log(breeds)
  // function UpdateImage(dogs){
  //   let test=[];
  //   dogs.forEach( (dog, index) => axios.get("https://dog.ceo/api/breed/"+dog+"/images/random").then( response2 =>
  //   {
  //       // console.log(response2.data.message);
  //       test = test.concat([new Breed(dog, response2.data.message)]); //breeds?breeds.concat(new Breed(dog, response2.data.message)):[].push(new Breed(dog, response2.data.message))
  //       // console.log(dog);
  //       // console.log(response2.data.message);
  //       if(dogs.length - 1 === index){
  //         console.log("this is:  ");
  //         console.log(test);
  //         console.log(dogs);
  //         console.log(index);
  //         setBreeds(dogs.map( (dog, index) => new Breed(dog,test[index])))
  //       }
  //   }).catch( error => console.error(error)));
  // }

  return (
    <div className="App">
      <HomePage/>
      <BreedPage breeds={breeds}/>      
    </div>
  );
}

export default App;
