import style from "./Results.module.css";
import ResultsTopBar from "./ResultsTopBar";
import MovieCard from "./MovieCard";

const Results = () => {
  return (
    <div className={style.results}>
      <ResultsTopBar />
      <div className={style.container}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Results;
