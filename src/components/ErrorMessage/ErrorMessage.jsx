import style from "./ErrorMessage.module.css";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <div className={style.error}>
      <div className={style.container}>
        <div className={style.errorDescription}>
          <div className={style.title}>Keep calm</div>
          <div className={style.number}>404</div>
          <div className={style.description}>Page not found</div>
          <Link to={"/movies"} className={style.button}>
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
