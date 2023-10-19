import React, { useRef, useState } from "react";
import styles from "./post.module.css";
import {AiFillHeart} from 'react-icons/ai';
import {FaCommentDots} from 'react-icons/fa';
import {PiSmileyFill} from "react-icons/pi";
import {BsThreeDotsVertical,BsFillShareFill} from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';

const backEndUrl = process.env.REACT_APP_BACKEND_URL


export default function Post({desc,image,commentor}) {
  const [showPicker, setShowPicker] = useState(false);
  const commentRef = useRef();
  const onEmojiClick = (chosenEmoji,event)=>{
    commentRef.current.value = commentRef.current.value + chosenEmoji.emoji;
    console.log(chosenEmoji);
    setShowPicker(false);
  }
  console.log("The image is :")
  console.log(backEndUrl + "images/posts/" + image);
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
          
          {image? 
          <img src={backEndUrl + "/images/posts/" + image} 
          alt="post image"/>
          : null }
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
          <input ref={commentRef} type="text" placeholder="Write your comment"></input>
          <div className={styles["emoji-button-container"]}>
          <div className={styles["emoji-button"]} onClick={() => setShowPicker((s)=>!s)}>
                        <PiSmileyFill className={styles["emoji-icon"]}/>
          </div>
          {showPicker && (
            <div className={styles['emoji-picker-container']}>
              <EmojiPicker height={200} width={350}
               theme="dark"  lazyLoadEmojis={true}
               searchDisabled={true}
               skinTonesDisabled={true}
               previewConfig={{showPreview: false}}
              onEmojiClick={onEmojiClick} />
            </div>
          )}
          </div>
          <button>send</button>
      </div>
      
    </div>
  );
}
