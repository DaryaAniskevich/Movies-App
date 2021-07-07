import style from "./Modal.module.css";
import Button from "../Button";
import styled from "styled-components";

const ModalContent = styled.div`
  width: 550px;
  min-height: 350px;
  height: 100%;
  background-color: black;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Modal = (props) => {
  return (
    <div
      show={props.show}
      className={props.show ? `${style.modal} ${style.active}` : style.modal}
      onClick={props.handleModal}
    >
      <div className={style.wrapper}>
        <ModalContent
          className={style.content}
          onClick={(e) => e.stopPropagation()}
          image={props.image}
        >
          <div className={style.header}>
            <h3 className={style.title}>{props.title}</h3>
            <Button className={style.button_close} onClick={props.handleModal}>
              x
            </Button>
          </div>

          <div className={style.body}>
            <p className={style.genres}>{props.genres}</p>
            <p className={style.description}>{props.overview}</p>
            <p className={style.description}>
              Rating: {props.rating === 0 ? "unknown" : props.rating}
            </p>
            <p className={style.description}>
              Budget: {props.budget === 0 ? "unknown" : `$${props.budget}`}
            </p>
          </div>
        </ModalContent>
      </div>
    </div>
  );
};

export default Modal;
