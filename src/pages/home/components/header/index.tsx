import "./style.sass";
import logo from '../../../../../public/imgs/logo.png';

function Header() {
  return (
    <header className="header-container">
        <div className="company-logo"><a href="www.google.com"><img src={logo} alt="logo"/></a></div>
        <div className="header-menu">
          <a href="www.google.com" className="menu-header-item">Categorias</a>
          <a href="www.google.com" className="menu-header-item">Produtos</a>
          <a href="www.google.com" className="menu-header-item">Carrinho</a>
        </div>
    </header>
  )
}

export default Header