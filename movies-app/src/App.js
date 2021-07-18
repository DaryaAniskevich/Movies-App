import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchSelector,
  searchBySelector,
  sortSelector,
  sortOrderSelector,
} from "./store/selectors";
import { getMoviesData } from "./store/moviesActions";

const App = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(searchSelector);
  const searchCategory = useSelector(searchBySelector);

  const sortCategory = useSelector(sortSelector);
  const sortOrder = useSelector(sortOrderSelector);

  useEffect(() => {
    dispatch(
      getMoviesData(`https://reactjs-cdp.herokuapp.com/movies?limit=12`)
    );
  }, [dispatch]);

  const searchMovies = useCallback(() => {
    dispatch(
      getMoviesData(
        `https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchCategory}&search=${searchValue}&sortBy=${sortCategory}&sortOrder=${sortOrder}&limit=30`
      )
    );
  }, [dispatch, searchCategory, searchValue, sortCategory, sortOrder]);

  return (
    <div>
      <Header searchMovies={searchMovies} />
      <Results searchMovies={searchMovies} />
      <Footer />
    </div>
  );
};

export default App;
