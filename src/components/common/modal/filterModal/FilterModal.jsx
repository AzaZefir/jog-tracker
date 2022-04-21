import classes from './FilterModal.module.css'

export const FilterModal = ({ children, filterVisible, setFilterVisible }) => {
    const rootClasses = [classes.myMobileModal];
  
   
      
    if (filterVisible) {
      rootClasses.push(classes.activeClass);
    }
  
    return (
      <div className={rootClasses.join(" ")} onClick={() => setFilterVisible(false)}>
        <div
          className={classes.myMobileModalContent}
          onClick={(e) => e.stopPropagation()}
        >
                {children}            
        </div>
      </div>
    );
  };