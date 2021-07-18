import style from "./Header.module.css";
import Logo from "../Logo";
import SearchForm from "../SearchForm";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Logo />
        <SearchForm searchMovies={props.searchMovies} />
      </div>
    </div>
  );
};

export default Header;
