import React from "react";
import { MdOutlineFastfood } from "react-icons/md";
import CartBtn from "./Cart-Button/CartBtn";
import headerImg from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h2>Feast</h2>
          <MdOutlineFastfood className={classes.icon} />
        </div>
        <CartBtn />
      </header>

      <div className={classes["main-image"]}>
        <img src={headerImg} alt="Header layout" />
      </div>
    </>
  );
};

export default Header;
