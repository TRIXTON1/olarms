import React from "react";
import classes from "./Header.module.css";
import bell from "./assets/Bell.png"; // notification bell icon
import { IoIosArrowDown } from "react-icons/io";// dropdown arrow
import profilePic from "./assets/profile2.png"; // replace with your user image

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerRight}>
        {/* Notification */}
        <div className={classes.notification}>
          <img src={bell} alt="Userbell" className={classes.bell} />
          <span className={classes.dot}></span>
        </div>

        {/* User Info */}
        <div className={classes.userInfo}>
          <img src={profilePic} alt="User" className={classes.avatar} />
          <div className={classes.texts}>
            <p className={classes.name}>Adekoya Toluwani</p>
            <p className={classes.role}>Agent</p>
          </div>
          <IoIosArrowDown className={classes.arrow} />
        </div>
      </div>
    </header>
  );
};

export default Header;
