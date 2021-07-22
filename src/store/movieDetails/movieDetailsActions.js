export const movieDetailsIsLoadingType = "MOVIE_DETAILS_IS_LOADING";
export const setMovieDetailsType = "SET_MOVIE_DETAILS";
export const movieDetailsIsLoading = (bool) => ({
  type: movieDetailsIsLoadingType,
  payload: bool,
});

export const setMovieDetails = (postDetails) => ({
  type: setMovieDetailsType,
  payload: postDetails,
});

export const movieDetailsGetData = (movieId) => async (dispatch) => {
  dispatch(movieDetailsIsLoading(true));
  const postDetails = await fetch(
    `https://reactjs-cdp.herokuapp.com/movies/${movieId}`
  ).then((res) => res.json());
  dispatch(setMovieDetails(postDetails));
  dispatch(movieDetailsIsLoading(false));
};
