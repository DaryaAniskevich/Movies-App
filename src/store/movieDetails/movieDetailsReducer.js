import {
  movieDetailsIsLoadingType,
  setMovieDetailsType,
} from "./movieDetailsActions";

const initialState = {
  movieDetails: [],
  isLoading: false,
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case setMovieDetailsType: {
      return {
        ...state,
        movieDetails: action.payload,
      };
    }
    case movieDetailsIsLoadingType: {
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

export default movieDetailsReducer;
