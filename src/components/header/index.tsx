import { useState } from "react";
import "./style.sass";
import logo from "~images/logo.jpg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Tooltip, Tabs, Tab } from "@mui/material";

function Header() {
  const [value, setValue] = useState("home");
  const [showNav, setShowNav] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleScroll = () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 39) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className="header-container"
      style={
        showNav
          ? {
              borderBottom: "2px solid #f5f5f5",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }
          : {}
      }
    >
      <a className="company-logo" href="www.google.com">
        <img style={showNav ? {maxWidth: "100%"} : {}} src={logo} alt="logo" />
      </a>
      <div className="header-menu">
        <div className="inner-menu">
          <Tabs
            className="menu-header-item"
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab className="tab-menu" value="home" href="/" label="Home"/>
            <Tab className="tab-menu" value="products" href="/products" label="Produtos" />
            <Tab className="tab-menu" value="support" label="Suporte" />
            <Tab className="tab-menu" value="about" label="Sobre" />
            <Tab className="tab-menu" value="contact" label="Contato" />
          </Tabs>
          <Tooltip title="Carrinho">
            <button className="menu-header-item">
              <HiOutlineShoppingCart />
            </button>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}

export default Header;
