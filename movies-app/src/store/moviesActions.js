export const moviesIsLoadingType = "MOVIES_IS_LOADING";
export const setMoviesType = "SET_MOVIES";

export const moviesIsLoading = (bool) => ({
  type: moviesIsLoadingType,
  payload: bool,
});

export const setMovies = (movies) => ({
  type: setMoviesType,
  payload: movies,
});

export const getMoviesData = (url) => async (dispatch) => {
  dispatch(moviesIsLoading(true));
  const movies = await fetch(url).then((result) => result.json());
  dispatch(setMovies(movies.data));
  dispatch(moviesIsLoading(false));
};
