import style from "./GetMoviesResult.module.css";
import MovieCard from "../MovieCard";
import { useSelector } from "react-redux";
import {
  getMoviesSelector,
  moviesIsLoadingSelector,
  sortSelector,
  sortOrderSelector,
} from "../../../store/selectors";
import ResultsTopBar from "../ResultsTopBar";
import { useEffect } from "react";
import { getMoviesData } from "../../../store/getMoviesActions";
import { useDispatch } from "react-redux";
import Loader from "../../Loader";
const GetMoviesResult = () => {
  const movies = useSelector(getMoviesSelector);
  const moviesIsLoading = useSelector(moviesIsLoadingSelector);

  const dispatch = useDispatch();

  const sortCategory = useSelector(sortSelector);
  const sortOrder = useSelector(sortOrderSelector);

  useEffect(() => {
    dispatch(getMoviesData(sortCategory, sortOrder));
  }, [dispatch, sortCategory, sortOrder]);

  return (
    <div className={style.results}>
      <ResultsTopBar />
      {moviesIsLoading ? (
        <div className={style.myLoader}>
          <Loader />
        </div>
      ) : (
        <div className={style.container}>
          {movies.map((movie) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default GetMoviesResult;
