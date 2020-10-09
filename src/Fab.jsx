import React from "react";
import "./styles.scss";
import "font-awesome/css/font-awesome.min.css";

const { useEffect, useState, useRef } = React;

export default Fab = ({ children }) => {
  const [fab, setFab] = useState(false);
  const floatingActionButton = useRef(null);

  const toggleFab = () => {
    setFab(!fab);
  };

  const handleEsc = (e) => {
    if (e.keyCode === 27) {
      setFab(false);
    }
  };

  const handleBodyClick = (e) => {
    if (e.target != floatingActionButton.current) {
      setFab(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    window.addEventListener("click", handleBodyClick);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("click", handleBodyClick);
    };
  }, []);

  if (children.length > 3) {
    console.log("FAB has more than 3 items");
    return;
  } else if (children.length <= 3 && children.length >= 1) {
    return (
      <div onClick={toggleFab} className={"radial-menu" + (fab ? " open" : "")}>
        <div
          className={
            "radial " +
            (children.length > 1 ? `radial-${children.length}-items` : ``)
          }
        >
          {children}
        </div>
        <div className="attention"></div>
        <a
          href="#"
          className="floating-action-button"
          ref={floatingActionButton}
        >
          <i className="fa fa-ellipsis-v"></i>
        </a>
      </div>
    );
  } else {
    return (
      <div className="radial-menu">
        <div className="attention"></div>
        {children}
      </div>
    );
  }
};

Fab.Item = (props) => {
  const { id, icon, onClick } = props;

  return (
    <span
      className={"floating-action-button-item fas " + icon}
      id={id}
      onClick={onClick}
    ></span>
  );
};
