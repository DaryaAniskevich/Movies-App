import style from "./SearchForm.module.css";
import Button from "../Button";

const SearchForm = (props) => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Find your movie</h1>
      <form className={style.form}>
        <input
          placeholder="Quentin Tarantino"
          type="text"
          className={style.input}
        />
        <div className={style.buttons_container}>
          <div className={style.buttons_left}>
            <h2 className={`${style.header_search} ${style.header}`}>
              Search by
            </h2>
            <Button className={`${style.button} ${style.button_active}`}>
              Title
            </Button>
            <Button className={style.button}>Genre</Button>
          </div>
          <div className={style.buttons_right}>
            <Button className={`${style.button} ${style.button_search}`}>
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
