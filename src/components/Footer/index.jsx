import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import FooterStyle from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <h3>Entre em contato comigo</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://linkedin.com/in/lucas-eleutherio-mourao"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/LucasEMourao">
            <FaGithub />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://wa.me/5538998656490">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </FooterStyle>
  );
};

export default Footer;
