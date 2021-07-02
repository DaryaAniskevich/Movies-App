import style from "./Results.module.css";
import ResultsTopBar from "./ResultsTopBar";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../../store/moviesActions";
import { useEffect } from "react";
import { moviesSelector, moviesIsLoadingSelector } from "../../store/selectors";

const Results = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const moviesIsLoading = useSelector(moviesIsLoadingSelector);

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch]);

  return (
    <div className={style.results}>
      <ResultsTopBar />
      <div className={style.container}>
        {moviesIsLoading ? (
          <div>Loading...</div>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              release={movie.release_date}
              image={movie.poster_path}
              genres={movie.genres}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Results;
