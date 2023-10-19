import React from 'react'
import styles from "./profileHeader.module.css"
import { useAuthContext } from '../hooks/useAuthContext'
const backEndUrl = process.env.REACT_APP_BACKEND_URL

export default function ProfileHeader() {
  const {user} = useAuthContext()
  return (
    <div className={styles["profile-header-container"]}>
        <img className={styles["profile-header-cover-image"]} src={backEndUrl + "/images/covers/1.jpg"}></img>
        <div className={styles["profile-header-info-row"]}>
            <img className={styles["profile-header-user-image"]} src={user.profilePic? backEndUrl + user.profilePic : backEndUrl + "/images/genericProfile.png"}></img>
            <div className={styles["profile-header-info-text"]}>
              <h2>{user.username}</h2>
              <h3>XXX Followers</h3>
              <h3>{user.bio}</h3>
            </div>
        </div>
    </div>
  )
}
