import React from "react";
import { BsSearch, BsBell, BsChatDots, BsPersonPlus } from "react-icons/bs";
import styles from "./navbar.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
import AccountDropMenu from "./AccountDropMenu";
const backEndUrl = process.env.REACT_APP_BACKEND_URL;
export default function NavBar() {
  const { user } = useAuthContext();
  return (
    <>
      <div className={styles["nav-bar-container"]}>
        <div className={styles["nav-bar-left"]}>
          <span>SocialWeb</span>
        </div>
        <div className={styles["nav-bar-center"]}>
          <div className={styles["nav-bar-search-container"]}>
            <BsSearch className={styles["nav-bar-react-icons"]} />
            <input type="text" placeholder="search here..."></input>
          </div>
        </div>
        <div className={styles["nav-bar-right"]}>
          <div className={styles["nav-bar-icons"]}>
            <BsPersonPlus />
            <BsChatDots />
            <BsBell />
          </div>
          <div className={styles["profile-info-nav"]}>
            <span className={styles["nav-user-name"]}>
              {user.username ? user.username + " ▾" : null}
              <AccountDropMenu/>
            </span>
            <img
              src={
                user.profilePic
                  ? backEndUrl + user.profilePic
                  : backEndUrl + "/images/genericProfile.png"
              }
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </>
  );
}
