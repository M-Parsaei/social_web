import React from "react";
import styles from "./profileBanner.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
const backEndUrl = process.env.REACT_APP_BACKEND_URL;
const s3_Link = process.env.REACT_APP_S3_LINK;

export default function ProfileBanner({ userProp }) {
  let user = useAuthContext().user;
  if (userProp) {
    user = userProp;
  }
  return (
    <div className={styles["profile-banner-container"]}>
      <img className={styles["profile-banner-picture"]} src="/assets/dummyData/banner.png" alt="profile picture" />
      <div className={styles["profile-banner-bottom-row"]}>
        <img className={styles["profile-banner-user-picture"]} src={user.profilePic? `${s3_Link}${user.profilePic}` : `${s3_Link}genericProfile.png`} alt="profile picture" />
        <span className={styles["profile-banner-username"]}>{user.username}</span>
        <button id={styles["profile-banner-first-button"]}>Posts</button>
        <button>Friends</button>
        <button>About</button>
        <button>More</button>
      </div>
    </div>
  );
}

