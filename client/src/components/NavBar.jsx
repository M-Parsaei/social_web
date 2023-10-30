import React from "react";
import { BsSearch, BsBell, BsChatDots, BsPersonPlus } from "react-icons/bs";
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
    </div>
  );
}
