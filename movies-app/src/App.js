import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "./store/moviesActions";
import { useEffect, useState, useCallback } from "react";
import {
  moviesSelector,
  moviesIsLoadingSelector,
  searchSelector,
  searchBySelector,
} from "./store/selectors";

const App = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const moviesIsLoading = useSelector(moviesIsLoadingSelector);

  const searchValue = useSelector(searchSelector);
  const searchBy = useSelector(searchBySelector);

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch]);

  const [searchResult, setSearchResult] = useState([]);
  const [searchStarted, setSearchStarted] = useState(false);
  const findMovies = useCallback(() => {
    setSearchStarted(true);
    let foundMovies = [];
    if (searchValue.trim() === "") {
      return setSearchResult(movies);
    } else {
      if (searchBy === "Title") {
        foundMovies = movies.filter((movie) => {
          return movie.title.toLowerCase().includes(searchValue.toLowerCase());
        });
      } else if (searchBy === "Genre") {
        foundMovies = movies.filter((movie) => {
          return movie.genres
            .join(" ")
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
      }
      return setSearchResult(foundMovies);
    }
  }, [searchValue, searchBy, movies]);

  return (
    <div>
      <Header
        searchBy={searchBy}
        findMovies={findMovies}
        setSearchResult={setSearchResult}
      />
      <Results
        searchStarted={searchStarted}
        movies={movies}
        searchResult={searchResult}
        moviesIsLoading={moviesIsLoading}
        setSearchResult={setSearchResult}
        foundMovies={searchStarted ? searchResult.length : movies.length}
      />
      <Footer />
    </div>
  );
};

export default App;
