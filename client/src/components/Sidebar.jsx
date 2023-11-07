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
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

/*
<div className={styles["sidebar-user-container"]}>
            <img className={styles["sidebar-profile-image"]} src="/assets/dummyData/profileImage1.jpg"/>
            <span>Tim Chihall</span>
            <span>Burnaby Canada</span>
            <div className={styles["sidebar-user-stats"]}>
                <div className={styles["sidebar-user-stats-column"]}>
                <span>368</span>
                <span>Post</span>
                </div>
                <div className={styles["sidebar-user-stats-column"]}>
                <span>184.K</span>
                <span>Followers</span>
                </div>
                <div className={styles["sidebar-user-stats-column"]}>
                <span>6M</span>
                <span>Following</span>
                </div>
            </div>
        </div>
        */
const Sidebar = () => {
    const navigate = useNavigate();
    const signOut = useSignOut();
    const {user} = useAuthContext();
    const {dispatch} = useDarkModeContext();
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
                <span onClick={() => navigate(`/profile/${user._id}`)}>Profile</span>

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
            <motion.li onClick={(e)=>{e.preventDefault();dispatch("toggle")}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
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

/*
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
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-six"]}`}>
                    <FaStar className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Favorites
                </span>
            </motion.li>*/