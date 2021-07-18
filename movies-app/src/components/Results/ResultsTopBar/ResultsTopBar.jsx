import style from "./ResultsTopBar.module.css";
import Button from "../../Button";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sortSelector,
  moviesSelector,
  sortOrderSelector,
} from "../../../store/selectors";
import { sortBy } from "../../../store/sortActions";
import { setSortOrder } from "../../../store/sortOrderActions";
import { setMovies } from "../../../store/moviesActions";

const ResultsTopBar = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  const sortCategory = useSelector(sortSelector);
  const sortOrder = useSelector(sortOrderSelector);

  const dateToNum = useCallback((d) => {
    d = d.split("-");
    return Number(d[0] + d[1] + d[2]);
  }, []);

  const sortForDate = useCallback(
    (field) => {
      return (a, b) => {
        if (sortOrder === "asc") {
          return dateToNum(b[field]) - dateToNum(a[field]);
        } else if (sortOrder === "desc") {
          return dateToNum(a[field]) - dateToNum(b[field]);
        }
      };
    },
    [sortOrder, dateToNum]
  );

  const sortForVote = useCallback(
    (field) => {
      return (a, b) => {
        if (sortOrder === "asc") {
          return b[field] - a[field];
        } else if (sortOrder === "desc") {
          return a[field] - b[field];
        }
      };
    },
    [sortOrder]
  );

  const sortedResult = useCallback(
    (sortCategory) => {
      dispatch(sortBy(sortCategory));
      if (sortCategory === "release_date") {
        const sortedByDate = [...movies].sort(sortForDate(sortCategory));
        dispatch(setMovies(sortedByDate));
      } else if (sortCategory === "vote_average") {
        const sortedByRating = [...movies].sort(sortForVote(sortCategory));
        dispatch(setMovies(sortedByRating));
      }
    },
    [dispatch, sortForDate, sortForVote, movies]
  );

  const sortMovies = useCallback(
    (e, sortCategory) => {
      e.preventDefault();
      dispatch(sortBy(sortCategory));
      sortedResult(sortCategory);
      sortOrder === "desc"
        ? dispatch(setSortOrder("asc"))
        : dispatch(setSortOrder("desc"));
    },
    [dispatch, sortedResult, sortOrder]
  );

  return (
    <div className={style.resultsTopBar}>
      <div className={style.container}>
        <div className={style.found}>
          {movies.length}&nbsp;
          {movies.length === 1 ? "movie" : "movies"}&nbsp;found
        </div>
        <div className={style.sort}>
          <span>Sort by</span>
          <Button
            onClick={(e) => sortMovies(e, "release_date")}
            className={
              sortCategory === "release_date"
                ? `${style.button} ${style.button_active}`
                : style.button
            }
          >
            release date
            {sortCategory === "release_date" ? (
              sortOrder === "asc" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              )
            ) : null}
          </Button>
          <Button
            onClick={(e) => {
              sortMovies(e, "vote_average");
            }}
            className={
              sortCategory === "vote_average"
                ? `${style.button} ${style.button_active}`
                : style.button
            }
          >
            rating
            {sortCategory === "vote_average" ? (
              sortOrder === "asc" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              )
            ) : null}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsTopBar;
