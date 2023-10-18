import React, { useState } from 'react'
import {AiFillHome} from "react-icons/ai";
import {MdGroups,MdOutlineSaveAlt} from "react-icons/md";
import {FaUserFriends,FaStar} from "react-icons/fa";
import {IoIosSettings,IoMdArrowDropdown} from "react-icons/io"
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";


const Sidebar = () => {
    const [isSeeMore,setIsSeeMore] = useState(false)
  return (
    <div className={styles["sidebar-container"]}>
        <ul className={styles["sidebar-list-container"]}>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-one"]}`}>
                    <AiFillHome className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Home
                </span>
            </li>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-two"]}`}>
                    <IoIosSettings  className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Profile
                </span>
            </li>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-three"]}`}>
                    <MdGroups className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Freinds
                </span>
            </li>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-four"]}`}>
                    <FaUserFriends className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Chat
                </span>
            </li>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-five"]}`}>
                    <MdOutlineSaveAlt className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Saved
                </span>
            </li>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-six"]}`}>
                    <FaStar className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Favorites
                </span>
            </li>
            {isSeeMore && 
            
            ( 
            <motion.div initial={{y:-20}} animate={{y:0}} transition={{duration:1}}>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-six"]}`}>
                    <FaStar className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Favorites
                </span>
            </li>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-six"]}`}>
                    <FaStar className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Favorites
                </span>
            </li>
            <li className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-six"]}`}>
                    <FaStar className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Favorites
                </span>
            </li>
            </motion.div>
        )}
            <div className={styles["see-more-container"]} onClick={(e)=>{e.preventDefault(); setIsSeeMore((s)=>!s)}}>
                <IoMdArrowDropdown/>
                <span>See More</span>
            </div>
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
