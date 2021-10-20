import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../components/Navigation.module.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className={classes.ul}>
        <li className={classes.li}>
          <NavLink to="/weather">Weather Home</NavLink>
        </li>
        <li className={classes.li}>
          <NavLink to="/favorite">Favorite Location</NavLink>
        </li>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
