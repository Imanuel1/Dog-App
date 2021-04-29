import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/HomePage';
import axios from 'axios';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import {HashRouter, Switch, Route} from 'react-router-dom'
import SelectedBreedPage from './pages/SelectedBreedPage/SelectedBreedPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


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
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/breeds"><BreedsPage breeds={breeds}/> </Route>
          <Route exact path="/breeds/:breed"><SelectedBreedPage></SelectedBreedPage></Route>
          <Route><NotFoundPage path="/"></NotFoundPage></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
