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
import { sortBy } from "./store/sortActions";

const App = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const moviesIsLoading = useSelector(moviesIsLoadingSelector);

  const searchValue = useSelector(searchSelector);
  const searchByCategory = useSelector(searchBySelector);

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch]);

  const [searchResult, setSearchResult] = useState([]);
  const [searchDisabled, setSearchDisabled] = useState(false);

  const findMovies = useCallback(() => {
    let foundMovies = [];
    if (searchValue.trim() === "") {
      setSearchDisabled(true);
    } else {
      if (searchByCategory === "Title") {
        foundMovies = movies.filter((movie) => {
          return movie.title.toLowerCase().includes(searchValue.toLowerCase());
        });
      } else if (searchByCategory === "Genre") {
        foundMovies = movies.filter((movie) => {
          return movie.genres
            .join(" ")
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
      }
      dispatch(sortBy(null));
      return setSearchResult(foundMovies);
    }
  }, [searchValue, searchByCategory, movies, dispatch]);

  return (
    <div>
      <Header
        findMovies={findMovies}
        setSearchResult={setSearchResult}
        searchDisabled={searchDisabled}
      />
      <Results
        movies={movies}
        searchResult={searchResult}
        moviesIsLoading={moviesIsLoading}
        setSearchResult={setSearchResult}
        foundMovies={searchResult.length}
      />
      <Footer />
    </div>
  );
};

export default App;
