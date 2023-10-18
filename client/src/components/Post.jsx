import React from "react";
import styles from "./post.module.css";
import {AiFillHeart} from 'react-icons/ai';
import {IoMdArrowDropdown} from "react-icons/io"
import {FaCommentDots} from 'react-icons/fa';
import {BsThreeDotsVertical,BsFillShareFill} from "react-icons/bs";
export default function Post() {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          accusantium dolore nobis nisi tempore</p>
        <img src="/assets/dummyData/postImage1.jpg" alt="profile picture" />
      </div>
      <div className={styles["post-bottom-row"]}>
        <div className={styles["post-icons-container"]}>
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
        <div className={styles["post-comment-stat"]}>
          <input type="text" placeholder="Write your comment"></input>
        </div>
      </div>
      <div className={styles['see-more-comments']}>
        <IoMdArrowDropdown/>
        <span>see comments</span>
      </div>
    </div>
  );
}
