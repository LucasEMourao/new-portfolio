import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "./style.jsx";
import { Menu } from "../Menu/index.jsx";

const Header = () => {
  return (
    <Container>
      <Link to={"/"} aria-label="Página inicial">
        <img src={logo} alt="Logo image" />
      </Link>

      <Menu />
    </Container>
  );
};

export default Header;
