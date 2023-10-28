import React, { useState } from 'react'
import {AiFillHome} from "react-icons/ai";
import {MdGroups,MdOutlineSaveAlt,MdDarkMode} from "react-icons/md";
import {FaUserFriends,FaStar} from "react-icons/fa";
import {IoIosSettings,IoMdArrowDropdown,IoMdExit} from "react-icons/io"
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";
import { listItemVariant } from '../animations/Variants';
import {useSignOut} from "../hooks/useSignOut"
import { useDarkModeContext } from '../hooks/useDarkModeContext';

const Sidebar = () => {
    const signOut = useSignOut();
    const {dispatch} = useDarkModeContext();
    const [isSeeMore,setIsSeeMore] = useState(false)
    return (
    <div className={styles["sidebar-container"]}>
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
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-three"]}`}>
                    <MdGroups className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Following
                </span>
            </motion.li>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-three"]}`}>
                    <MdGroups className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Followers
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
                    Saved
                </span>
            </motion.li>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-six"]}`}>
                    <FaStar className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Favorites
                </span>
            </motion.li>
            <motion.li onClick={(e)=>{e.preventDefault();dispatch("toggle")}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-seven"]}`}>
                    <MdDarkMode className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Dark Mod
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
        <div className={styles["following-container"]}>
            <div className={styles["sidebar-line-breaker"]}></div>
            <span>Following:</span>
        </div>
        <div className={styles["website-name-container"]}>
            <div className={styles["sidebar-line-breaker"]}></div>
            <span>Social web</span>
        </div>
    </div>
  )
}

export default Sidebar;
