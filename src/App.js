import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import axios from "axios";
import "./Movie.json";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    // const response = await fetch(
    //   `${"http://www.omdbapi.com?apikey=b6003d8a"}&s=${"Batman"}`
    // );
    // const data = await response.json();

    // setMovies(data.Search);

    axios({
      method: "GET",
      url: "http://localhost:3000/Search",
    }).then((res) => {
      setMovies(res.data);
    });
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
