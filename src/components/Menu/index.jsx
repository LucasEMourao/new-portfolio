import { Link } from "react-router-dom";
import ButtonThemeContext from "../Buttons/ButtonThemeContext";
import Navigation from "./style";

const Menu = () => {
  return (
    <Navigation>
      <input type="checkbox" id="menu-hamburguer" />
      <label htmlFor="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer"></span>
        </div>
      </label>

      <ul>
        <Link to={"/"}>
          <li>Sobre</li>
        </Link>
        <Link to={"/skills"}>
          <li>Habilidades</li>
        </Link>
        <Link to={"/projects"}>
          <li>Projetos</li>
        </Link>
        <li>
          <ButtonThemeContext />
        </li>
      </ul>
    </Navigation>
  );
};

export { Menu };
