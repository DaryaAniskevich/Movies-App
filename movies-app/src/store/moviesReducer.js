import { setMoviesType, moviesIsLoadingType } from "./moviesActions";

const initialState = {
  movies: [],
  isLoading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setMoviesType: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case moviesIsLoadingType: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
