import "./style.sass";
import logo from '~images/logo.jpg';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function Header() {
  return (
    <header className="header-container">
        <div className="company-logo"><a href="www.google.com"><img src={logo} alt="logo"/></a></div>
        <div className="header-menu">
          <a href="www.google.com" className="menu-header-item">Categorias</a>
          <a href="www.google.com" className="menu-header-item">Produtos</a>
          <a href="www.google.com" className="menu-header-item"><HiOutlineShoppingCart/></a>
        </div>
    </header>
  )
}

export default Header