import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMoreMovies, getMovies, getSearchMovies } from "../action";
import List from "./List";

function Movies({ dispatch, movies, searchMoviesArr, page, last_page }) {
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
    <>
      <header className="py-3 header">
        <div className="container-xl header-search-bar">
          <input
            className="form-control input-control"
            type="text"
            placeholder="Search movies is here"
            onChange={(e) => setSearchMovies(e.target.value)}
          />
          <button
            className="search-btn btn"
            type="submit"
            onClick={() => handleSearchMovies(searchMovies)}
          >
            Go
          </button>
        </div>
      </header>
      <section className="main-movie-section">
        <>
          {!searchMovies && searchMovies.length === 0 ? (
            <List movies={movies.results} />
          ) : searchMoviesArr.results && searchMoviesArr.results.length > 0 ? (
            <List movies={searchMoviesArr.results} />
          ) : (
            "no movies"
          )}
        </>
        <div className="text-center py-4 text-white load-more">
          <p onClick={() => handleClick(pageNum)}>
            {pageNum < last_page ? "Load more..." : ""}
          </p>
        </div>
      </section>
    </>
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
