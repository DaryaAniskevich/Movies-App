import style from "./MovieCard.module.css";
import { useState } from "react";
import Modal from "../../Modal";

const MovieCard = (props) => {
  let genres = "";
  for (let genre in Object.keys(props.genres)) {
    if (genre < props.genres.length - 1) {
      genres += `${props.genres[genre]} & `;
    } else {
      genres += props.genres[genre];
    }
  }

  const [show, setShow] = useState(false);
  const handleModal = () => {
    return show ? setShow(false) : setShow(true);
  };

  return (
    <div className={style.card} onClick={handleModal}>
      {show ? (
        <Modal
          show={show}
          handleModal={handleModal}
          title={props.title}
          genres={genres}
          overview={props.overview}
          budget={props.budget}
          rating={props.rating}
          image={props.image}
        />
      ) : null}
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
  );
};

export default MovieCard;
