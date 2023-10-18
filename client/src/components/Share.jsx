import React, { useState } from 'react'
import styles from "./Share.module.css";
import {BiSolidPhotoAlbum} from "react-icons/bi"
import {PiTagChevronFill} from "react-icons/pi"
import {MdLocationPin} from "react-icons/md"
import {PiSmileyFill} from "react-icons/pi";
import { useAuthContext } from '../hooks/useAuthContext';

const backEndUrl = process.env.REACT_APP_BACKEND_URL

const Share = () => {
  const {user} = useAuthContext();
  return (
    <div className={styles["share-container"]}>
        <div className={styles["share-top-container"]}>
            <div className={styles["share-image-container"]}>
            <img src={user.profilePic? backEndUrl + user.profilePic : backEndUrl + "/images/genericProfile.png"} alt="profile_image"/>
            </div>
            <div className={styles["share-input-container"]}>
            <input type="text" placeholder="What's in your mind?"/>
            </div>
        </div> 
        <div className={styles["share-line-breaker"]}></div>
        <div className={styles["share-bottom-container"]}>
            <ul className={styles["tag-list"]}>
                <li className={styles["share-option-container"]}>
                    <div className={`${styles["share-icon-container"]} ${styles["item-one"]}`}>
                        <BiSolidPhotoAlbum className={styles["share-icons"]}/>
                    </div>
                    <span>Photo</span>
                </li>
                <li className={styles["share-option-container"]}>
                    <div className={`${styles["share-icon-container"]} ${styles["item-two"]}`}>
                        <PiTagChevronFill className={styles["share-icons"]}/>
                    </div>
                    <span>Tag</span>
                </li>
                <li className={styles["share-option-container"]}>
                    <div className={`${styles["share-icon-container"]} ${styles["item-three"]}`}>
                        <MdLocationPin className={styles["share-icons"]}/>
                    </div>
                    <span>Location</span>
                </li>
                <li className={styles["share-option-container"]}>
                    <div className={`${styles["share-icon-container"]} ${styles["item-four"]}`}>
                        <PiSmileyFill className={styles["share-icons"]}/>
                    </div>
                    <span>Feelings</span>
                </li>
            </ul> 
            <button className={styles["share-button"]}>Share</button>
        </div>
      
    </div>
  )
}

export default Share
