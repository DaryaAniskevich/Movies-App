import style from "./Results.module.css";
import ResultsTopBar from "./ResultsTopBar";
import MovieCard from "./MovieCard";

const Results = (props) => {
  return (
    <div className={style.results}>
      <ResultsTopBar
        foundMovies={props.foundMovies}
        searchResult={props.searchResult}
        setSearchResult={props.setSearchResult}
      />
      <div className={style.container}>
        {props.moviesIsLoading ? (
          <div>Loading...</div>
        ) : (
          props.searchResult.map((movie) => (
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
