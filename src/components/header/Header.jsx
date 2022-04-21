import React, { useState } from "react";
import classes from "./Header.module.css";
import Logo from "./../../assets/img/logo.png";
import Filter from "./../../assets/img/filter.png";
import { Link } from "react-router-dom";
import { MobileMenu } from "../common/mobileMenu/MobileView";
import { MobileModal } from "../common/modal/mobileModal/MobileModal";
import { FilterModal } from "./../common/modal/filterModal/FilterModal";
import FilterActive from "./../../assets/img/filter-active.png";

export const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="App">
      <div className={classes.header_container}>
        <div className={classes.header_logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={classes.nav_wrap}>
          {" "}
          <nav className={classes.header_links}>
            <div>
              <Link to="/jogs">JOGS</Link>
            </div>
            <div>
              <Link to="/info">INFO</Link>
            </div>
            <div>
              <Link to="/contactUs">CONTACT US</Link>
            </div>
          </nav>
          <div className={classes.filter_image}>
            <img
              src={(Filter = !filterVisible ? Filter : FilterActive)}
              alt="filter"
              onClick={() => setFilterVisible(true)}
            />
          </div>
        </div>
        <div
          className={classes.mobile_menu}
          onClick={() => setActiveMobileMenu(true)}
        />
      </div>

      <MobileModal
        mobileModalVisible={activeMobileMenu}
        setIsMobileModalVisible={setActiveMobileMenu}
      >
        <MobileMenu />
      </MobileModal>

      <FilterModal
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
      >
        <div className={classes.filter_modal}>
          Date from
          <input type="date" />
          Date to
          <input type="date" />
        </div>
      </FilterModal>
    </div>
  );
};
