import style from "./Header.module.css";
import Logo from "../Logo";
import SearchForm from "../SearchForm";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Logo />
        <SearchForm
          setValue={props.setValue}
          setSearchBy={props.setSearchBy}
          findMovies={props.findMovies}
          searchDisabled={props.searchDisabled}
        />
      </div>
    </div>
  );
};

export default Header;
