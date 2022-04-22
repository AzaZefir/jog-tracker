import classes from "./Modal.module.css";
import ModalClose from "./../../../assets/img/cancel.png";

export const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.myModal];

  // document.body.style.overflow = "hidden";
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <img src={ModalClose} onClick={() => setVisible(false)} alt="" />
      </div>
    </div>
  );
};
