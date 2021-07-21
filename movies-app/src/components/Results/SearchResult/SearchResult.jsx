import style from "./SearchResult.module.css";
import MovieCard from "../MovieCard";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMoviesSelector,
  foundMoviesIsLoadingSelector,
  sortSelector,
  sortOrderSelector,
} from "../../../store/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { searchMoviesData } from "../../../store/searchMoviesActions";
import ResultsTopBar from "../ResultsTopBar";
const SearchResult = () => {
  const dispatch = useDispatch();

  const sortCategory = useSelector(sortSelector);
  const sortOrder = useSelector(sortOrderSelector);

  const { searchCategory, searchValue } = useParams();

  useEffect(() => {
    dispatch(
      searchMoviesData(searchCategory, searchValue, sortCategory, sortOrder, 30)
    );
  }, [dispatch, searchCategory, searchValue, sortCategory, sortOrder]);

  const foundMovies = useSelector(searchMoviesSelector);
  const foundMoviesIsLoading = useSelector(foundMoviesIsLoadingSelector);

  return (
    <div className={style.results}>
      <ResultsTopBar />
      <div className={style.container}>
        {foundMoviesIsLoading ? (
          <div>Loading...</div>
        ) : (
          foundMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              release={movie.release_date}
              image={movie.poster_path}
              genres={movie.genres}
              overview={movie.overview}
              budget={movie.budget}
              rating={movie.vote_average}
              id={movie.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResult;
