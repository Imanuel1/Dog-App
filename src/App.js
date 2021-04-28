import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/HomePage';
import axios from 'axios';
import Breed from './model/Breed';
import BreedPage from './pages/BreedsPage/BreedPage';

function App() {
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then( response1 =>
    {
      const dogs = Object.keys(response1.data.message);
      // axios.get()
      UpdateImage(dogs)
    });
  }, []);


  function UpdateImage(dogs){
    let test=[];
    dogs.forEach( (dog, index) => axios.get("https://dog.ceo/api/breed/"+dog+"/images/random").then( response2 =>
    {
        // console.log(response2.data.message);
        test = test.concat([new Breed(dog, response2.data.message)]); //breeds?breeds.concat(new Breed(dog, response2.data.message)):[].push(new Breed(dog, response2.data.message))
        // console.log(dog);
        // console.log(response2.data.message);
        if(dogs.length - 1 === index){
          console.log("this is:  ");
          console.log(test);
          console.log(dogs);
          console.log(index);
          setBreeds(dogs.map( (dog, index) => new Breed(dog,test[index])))
        }
    }).catch( error => console.error(error)));
  }


  console.log(breeds);

  return (
    <div className="App">
      <HomePage/>
      {breeds?
      <BreedPage breeds={breeds} onUpdateImage={UpdateImage}/>
      :
      <p>loading...</p>
      }
      
    </div>
  );
}

export default App;
