import React from 'react'
import styles from "./profileSummery.module.css";

export default function ProfileSummery() {
  return (
    <div className={styles["profile-stat-container"]}>
      <div className={styles["profile-stat-numbers"]}>
        <span>271k</span>
        <span>3</span>
        <span>12</span>
      </div>
      <div className={styles["profile-stat-titles"]}>
        <span>Followers</span>
        <span>Following</span>
        <span>Posts</span>
      </div>
      <div className={styles["sidebar-dashed-divider"]}/>
      <button>Add Friend</button>
    </div>
  )
}
