import React, { useEffect, useState } from "react";
import styles from "./comment.module.css";
import { useBackEnd } from "../hooks/useBackEnd";


export default function Comment({ userId, desc, time }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const {callBackEnd} = useBackEnd();


  useEffect(() => {
    // getting the user's name and profile pic
    const getUser = async ()=>{
        const {username,profilePic}= await callBackEnd(`user/${userId}`,{},{},"get");
        setProfile(profilePic);
        setUser(username);
    }
    getUser();
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
          <span>{user}</span>
          <span>{time}</span>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
}
