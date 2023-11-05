import React, { useState } from 'react'
import {AiFillHome} from "react-icons/ai";
import {BsChatLeftTextFill} from "react-icons/bs";
import {MdOutlineSaveAlt,MdDarkMode} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";
import {IoIosSettings,IoMdExit} from "react-icons/io"
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";
import { listItemVariant } from '../animations/Variants';
import {useSignOut} from "../hooks/useSignOut"
import { useDarkModeContext } from '../hooks/useDarkModeContext';


const Sidebar = () => {
    const signOut = useSignOut();
    const{dispatch} =useDarkModeContext();
    const [isSeeMore,setIsSeeMore] = useState(false)
    return (
    <div className={styles["sidebar-container"]}>
        
        <div className={styles["sidebar-dashed-divider"]}/>
        <ul className={styles["sidebar-list-container"]}>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-one"]}`}>
                    <AiFillHome className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Home
                </span>
            </motion.li>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-two"]}`}>
                    <IoIosSettings  className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Profile
                </span>
            </motion.li>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-four"]}`}>
                    <FaUserFriends className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Chat
                </span>
            </motion.li>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-five"]}`}>
                    <MdOutlineSaveAlt className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Bookmarks
                </span>
            </motion.li>
            <motion.li onClick={(e)=>{dispatch({type:"toggle"})}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-seven"]}`}>
                    <MdDarkMode className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Theme
                </span>
            </motion.li>
            <motion.li onClick={(e)=>{e.preventDefault(); signOut()}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-eight"]}`}>
                    <IoMdExit className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Log Out
                </span>
            </motion.li>
        </ul>  
        
    </div>
  )
}

export default Sidebar;

