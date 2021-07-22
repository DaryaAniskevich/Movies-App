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
import { useEffect, useState, useMemo, useCallback } from "react";
import { getMoviesData } from "../../../store/getMovies/getMoviesActions";
import { useDispatch } from "react-redux";
import Loader from "../../Loader";
import Button from "../../Button";

const GetMoviesResult = () => {
  const movies = useSelector(getMoviesSelector);
  const moviesIsLoading = useSelector(moviesIsLoadingSelector);

  const dispatch = useDispatch();

  const sortCategory = useSelector(sortSelector);
  const sortOrder = useSelector(sortOrderSelector);

  useEffect(() => {
    dispatch(getMoviesData(sortCategory, sortOrder, 100));
  }, [dispatch, sortCategory, sortOrder]);

  const [numberOfShown, setNumberOfShown] = useState(12);
  const shownMovies = useMemo(() => {
    return movies.slice(0, numberOfShown);
  }, [movies, numberOfShown]);

  let disabled = false;
  if (shownMovies.length >= movies.length) {
    disabled = true;
  }

  const showMore = useCallback(
    () => setNumberOfShown(numberOfShown + 12),
    [numberOfShown]
  );

  return (
    <div className={style.results}>
      <ResultsTopBar />
      {moviesIsLoading ? (
        <div className={style.myLoader}>
          <Loader />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.grid}>
            {shownMovies.map((movie) => (
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
          <div className={style.buttonContainer}>
            <Button
              className={style.buttonShow}
              onClick={showMore}
              disabled={disabled}
            >
              Show more
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetMoviesResult;
