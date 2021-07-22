export const getMoviesSelector = (state) => state.getMovies.movies;
export const moviesIsLoadingSelector = (state) => state.getMovies.isLoading;

export const searchMoviesSelector = (state) => state.searchMovies.movies;
export const foundMoviesIsLoadingSelector = (state) =>
  state.searchMovies.isLoading;
export const searchDoneSelector = (state) => state.searchMovies.searchDone;

export const movieDetailsSelector = (state) => state.movieDetails.movieDetails;
export const movieDetailsIsLoadingSelector = (state) =>
  state.movieDetails.isLoading;

export const searchSelector = (state) => state.searchValue.value;
export const searchBySelector = (state) => state.searchBy.searchBy;

export const sortSelector = (state) => state.sortBy.sortBy;
export const sortOrderSelector = (state) => state.sortOrder.sortOrder;
