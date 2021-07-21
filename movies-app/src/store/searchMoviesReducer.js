import {
  searchMoviesIsLoadingType,
  setFoundMoviesType,
  setSearchDoneType,
} from "./searchMoviesActions";

const initialState = {
  movies: [],
  isLoading: false,
  searchDone: false,
};

const searchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setFoundMoviesType: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case searchMoviesIsLoadingType: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case setSearchDoneType: {
      return {
        ...state,
        searchDone: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default searchMoviesReducer;
