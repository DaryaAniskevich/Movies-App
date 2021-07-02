import style from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={style.card}>
      <div className={style.imageBlock}>
        <img src="#" alt="film name" className={style.image} />
      </div>
      <div className={style.description}>
        <div className={style.titleBlock}>
          <div className={style.title}>Title</div>
          <div className={style.ganre}>Ganre</div>
        </div>
        <div className={style.releaseBlock}>
          <div className={style.release}>date</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
