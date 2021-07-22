import style from "./Modal.module.css";
import Button from "../Button";
import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailsGetData } from "../../store/movieDetailsActions";
import {
  movieDetailsSelector,
  searchDoneSelector,
  searchMoviesSelector,
  getMoviesSelector,
} from "../../store/selectors";
import { Link } from "react-router-dom";
import { setSearchDone } from "../../store/searchMoviesActions";
import MovieCard from "../Results/MovieCard";

const ModalContent = styled.div`
  height: 350px;
  background-color: black;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Modal = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movieDetails = useSelector(movieDetailsSelector);

  useEffect(() => {
    dispatch(movieDetailsGetData(movieId));
  }, [dispatch, movieId]);
  const foundMovies = useSelector(searchMoviesSelector);
  const movies = useSelector(getMoviesSelector);

  const searchDone = useSelector(searchDoneSelector);
  console.log(searchDone);

  let genres = "";
  for (let genre in movieDetails.genres) {
    if (genre < movieDetails.genres.length - 1) {
      genres += `${movieDetails.genres[genre]} - `;
    } else {
      genres += movieDetails.genres[genre];
    }
  }

  return (
    <div>
      <div className={style.container}>
        {foundMovies.length > 0
          ? foundMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                release={movie.release_date}
                image={movie.poster_path}
                genres={movie.genres}
                overview={movie.overview}
                budget={movie.budget}
                rating={movie.vote_average}
                id={movie.id}
              />
            ))
          : movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                release={movie.release_date}
                image={movie.poster_path}
                genres={movie.genres}
                overview={movie.overview}
                budget={movie.budget}
                rating={movie.vote_average}
                id={movie.id}
              />
            ))}
      </div>
      <div className={style.modal}>
        <div className={style.wrapper}>
          <ModalContent
            className={style.content}
            image={movieDetails.poster_path}
          >
            <div className={style.header}>
              <h3 className={style.title}>{movieDetails.title}</h3>
              <Link to={"/movies"}>
                <Button
                  className={style.button_close}
                  onClick={dispatch(setSearchDone(false))}
                >
                  x
                </Button>
              </Link>
            </div>

            <div className={style.body}>
              <p className={style.genres}>{genres}</p>
              <p className={style.description}>{movieDetails.overview}</p>
              <p className={style.description}>
                {`Runtime: ${movieDetails.runtime} min.`}
              </p>
              <p className={style.description}>
                {`Rating:
                ${
                  movieDetails.vote_average === 0
                    ? "unknown"
                    : movieDetails.vote_average
                }`}
              </p>
              <p className={style.description}>
                {`Budget:
                ${
                  movieDetails.budget === 0
                    ? "unknown"
                    : `$${movieDetails.budget}`
                }`}
              </p>
            </div>
          </ModalContent>
        </div>
      </div>
    </div>
  );
};

export default Modal;
