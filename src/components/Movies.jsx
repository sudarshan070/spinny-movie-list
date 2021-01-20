import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { getMoreMovies, getMovies, getSearchMovies } from "../action";
import List from "./List";
import SkeletonElement from "./skeletons/Skeletonelement";
import SkeletonMovies from "./skeletons/SkeletonMovies";

function Movies({ dispatch, movies, searchMoviesArr, page, last_page }) {
  const [searchMovies, setSearchMovies] = useState("");
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getMovies(page));
    }, 1000);
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
        {/* <SkeletonMovies /> */}
        <>
          {!searchMovies && searchMovies.length === 0 ? (
            <List movies={movies.results} />
          ) : searchMoviesArr.results && searchMoviesArr.results.length > 0 ? (
            <List movies={searchMoviesArr.results} />
          ) : (
            <div className="loading">
              <Spinner animation="grow" />
            </div>
          )}
          {movies.length === 0 && (
            <div className="container-xl">
              <div className="d-flex flex-wrap justify-content-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
                  <SkeletonMovies key={e} />
                ))}
              </div>
              <div className="d-flex justify-content-center pt-4 ">
                <SkeletonElement type="load" />
              </div>
            </div>
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
  return {
    movies: state.movies.movies,
    searchMoviesArr: state.movies.searchMoviesArr,
    page: state.movies.page,
    last_page: state.movies.movies.last_page,
  };
}

export default connect(mapStateToProps)(Movies);
