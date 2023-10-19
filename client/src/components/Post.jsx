import React from "react";
import styles from "./post.module.css";
import {AiFillHeart} from 'react-icons/ai';
import {FaCommentDots} from 'react-icons/fa';
import {BsThreeDotsVertical,BsFillShareFill} from "react-icons/bs";

const backEndUrl = process.env.REACT_APP_BACKEND_URL


export default function Post({desc,image,commentor}) {
  return (
    <div className={styles["post-container"]}>
      <div className={styles["post-top-row"]}>
        <div className={styles["post-profile-info"]}>
          <img src="/assets/dummyData/profileImage1.jpg" alt="profile picture" />
          <div className={styles["post-name-date"]}>
            <span>John Carter</span>
            <span className={styles["post-time"]}>4 hours ago</span>
          </div>
        </div>
        <div className={styles["post-three-dots"]}>
          <BsThreeDotsVertical/>
        </div>
      </div>
      <div className={styles["post-description"]}>
        <p>
          {desc}</p>
          {image?  <img src="/assets/dummyData/postImage1.jpg" alt="profile picture" />: null }
      </div>
      <div className={styles["post-bottom-row"]}>
          <div className={styles["post-icon-container"]}>
            <AiFillHeart className={`${styles['post-icons']} ${styles['heart-icons']}`} />
            <span>1.2k</span>
          </div>
          <div className={styles["post-icon-container"]}>
            <FaCommentDots className={`${styles['post-icons']} ${styles['comment-icons']}`} />
            <span>1.2k</span>
          </div>
          <div className={styles["post-icon-container"]}>
            <BsFillShareFill className={`${styles['post-icons']} ${styles['share-icons']}`} />
            <span>17</span>
          </div>
      </div>
      <div className={styles["line-breaker-post"]}></div>
      <div className={styles["post-comment-part"]}>
          <img src={commentor? backEndUrl + commentor : backEndUrl + "/images/genericProfile.png"} alt="profile_image"/>
          <input type="text" placeholder="Write your comment"></input>
          <button>send</button>
      </div>
    </div>
  );
}
