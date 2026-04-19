import React from "react";
import "./styles.scss";

// Importe dos ícones sociais
import iconInstagram from "../../assets/icons/footer/instagram.png";
import iconFacebook from "../../assets/icons/footer/facebook.png";
import iconLinkedin from "../../assets/icons/footer/linkedin.png";
import logoEconverse from "../../assets/icons/footer/Grupo 9.png";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img src={logoEconverse} alt="Econverse" className="footer-logo" />
          <p className="brand-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-icons">
            <a href="#">
              <img src={iconInstagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={iconFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={iconLinkedin} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Institucional</h3>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Movimento</a>
              </li>
              <li>
                <a href="#">Trabalhe conosco</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Ajuda</h3>
            <ul>
              <li>
                <a href="#">Suporte</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Termos</h3>
            <ul>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Troca e Devolução</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
