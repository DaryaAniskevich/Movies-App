import style from "./SearchForm.module.css";
import Button from "../Button";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/searchActions";
import { searchBy } from "../../store/searchByActions";
import { searchSelector, searchBySelector } from "../../store/selectors";

const SearchForm = (props) => {
  const dispatch = useDispatch();

  const searchValue = useSelector(searchSelector);
  const searchCategory = useSelector(searchBySelector);

  const setSearchCategory = useCallback(
    (e, filter) => {
      e.preventDefault();
      dispatch(searchBy(filter));
    },
    [dispatch]
  );

  const searchMovie = useCallback(
    (e) => {
      e.preventDefault();
      if (searchValue.trim() === "") {
        dispatch(search(""));
        return;
      }
      dispatch(search(""));
      props.searchMovies();
    },
    [dispatch, props, searchValue]
  );

  const onKeyPressHandler = useCallback(
    (e) => {
      if (searchValue.trim() === "") {
        dispatch(search(""));
        return;
      }
      if (e.code === "Enter") {
        dispatch(search(""));
        props.searchMovies();
        e.preventDefault();
      }
    },
    [dispatch, props, searchValue]
  );

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
          onKeyPress={(e) => onKeyPressHandler(e)}
        />
        <div className={style.buttons_container}>
          <div className={style.buttons_left}>
            <h2 className={`${style.header_search} ${style.header}`}>
              Search by
            </h2>
            <Button
              onClick={(e) => setSearchCategory(e, "title")}
              className={
                searchCategory === "title"
                  ? `${style.button} ${style.button_active}`
                  : style.button
              }
            >
              Title
            </Button>
            <Button
              onClick={(e) => setSearchCategory(e, "genres")}
              className={
                searchCategory === "genres"
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
