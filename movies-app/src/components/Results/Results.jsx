import style from "./Results.module.css";
import ResultsTopBar from "./ResultsTopBar";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../../store/moviesActions";
import { useEffect } from "react";

const Results = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);
  const moviesIsLoading = useSelector((state) => state.movies.isLoading);

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
          movies.map((movie, i) => <MovieCard key={movie.id} />)
        )}
      </div>
    </div>
  );
};

export default Results;
