import style from "./ResultsTopBar.module.css";
import Button from "../../Button";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortSelector } from "../../../store/selectors";
import { sortBy } from "../../../store/sortActions";

const ResultsTopBar = (props) => {
  const dispatch = useDispatch();

  const sortValue = useSelector(sortSelector);

  const [sortAscending, setSortAscending] = useState(null);

  const dateToNum = useCallback((d) => {
    d = d.split("-");
    return Number(d[0] + d[1] + d[2]);
  }, []);

  const sortForDate = useCallback(
    (field) => {
      return (a, b) => {
        if (sortAscending) {
          return dateToNum(b[field]) - dateToNum(a[field]);
        } else {
          return dateToNum(a[field]) - dateToNum(b[field]);
        }
      };
    },
    [sortAscending, dateToNum]
  );

  const sortForVote = useCallback(
    (field) => {
      return (a, b) => {
        if (sortAscending) {
          return b[field] - a[field];
        } else {
          return a[field] - b[field];
        }
      };
    },
    [sortAscending]
  );

  const sortedResult = useCallback(
    (sortValue) => {
      dispatch(sortBy(sortValue));

      if (sortValue === "release_date") {
        const sortedByDate = [...props.searchResult].sort(
          sortForDate(sortValue)
        );
        setSortAscending(!sortAscending);
        return props.setSearchResult(sortedByDate);
      } else if (sortValue === "vote_average") {
        const sortedByRating = [...props.searchResult].sort(
          sortForVote(sortValue)
        );
        setSortAscending(!sortAscending);
        return props.setSearchResult(sortedByRating);
      }
    },
    [dispatch, props, sortForDate, sortForVote, sortAscending]
  );

  const sortMovies = useCallback(
    (e, sortValue) => {
      e.preventDefault();
      setSortAscending(true);
      return sortedResult(sortValue);
    },
    [sortedResult]
  );

  return (
    <div className={style.resultsTopBar}>
      <div className={style.container}>
        <div className={style.found}>
          {props.foundMovies}&nbsp;
          {props.foundMovies === 1 ? "movie" : "movies"}&nbsp;found
        </div>
        <div className={style.sort}>
          <span>Sort by</span>
          <Button
            onClick={(e) => sortMovies(e, "release_date")}
            className={
              sortValue === "release_date"
                ? `${style.button} ${style.button_active}`
                : style.button
            }
          >
            release date&nbsp;
            {sortValue === "release_date" ? (
              sortAscending ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              )
            ) : null}
          </Button>
          <Button
            onClick={(e) => sortMovies(e, "vote_average")}
            className={
              sortValue === "vote_average"
                ? `${style.button} ${style.button_active}`
                : style.button
            }
          >
            rating&nbsp;
            {sortValue === "vote_average" ? (
              sortAscending ? (
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
