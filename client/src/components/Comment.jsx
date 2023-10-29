import React, { useEffect, useState } from "react";
import styles from "./comment.module.css";

export default function Comment({ userId, desc, time }) {
    const [user,setUser]=useState(null)
  useEffect(() => {
    // getting the user's name and profile pic
  }, []);
  return (
    <div className={styles["comment-container"]}>
      <div className={styles["comment-information-container"]}>
        <img
          className={styles["comment-profile-image"]}
          src="/assets/dummyData/profileImage1.jpg"
          alt="profile picture"
        />
        <div className={styles["comment-time-container"]}>
          <span>username</span>
          <span>4 hours ago</span>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
}
