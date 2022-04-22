import classes from "./MobileMenu.module.css";
import { Link, NavLink } from "react-router-dom";
import LogoMenu from "./../../../assets/img/logoMenu.png";

export const MobileMenu = ({ setActiveMobileMenu }) => {
  return (
    <div className={classes.mobile_container}>
      <div className={classes.mobile_wrapper}>
        <div className={classes.mobile_logo}>
          <img
            className={classes.mobile_logo_class}
            src={LogoMenu}
            alt="logoMenu"
          />
        </div>
        <div className={classes.mobile_links}>
          <div style={{ marginBottom: "20px" }}>
            <NavLink
              className="active"
              to="/jogs"
              onClick={() => {
                setActiveMobileMenu(false);
              }}
            >
              JOGS
            </NavLink>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Link
              to="/info"
              onClick={() => {
                setActiveMobileMenu(false);
              }}
            >
              INFO
            </Link>
          </div>
          <div>
            <Link
              to="/contactUs"
              onClick={() => {
                setActiveMobileMenu(false);
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
