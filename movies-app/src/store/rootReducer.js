import { combineReducers } from "redux";
import getMoviesReducer from "./getMoviesReducer";
import searchMoviesReducer from "./searchMoviesReducer";
import searchReducer from "./searchReducer";
import searchByReducer from "./searchByReducer";
import sortReducer from "./sortReducer";
import sortOrderReducer from "./sortOrderReducer";
import movieDetailsReducer from "./movieDetailsReducer";

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
