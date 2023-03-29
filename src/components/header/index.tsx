import { useState } from "react";
import "./style.sass";
import logo from "~images/logo.jpg";
import {
  HiOutlineShoppingCart,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineTrash,
} from "react-icons/hi";
import { BiSupport, BiBox } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import {
  Tooltip,
  Tabs,
  Tab,
  Popover,
  Typography,
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Header() {
  const [nav, setNav] = useState(window.location.pathname);
  const [showNav, setShowNav] = useState(false);
  const [cart, setCart] = useState<HTMLButtonElement | null>(null);
  const [count, setCount] = useState(1);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCart(event.currentTarget);
    setCount(1);
  };

  const handleClose = () => {
    setCart(null);
  };

  const open = Boolean(cart);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setNav(newValue);
  };

  const handleScroll = () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 39) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  const handleRemoveProduct = () => {
    setCount(0);
  };

  const renderCartModal = () => {
    if (count >= 1) {
      return (
        <Popover
          id={id}
          open={open}
          anchorEl={cart}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            style: { width: "25%", display: "flex", paddingLeft: "2em" },
          }}
        >
          <img src={logo} style={{ width: "15%" }}></img>
          <Typography sx={{ p: 2  }}>
            Computador
            <TextField
              id="standard-number"
              label="Qtd"
              sx={{
                width: "2em",
                marginLeft: "1em",
                "& label.Mui-focused": {
                  color: "red",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "red",
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "red",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                },
              }}
              type="number"
              value={count}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <ButtonGroup
              color="warning"
              size="small"
              sx={{ paddingLeft: "2em", paddingTop: "0.5em" }}
            >
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
            <button style={{ marginLeft: "2em" }}>
              <HiOutlineTrash size="20px" onClick={handleRemoveProduct} />
            </button>
          </Typography>
        </Popover>
      );
    } else {
      return (
        <Popover
          id={id}
          open={open}
          anchorEl={cart}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>Não há itens no carrinho.</Typography>
        </Popover>
      );
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
      <a className="company-logo" href="/">
        <img
          style={showNav ? { maxWidth: "100%" } : {}}
          src={logo}
          alt="logo"
        />
      </a>
      <div className="header-menu">
        <div className="inner-menu">
          <Tabs
            className="menu-header-item"
            value={nav}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab
              icon={<HiOutlineHome />}
              className="tab-menu"
              value="/"
              href="/"
              label="Home"
            />
            <Tab
              icon={<BiBox />}
              className="tab-menu"
              value="/products"
              href="/products"
              label="Produtos"
            />
            <Tab
              icon={<BiSupport />}
              className="tab-menu"
              value="/support"
              href="/support"
              label="Suporte"
            />
            <Tab
              icon={<HiOutlineInformationCircle />}
              className="tab-menu"
              value="/about"
              href="/about"
              label="Sobre"
            />
            <Tab
              icon={<AiOutlinePhone />}
              className="tab-menu"
              value="/contact"
              href="/contact"
              label="Contato"
            />
          </Tabs>

          <Tooltip title="Carrinho">
            <button className="menu-header-item" onClick={handleOpen}>
              <HiOutlineShoppingCart />
            </button>
          </Tooltip>
          {renderCartModal()}
        </div>
      </div>
    </header>
  );
}

export default Header;
