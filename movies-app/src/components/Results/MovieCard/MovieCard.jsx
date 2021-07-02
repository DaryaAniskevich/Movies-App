import style from "./MovieCard.module.css";

const MovieCard = (props) => {
  let ganres = "";
  for (let ganre in Object.keys(props.genres)) {
    if (ganre < props.genres.length - 1) {
      ganres += `${props.genres[ganre]} & `;
    } else {
      ganres += props.genres[ganre];
    }
  }
  return (
    <div className={style.card}>
      <div className={style.imageBlock}>
        <img src={props.image} alt={props.title} className={style.image} />
      </div>
      <div className={style.description}>
        <div className={style.titleBlock}>
          <div className={style.title}>{props.title}</div>
          <div className={style.ganre}>{ganres}</div>
        </div>
        <div className={style.releaseBlock}>
          <div className={style.release}>{props.release}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
