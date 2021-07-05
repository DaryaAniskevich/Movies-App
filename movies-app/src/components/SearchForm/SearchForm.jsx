import style from "./SearchForm.module.css";
import Button from "../Button";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/searchActions";
import { searchBy } from "../../store/searchByActions";
import { searchSelector } from "../../store/selectors";

const SearchForm = (props) => {
  const dispatch = useDispatch();

  const setSearchByForButton = useCallback(
    (e, filter) => {
      e.preventDefault();
      return dispatch(searchBy(filter));
    },
    [dispatch]
  );

  const searchMovie = useCallback(
    (e) => {
      e.preventDefault();
      return dispatch(search(""));
    },
    [dispatch]
  );
  const searchValue = useSelector(searchSelector);
  return (
    <div className={style.container}>
      <h1 className={style.header}>Find your movie</h1>
      <form className={style.form} onSubmit={(e) => searchMovie(e)}>
        <input
          placeholder="Quentin Tarantino"
          type="text"
          className={style.input}
          value={searchValue}
          onChange={(e) => dispatch(search(e.target.value))}
        />
        <div className={style.buttons_container}>
          <div className={style.buttons_left}>
            <h2 className={`${style.header_search} ${style.header}`}>
              Search by
            </h2>
            <Button
              onClick={(e) => setSearchByForButton(e, "Title")}
              className={
                props.searchBy === "Title"
                  ? `${style.button} ${style.button_active}`
                  : style.button
              }
            >
              Title
            </Button>
            <Button
              onClick={(e) => setSearchByForButton(e, "Genre")}
              className={
                props.searchBy === "Genre"
                  ? `${style.button} ${style.button_active}`
                  : style.button
              }
            >
              Genre
            </Button>
          </div>
          <div className={style.buttons_right}>
            <Button
              type="submit"
              onClick={props.findMovies}
              className={`${style.button} ${style.button_search}`}
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
