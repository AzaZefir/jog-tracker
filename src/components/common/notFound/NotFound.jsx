import { Link } from "react-router-dom";
import NotFoundImg from "./../../../assets/img/sad-rounded-square-emoticon.png";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFound_container}>
      <img src={NotFoundImg} alt="" />
      <h1>Nothing is there</h1>
      <Link to="/jogs">Create your jog first</Link>
    </div>
  );
};

export default NotFound;
