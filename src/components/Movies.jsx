import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMoreMovies, getMovies, getSearchMovies } from "../action";
import List from "./List";

function Movies({ dispatch, movies, searchMoviesArr, page, last_page }) {
  // console.log(last_page, "movies concat");
  const [searchMovies, setSearchMovies] = useState("");
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    dispatch(getMovies(page));
  }, [dispatch, page]);

  const handleSearchMovies = (searchMovies) => {
    dispatch(getSearchMovies(searchMovies));
  };

  const handleClick = (page) => {
    setPageNum(page + 1);
    dispatch(getMoreMovies(page + 1));
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
      {!searchMovies && searchMovies.length === 0 ? (
        <List movies={movies.results} />
      ) : searchMoviesArr.results && searchMoviesArr.results.length > 0 ? (
        <List movies={searchMoviesArr.results} />
      ) : (
        "no movies"
      )}
      <p onClick={pageNum < last_page ? () => handleClick(pageNum) : ""}>
        {pageNum < last_page ? "Load more.." : ""}
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state, "state");
  return {
    movies: state.movies.movies,
    searchMoviesArr: state.movies.searchMoviesArr,
    page: state.movies.page,
    last_page: state.movies.movies.last_page,
  };
}

export default connect(mapStateToProps)(Movies);
