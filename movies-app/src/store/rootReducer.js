import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import searchReducer from "./searchReducer";
import searchByReducer from "./searchByReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  searchBy: searchByReducer,
});

export default rootReducer;
