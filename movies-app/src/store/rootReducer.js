import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import searchReducer from "./searchReducer";
import searchByReducer from "./searchByReducer";
import sortReducer from "./sortReducer";
import sortOrderReducer from "./sortOrderReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  searchBy: searchByReducer,
  sortBy: sortReducer,
  sortOrder: sortOrderReducer,
});

export default rootReducer;
