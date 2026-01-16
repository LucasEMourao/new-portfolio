import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonThemeContext from "../Buttons/ButtonThemeContext";
import Navigation from "./style";

const Menu = () => {
  const menuCheckboxRef = useRef(null);
  const menuRef = useRef(null);

  const closeMenu = () => {
    if (menuCheckboxRef.current) {
      menuCheckboxRef.current.checked = false;
    }
  };

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verificar se o menu está aberto
      if (menuCheckboxRef.current && menuCheckboxRef.current.checked) {
        // Verificar se o clique foi fora do menu
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navigation ref={menuRef} aria-label="Menu principal">
      <input ref={menuCheckboxRef} type="checkbox" id="menu-hamburguer" />
      <label htmlFor="menu-hamburguer" aria-label="Abrir/Fechar menu">
        <div className="menu">
          <span className="hamburguer"></span>
        </div>
      </label>

      <ul>
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
          {/* O botão de tema não fecha o menu, pois não é uma navegação */}
          <ButtonThemeContext />
        </li>
      </ul>
    </Navigation>
  );
};

export { Menu };
