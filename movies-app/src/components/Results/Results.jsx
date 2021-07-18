import style from "./Results.module.css";
import ResultsTopBar from "./ResultsTopBar";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { moviesSelector, moviesIsLoadingSelector } from "../../store/selectors";

const Results = (props) => {
  const movies = useSelector(moviesSelector);
  const moviesIsLoading = useSelector(moviesIsLoadingSelector);

  return (
    <div className={style.results}>
      <ResultsTopBar searchMovies={props.searchMovies} />
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
              overview={movie.overview}
              budget={movie.budget}
              rating={movie.vote_average}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Results;
