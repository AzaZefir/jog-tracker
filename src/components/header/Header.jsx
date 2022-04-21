import React, { useState } from "react";
import classes from "./Header.module.css";
import Logo from "./../../assets/img/logo.png";
import Filter from "./../../assets/img/filter.png";
import { Link, NavLink } from "react-router-dom";
import { MobileMenu } from "../common/mobileMenu/MobileMenu";
import { MobileModal } from "../common/mobileMenu/mobileModal/MobileModal";

export const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  return (
    <div className="App">
      <div className={classes.header_container}>
        <div className={classes.header_logo}>
          <img src={Logo} alt="" />
        </div>
        <nav className={classes.header_links}>
          <div>
            <NavLink to="/jogs" >JOGS</NavLink>
          </div>
          <div>
            <Link to="/info">INFO</Link>
          </div>
          <div>
            <Link to="/contactUs">CONTACT US</Link>
          </div>
          <div>
            <img src={Filter} alt="" />
          </div>
        </nav>
        <MobileModal mobileModalVisible={activeMobileMenu} setIsMobileModalVisible={setActiveMobileMenu}>
          <MobileMenu />
        </MobileModal>
        <div
          className={classes.mobile_menu}
          onClick={() => setActiveMobileMenu(true)}
        />
      </div>
    </div>
  );
};
