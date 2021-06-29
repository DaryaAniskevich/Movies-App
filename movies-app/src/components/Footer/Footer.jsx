import style from "./Footer.module.css";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
