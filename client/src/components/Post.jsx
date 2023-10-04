import React from "react";
import styles from "./post.module.css";
import {BiLike} from 'react-icons/bi';
export default function Post() {
  return (
    <div className={styles["post-container"]}>
      <div className={styles["post-top-row"]}>
        <img src="/assets/dummyData/profileImage1.jpg" alt="profile picture" />
        <span>Angus anii</span>
        <span className={styles["post-time"]}>4 hours ago</span>
      </div>
      <div className={styles["post-description"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          accusantium dolore nobis nisi tempore, quae alias possimus minima enim
          officiis labore cupiditate, quasi fugiat dignissimos.
        </p>
        <img src="/assets/dummyData/postImage1.jpg" alt="profile picture" />
      </div>
      <div className={styles["post-bottom-row"]}>
        <div className={styles["post-like-section"]}>
          <BiLike className={styles['post-icons']} />
          <span>6 people liked</span>
        </div>
        <div className={styles["post-comment-stat"]}>
          <span>2 comments</span>
        </div>
      </div>
    </div>
  );
}
