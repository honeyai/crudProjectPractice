import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./navbar.css";
import Menu from "../Menu/Menu";

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="navbar_Container">
      <div className="navbar_Nav">
        {!isOpen ? (
          <div className="navbar_MenuHamburger" onClick={handleOpen}>
            <div className="navbar_HamburgerPart" id="1" />
            <div className="navbar_HamburgerPart" id="2" />
            <div className="navbar_HamburgerPart" id="3" />
          </div>
        ) : (
          <div className="navbar_MenuHamburger" onClick={handleOpen}>
            <div className={isOpen ? "navbar_HamburgerPart open" : "navbar_Hamburger"} />
            <div className={isOpen ? "navbar_HamburgerPart open" : "navbar_Hamburger"} />
            <div className={isOpen ? "navbar_HamburgerPart open" : "navbar_Hamburger"} />
          </div>
        )}
        <SearchIcon />
        <div className="navbar_Logo">Bʊkstore</div>
        <AccountCircleIcon />
        <ShoppingBasketIcon />
      </div>
      <Menu isOpen={isOpen}/> 
    </div>
  );
};

export default Navbar;
