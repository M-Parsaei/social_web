import React, { useState } from 'react'
import {AiFillHome} from "react-icons/ai";
import {BsSun} from "react-icons/bs";
import {MdOutlineSaveAlt,MdDarkMode} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";
import {IoIosSettings,IoMdExit} from "react-icons/io"
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";
import { listItemVariant } from '../animations/Variants';
import {useSignOut} from "../hooks/useSignOut"
import { useDarkModeContext } from '../hooks/useDarkModeContext';
import {Link, useNavigate} from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext';


const Sidebar = ({userId}) => {
    const signOut = useSignOut();
    const{state,dispatch} =useDarkModeContext();
    const [isSeeMore,setIsSeeMore] = useState(false);
    const navigate = useNavigate();
    const {user} = useAuthContext();
    return (
    <div className={styles["sidebar-container"]}>
        {user? 
        <>
        <div className={styles["sidebar-website-name"]}>
            <h2>Social Chat</h2>
        </div>
        <ul className={styles["sidebar-list-container"]}>
            <li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-one"]}`}>
                    <AiFillHome className={styles["sidebar-icons"]}/>
                </div>
                <span>
                <Link style={{color:"inherit",textDecoration:"none"}} to={`/`}>Home</Link>
                </span>
            </li>
            <li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-two"]}`}>
                    <IoIosSettings  className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    <Link style={{color:"inherit",textDecoration:"none"}} to={`/profile/${user._id}`}>Profile</Link>
                </span>
            </li>
            <li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-four"]}`}>
                    <FaUserFriends className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Chat
                </span>
            </li>
            <li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-five"]}`}>
                    <MdOutlineSaveAlt className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Bookmarks
                </span>
            </li>
            <li onClick={()=>{dispatch({type:"toggle"})}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-seven"]}`}>
                    {state? <BsSun className={styles["sidebar-icons"]}/> : <MdDarkMode className={styles["sidebar-icons"]}/>  } 
                </div>
                <span>
                    {state?  "Bright Mode" :"Dark Mode"  } 
                </span>
            </li>
            <li onClick={()=>{signOut();navigate("/login",{replace:true})}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-eight"]}`}>
                    <IoMdExit className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Log Out
                </span>
            </li>
        </ul>  
        <div className={styles["sidebar-dashed-divider"]}/>
        </>
    : null}
    </div>
  )
}

export default Sidebar;

