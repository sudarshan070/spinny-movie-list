import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMovies, getSearchMovies } from "../action";

function Movies({ dispatch, movies }) {
  const [searchMovies, setSearchMovies] = useState("");

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleSearchMovies = (searchMovies) => {
    dispatch(getSearchMovies(searchMovies));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies is here"
        onChange={(e) => setSearchMovies(e.target.value)}
      />
      <button type="submit" onClick={() => handleSearchMovies(searchMovies)}>
        Go
      </button>
      <p>Movies List</p>
      {movies.results
        ? movies.results.map((movie) => <p>{movie.title}</p>)
        : ""}
    </div>
  );
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps)(Movies);
