import style from "./ResultsTopBar.module.css";
import Button from "../../Button";

const ResultsTopBar = (props) => {
  return (
    <div className={style.resultsTopBar}>
      <div className={style.container}>
        <div className={style.found}>
          {props.foundMovies}&nbsp;
          {props.foundMovies === 1 ? "movie" : "movies"}&nbsp;found
        </div>
        <div className={style.sort}>
          <span>Sort by</span>
          <Button className={style.button}>release date</Button>
          <Button className={`${style.button} ${style.button_active}`}>
            rating
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsTopBar;
