import { useState } from "react";
import "./style.sass";
import logo from "~images/logo.jpg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Tooltip, Tabs, Tab } from "@mui/material";

function Header() {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <header className="header-container">
      <div className="company-logo">
        <a href="www.google.com">
          <img src={logo} alt="logo" />
        </a>
      </div>
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
          <Tab className="tab-menu" value="one" label="Categorias" />
          <Tab className="tab-menu" value="two" label="Produtos" />
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
