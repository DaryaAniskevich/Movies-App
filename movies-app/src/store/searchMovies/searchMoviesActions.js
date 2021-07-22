export const searchMoviesIsLoadingType = "SEARCH_MOVIES_IS_LOADING";
export const setFoundMoviesType = "SET_FOUND_MOVIES";
export const setSearchDoneType = "SET_SEARCH_DONE";

export const searchMoviesIsLoading = (bool) => ({
  type: searchMoviesIsLoadingType,
  payload: bool,
});

export const setFoundMovies = (movies) => ({
  type: setFoundMoviesType,
  payload: movies,
});

export const setSearchDone = (bool) => ({
  type: setSearchDoneType,
  payload: bool,
});

export const searchMoviesData =
  (searchCategory, searchValue, sortCategory, sortOrder, limit = 12) =>
  async (dispatch) => {
    dispatch(setSearchDone(false));
    dispatch(searchMoviesIsLoading(true));
    const movies = await fetch(
      `https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchCategory}&search=${searchValue}&sortBy=${sortCategory}&sortOrder=${sortOrder}&limit=${limit}`
    ).then((result) => result.json());
    dispatch(setFoundMovies(movies.data));
    dispatch(searchMoviesIsLoading(false));
    dispatch(setSearchDone(true));
  };
