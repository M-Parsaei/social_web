import React from 'react'
import {MdOutlineRssFeed} from "react-icons/md";
import {BsFillChatSquareTextFill, BsPlayCircleFill, BsFillBookmarkFill} from "react-icons/bs";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles["sidebar-container"]}>
        <ul>
            <li className={styles["sidebar-item"]}>
            <MdOutlineRssFeed/>Feed
            </li>
            <li className={styles["sidebar-item"]}>
                <BsFillChatSquareTextFill/>Chats
            </li>
            <li className={styles["sidebar-item"]}>
                <BsPlayCircleFill/>Videos
            </li>
            <li className={styles["sidebar-item"]}>
                <BsFillBookmarkFill/>Bookmarks
            </li>

        </ul>  
    </div>
  )
}

export default Sidebar;
