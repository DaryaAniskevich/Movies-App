import { combineReducers } from "redux";
import getMoviesReducer from "./getMovies/getMoviesReducer";
import searchMoviesReducer from "./searchMovies/searchMoviesReducer";
import searchReducer from "./search/searchReducer";
import searchByReducer from "./searchBy/searchByReducer";
import sortReducer from "./sort/sortReducer";
import sortOrderReducer from "./sortOrder/sortOrderReducer";
import movieDetailsReducer from "./movieDetails/movieDetailsReducer";

const rootReducer = combineReducers({
  getMovies: getMoviesReducer,
  searchMovies: searchMoviesReducer,
  movieDetails: movieDetailsReducer,
  searchValue: searchReducer,
  searchBy: searchByReducer,
  sortBy: sortReducer,
  sortOrder: sortOrderReducer,
});

export default rootReducer;
