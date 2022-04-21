import classes from "./Mobile.module.css";
import ModalClose from "./../../../../assets/img/close (1).png";

export const MobileModal = ({
  children,
  mobileModalVisible,
  setIsMobileModalVisible,
}) => {
  const rootClasses = [classes.myMobileModal];

  if (mobileModalVisible) {
    rootClasses.push(classes.activeClass);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setIsMobileModalVisible(false)}
    >
      <div
        className={classes.myMobileModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <img
          className={classes.myMobileModalClose}
          src={ModalClose}
          onClick={() => setIsMobileModalVisible(false)}
          alt=""
        />
      </div>
    </div>
  );
};
