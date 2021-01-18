import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovies } from "../action";

function Movies({ dispatch, movies }) {
  //   console.log(movies, "get movies list");
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      {console.log(movies)}
      <p>Movies List</p>
      {movies.results
        ? movies.results.map((movie) => <p>{movie.title}</p>)
        : ""}
    </div>
  );
}

function mapStateToProps({ movies }) {
  //   console.log(movies, "movies in movies");
  return { movies };
}

export default connect(mapStateToProps)(Movies);
