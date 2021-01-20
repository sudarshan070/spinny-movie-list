import React from "react";

export default function List({ movies }) {
  // console.log(movies, "movies is here");
  return (
    <div className="container-xl d-flex justify-content-between flex-wrap m-movie-container">
      {movies &&
        movies.map((movie, i) => (
          <div key={i} className="movie-card shadow rounded mb-5">
            <img className="rounded" src={movie.image_url} alt="img" />
            <p className="p-3">{movie.title}</p>
          </div>
        ))}
    </div>
  );
}
