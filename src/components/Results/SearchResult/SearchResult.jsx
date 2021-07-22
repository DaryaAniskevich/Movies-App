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
import { useEffect, useState, useMemo, useCallback } from "react";
import { searchMoviesData } from "../../../store/searchMovies/searchMoviesActions";
import ResultsTopBar from "../ResultsTopBar";
import Loader from "../../Loader";
import Button from "../../Button";

const SearchResult = () => {
  const dispatch = useDispatch();

  const sortCategory = useSelector(sortSelector);
  const sortOrder = useSelector(sortOrderSelector);

  const { searchCategory, searchValue } = useParams();

  useEffect(() => {
    dispatch(
      searchMoviesData(
        searchCategory,
        searchValue,
        sortCategory,
        sortOrder,
        100
      )
    );
  }, [dispatch, searchCategory, searchValue, sortCategory, sortOrder]);

  const foundMovies = useSelector(searchMoviesSelector);
  const foundMoviesIsLoading = useSelector(foundMoviesIsLoadingSelector);

  const [numberOfShown, setNumberOfShown] = useState(12);
  const shownMovies = useMemo(() => {
    return foundMovies.slice(0, numberOfShown);
  }, [foundMovies, numberOfShown]);

  let disabled = false;
  if (shownMovies.length >= foundMovies.length) {
    disabled = true;
  }

  const showMore = useCallback(
    () => setNumberOfShown(numberOfShown + 12),
    [numberOfShown]
  );

  return (
    <div className={style.results}>
      <ResultsTopBar />
      {foundMoviesIsLoading ? (
        <div className={style.loader}>
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
          {foundMovies.length > 0 ? (
            foundMovies.length >= 12 ? (
              <div className={style.buttonContainer}>
                <Button
                  className={style.buttonShow}
                  onClick={showMore}
                  disabled={disabled}
                >
                  Show more
                </Button>
              </div>
            ) : null
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
