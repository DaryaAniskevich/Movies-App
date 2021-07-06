import style from "./Results.module.css";
import ResultsTopBar from "./ResultsTopBar";
import MovieCard from "./MovieCard";

const Results = (props) => {
  return (
    <div className={style.results}>
      <ResultsTopBar foundMovies={props.foundMovies} />
      <div className={style.container}>
        {!props.moviesIsLoading ? (
          !props.searchStarted ? (
            props.movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                release={movie.release_date}
                image={movie.poster_path}
                genres={movie.genres}
              />
            ))
          ) : (
            props.searchResult.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                release={movie.release_date}
                image={movie.poster_path}
                genres={movie.genres}
              />
            ))
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Results;
