import React from 'react';
import {BsSearch,BsBell,BsChatDots,BsPersonPlus} from 'react-icons/bs';
import styles from "./navbar.module.css";
export default function NavBar() {
  return (
    <div className={styles["nav-bar-container"]}>
        <div className={styles["nav-bar-left"]}>
            <span>SocialWeb</span>
        </div>
        <div className={styles["nav-bar-center"]}>
          <div className={styles["nav-bar-search-container"]}>
            <BsSearch className={styles['nav-bar-react-icons']}/>
            <input type="text" placeholder='search here...'></input>
          </div>
        </div>
        <div className={styles["nav-bar-right"]}>
          <div className={styles["nav-bar-link"]}>
            <span>Home</span>
            <span>TimeLine</span>
          </div>
          <div className={styles["nav-bar-icons"]}>
            <BsPersonPlus/>
            <BsChatDots/>
            <BsBell/>
          </div>
          <img src="/assets/dummyData/profileImage1.jpg" alt='profile picture'/>
        </div>
    </div>
  )
}
