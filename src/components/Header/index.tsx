import "./styles.scss";

// Importe das images
import logoImg from "../../assets/logos/logo.png";
import searchIcon from "../../assets/icons/header/MagnifyingGlass.png";
import cartIcon from "../../assets/icons/header/ShoppingCart.png";
import heartIcon from "../../assets/icons/header/Heart.png";
import userIcon from "../../assets/icons/header/UserCircle.png";
import vectorIcon from "../../assets/icons/header/Vector.png";
import creditCardIcon from "../../assets/icons/header/CreditCard.png";
import shieldIcon from "../../assets/icons/header/ShieldCheck.png";
import truckIcon from "../../assets/icons/header/Truck.png";
import crowIcon from "../../assets/icons/header/CrownSimple.png";

export function Header() {
  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="container">
          <p>
            <img src={shieldIcon} alt="" />
            Compra <span className="text-highlight">100% segura</span>
          </p>
          <p>
            <img src={truckIcon} alt="" />
            <span className="text-highlight">Frete grátis</span> acima de R$ 200
          </p>
          <p>
            <img src={creditCardIcon} alt="" />
            <span className="text-highlight">3x sem juros</span> no cartão
          </p>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-logo">
            <a href="/">
              <img src={logoImg} alt="Logo Econverse" />
            </a>
          </div>

          <div className="header-search">
            <form>
              <input type="text" placeholder="O que você está buscando?" />
              <button type="submit" className="search-button">
                <img src={searchIcon} alt="lupa" />
              </button>
            </form>
          </div>

          <div className="header-actions">
            <button className="action-button" title="Sair">
              <img src={vectorIcon} alt="Sair" />
            </button>
            <button className="action-button" title="Favoritos">
              <img src={heartIcon} alt="Favoritos" />
            </button>
            <button className="action-button" title="Minha Conta">
              <img src={userIcon} alt="Usuário" />
            </button>
            <button className="action-button" title="Carrinho">
              <img src={cartIcon} alt="Carrinho de compras" />
            </button>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-link ">
                TODAS CATEGORIAS
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                SUPERMERCADO
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                LIVROS
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                MODA
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                LANÇAMENTOS
              </a>
            </li>
            <li>
              <a href="#" className="nav-link nav-link-active">
                OFERTAS DO DIA
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                <img src={crowIcon} alt="" />
                ASSINATURA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
