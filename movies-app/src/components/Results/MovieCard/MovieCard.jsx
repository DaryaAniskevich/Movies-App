import style from "./MovieCard.module.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  let genres = "";
  for (let genre in Object.keys(props.genres)) {
    if (genre < props.genres.length - 1) {
      genres += `${props.genres[genre]} & `;
    } else {
      genres += props.genres[genre];
    }
  }

  return (
    <Link to={`/movies/${props.id}`} className={style.link}>
      <div className={style.card}>
        <div className={style.imageBlock}>
          <img src={props.image} alt={props.title} className={style.image} />
        </div>
        <div className={style.description}>
          <div className={style.titleBlock}>
            <div className={style.title}>{props.title}</div>
            <div className={style.ganre}>{genres}</div>
          </div>
          <div className={style.releaseBlock}>
            <div className={style.release}>{props.release}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
