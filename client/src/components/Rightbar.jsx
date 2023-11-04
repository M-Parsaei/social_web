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

const Rightbar = () => {
    const signOut = useSignOut();
    const {dispatch} = useDarkModeContext();
    const [isSeeMore,setIsSeeMore] = useState(false)
    return (
    <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-dashed-divider"]}/>
        <h3>Friend Request</h3>
        <div className={styles["sidebar-contact-container"]}>
            <div className={styles["contact-user"]}>
                <img src="/assets/dummyData/profileImage1.jpg"/>
                <div className={styles["contact-text-information"]}>
                    <p>Julia Mauro</p>
                    <span>Detroit, United State</span>
                </div>
                <BsChatLeftTextFill className={styles["contact-chat-icon"]}/>
            </div>
            <div className={styles["contact-user"]}>
                <img src="/assets/dummyData/profileImage1.jpg"/>
                <div className={styles["contact-text-information"]}>
                    <p>Julia Mauro</p>
                    <span>Detroit, United State</span>
                </div>
                <BsChatLeftTextFill className={styles["contact-chat-icon"]}/>
            </div>
            <div className={styles["contact-user"]}>
                <img src="/assets/dummyData/profileImage1.jpg"/>
                <div className={styles["contact-text-information"]}>
                    <p>Julia Mauro</p>
                    <span>Detroit, United State</span>
                </div>
                <BsChatLeftTextFill className={styles["contact-chat-icon"]}/>
            </div>
        </div>
        <div className={styles["sidebar-dashed-divider"]}/>
        <h3>Friend Suggestion</h3>
        <div className={styles["sidebar-contact-container"]}>
            <div className={styles["contact-user"]}>
                <img src="/assets/dummyData/profileImage1.jpg"/>
                <div className={styles["contact-text-information"]}>
                    <p>Julia Mauro</p>
                    <span>Detroit, United State</span>
                </div>
                <BsChatLeftTextFill className={styles["contact-chat-icon"]}/>
            </div>
            <div className={styles["contact-user"]}>
                <img src="/assets/dummyData/profileImage1.jpg"/>
                <div className={styles["contact-text-information"]}>
                    <p>Julia Mauro</p>
                    <span>Detroit, United State</span>
                </div>
                <BsChatLeftTextFill className={styles["contact-chat-icon"]}/>
            </div>
            <div className={styles["contact-user"]}>
                <img src="/assets/dummyData/profileImage1.jpg"/>
                <div className={styles["contact-text-information"]}>
                    <p>Julia Mauro</p>
                    <span>Detroit, United State</span>
                </div>
                <BsChatLeftTextFill className={styles["contact-chat-icon"]}/>
            </div>
            <span style={{alignSelf:'center',color:'#436cf6',cursor:'pointer'}}>View All</span>
        </div>
    </div>
  )
}

export default Rightbar;

