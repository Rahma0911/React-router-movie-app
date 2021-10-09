import React, { useState } from "react";
import "./App.css"
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import NavBar from "./NavBar";
import { moviesData } from "./data";
import {Route, Switch } from "react-router";
import Description from "./Description";


function App () {
	const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");  
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  return(
  <div className="App">
    <header className="App-header">
      <NavBar setSearchTitle={setSearchTitle} setSearchRating={setSearchRating}/>
      <br/> 
      <Switch>
        <Route exact path='/' render={() => (
          <div>
          <AddMovie addMovie={addMovie} />
          <br/> <br/>
          <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />
          </div>
        )}/>
        <Route path='/description' component={Description}/>
      </Switch>
      
    </header>
  </div>
  );
};

export default App;