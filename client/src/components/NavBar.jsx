import React from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import styles from "./navbar.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
const backEndUrl = process.env.REACT_APP_BACKEND_URL;

export default function NavBar() {
  const { user } = useAuthContext();
  return (
    <div className={styles["nav-bar-container"]}>
      <div className={styles["nav-bar-search-container"]}>
        <BsSearch className={styles["nav-bar-react-icons"]} />
        <input type="text" placeholder="search here..."></input>
      </div>
      <div className={styles["nav-bar-right-side"]}>
        <div className={styles["nav-bar-notification-icons"]}>
          <BsBell className={styles["nav-bar-react-icons"]} />
          <GoMail className={styles["nav-bar-react-icons"]} />
        </div>
        <div className={styles["nav-bar-user-container"]}>
          <span>Gurkirat Arora</span>
          <img
            src="/assets/dummyData/profileImage1.jpg"
            alt="profile picture"
          />
          <span>▾</span>
        </div>
      </div>
    </div>
  );
}
