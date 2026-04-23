import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonThemeContext from "../Buttons/ButtonThemeContext";
import Navigation from "./style";

const Menu = () => {
  const menuCheckboxRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    if (menuCheckboxRef.current) {
      menuCheckboxRef.current.checked = false;
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = (event) => {
    setIsMenuOpen(event.target.checked);
  };

  return (
    <Navigation ref={menuRef} aria-label="Menu principal">
      <input
        ref={menuCheckboxRef}
        type="checkbox"
        id="menu-hamburguer"
        checked={isMenuOpen}
        onChange={handleMenuToggle}
        aria-hidden="true"
      />
      <label
        htmlFor="menu-hamburguer"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-menu-list"
      >
        <div className="menu">
          <span className="hamburguer"></span>
        </div>
      </label>

      <ul id="main-menu-list">
        <li>
          <Link to={"/"} onClick={closeMenu}>Sobre</Link>
        </li>
        <li>
          <Link to={"/skills"} onClick={closeMenu}>Habilidades</Link>
        </li>
        <li>
          <Link to={"/projects"} onClick={closeMenu}>Projetos</Link>
        </li>
        <li>
          <ButtonThemeContext />
        </li>
      </ul>
    </Navigation>
  );
};

export { Menu };
