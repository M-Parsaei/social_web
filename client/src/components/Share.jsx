import React from 'react'
import styles from "./Share.module.css";
import {BiSolidPhotoAlbum} from "react-icons/bi"
import {PiTagChevronFill} from "react-icons/pi"
import {MdLocationPin} from "react-icons/md"
import {PiSmileyFill} from "react-icons/pi";

const Share = () => {
  return (
    <div className={styles["share-container"]}>
        <div className={styles["share-firstRow"]}>
        <img className={styles["profile-img"]}src="profileImage.jpg" alt="profile_image"/>
        <input className={styles["share-input"]}type="text" placeholder="What's in your mind?"/>
        </div>
        
        <hr></hr>
        <div>
            <ul className={styles["tag-list"]}>
                <li className={styles["list-item"]}>
                    <BiSolidPhotoAlbum style={{ color: "orange"}}/>
                    <span>Photo or Video</span>
                </li>
                <li className={styles["list-item"]}>
                    <PiTagChevronFill/>
                    <span>Tag</span>
                </li>
                <li className={styles["list-item"]}>
                    <MdLocationPin style={{color: "green"}}/>
                    <span>Location</span>
                </li>
                <li className={styles["list-item"]}>
                    <PiSmileyFill style={{color:"brown"}}/> 
                    <span>Feelings</span>
                </li>
                <button className={styles["share-button"]}>Share</button>
            </ul>
            
        </div>
      
    </div>
  )
}

export default Share
