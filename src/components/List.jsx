import React from "react";

export default function List({ movies }) {
  return <div>{movies ? movies.map((movie) => <p>{movie.title}</p>) : ""}</div>;
}
