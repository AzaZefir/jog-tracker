import classes from "./Login.module.css";
import Logo from "./../../assets/img/logo.png";
import { AuthContext } from "../../context/Context";
import { useContext } from "react";

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };

  return (
    <form onSubmit={login}>
      <div className={classes.header_container}>
        <div className={classes.header_logo}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={classes.login_page}>
        <div className={classes.login_container}>
          <div className={classes.login_button}>
            <button>Let me in</button>
          </div>
        </div>
      </div>
    </form>
  );
};
