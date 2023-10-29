import React, { useEffect, useRef, useState } from "react";
import styles from "./post.module.css";
import {AiFillHeart} from 'react-icons/ai';
import {FaCommentDots} from 'react-icons/fa';
import {PiSmileyFill} from "react-icons/pi";
import {MdEdit, MdDelete} from "react-icons/md";
import {BsThreeDotsVertical,BsFillShareFill} from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';
import { useBackEnd } from "../hooks/useBackEnd";
import { useAuthContext } from "../hooks/useAuthContext";
import { format} from 'timeago.js';
import Comment from "./Comment";


const backEndUrl = process.env.REACT_APP_BACKEND_URL


export default function Post({post,setRefresh}) {
  const [showPicker, setShowPicker] = useState(false);
  const [showThreeDot, setShowThreeDot] = useState(false);
  const commentRef = useRef();
  const {user,token} = useAuthContext();
  const {callBackEnd} = useBackEnd();
  const [liked,setIsLiked]=useState(false);
  const [allcomments,setAllComments]=useState(null);

  const onEmojiClick = (chosenEmoji,event)=>{
    commentRef.current.value = commentRef.current.value + chosenEmoji.emoji;
    setShowPicker(false);
  }

  const getAllComments = async(e)=>{
    e.preventDefault();
    try{
      if (!allcomments){
        setAllComments((await callBackEnd("comment/post/6530e40b5c58f83322ee982b",{},token,"get")).comments);
      }
      else{
        setAllComments(null);
      }
    }
    catch(err){
      console.log(err);
    }
  }


  const deletePostHandler = async (e) =>{
    e.preventDefault()
    try{
      await callBackEnd(`/post/delete/${post._id}`,{},token,"delete");
      console.log("deleted the post !")
    }
    catch(err){
      console.log("in the deletePostHandler")
      console.log(err)
    }
    finally{
      setShowThreeDot(s=>!s);
      setRefresh(s=>!s);
    }
  }

  const likeHandler = async (e) =>{
    e.preventDefault();
    try{
      const result = await callBackEnd(`/post/like/${post._id}`,{},token,"post");
      setIsLiked(result.isLiked)
    }
    catch(err){
      console.log("in the likeHandler");
      console.log(err);
    }
  }

  return (
    <div className={styles["post-container"]}>
      <div className={styles["post-top-row"]}>
        <div className={styles["post-profile-info"]}>
          <img src="/assets/dummyData/profileImage1.jpg" alt="profile picture" />
          <div className={styles["post-name-date"]}>
            <span>John Carter</span>
            <span className={styles["post-time"]}>{format(post.createdAt)}</span>
          </div>
        </div>
        <div className={styles["post-three-dots"]}>
          <BsThreeDotsVertical onClick={(e)=>{e.preventDefault();setShowThreeDot(s=>!s)}}/>
          {
            showThreeDot ? 
            <div className={styles["three-dots-menu"]}>
              <ul>
                <li><MdEdit/>Edit</li>
                <li onClick={deletePostHandler}><MdDelete/> Delete</li>
              </ul>
            </div>
            : null
          }
        </div>
      </div>
      <div className={styles["post-description"]}>
        <p>
          {post.desc}</p>
          
          {post.picture? 
          <img src={`https://social-web-project.s3.us-east-2.amazonaws.com/${post.picture}`} 
          alt="post image"/>
          : null }
      </div>
      <div className={styles["post-bottom-row"]}>
          <div className={styles["post-icon-container"]} onClick={likeHandler}>
            <AiFillHeart className={`${styles['post-icons']} ${styles['heart-icons']}`} />
            <span>{post.liked.length + (liked? 1 : 0)}</span>
          </div>
          <div className={styles["post-icon-container"]} onClick={getAllComments}>
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
          <img src={null? null : backEndUrl + "/images/genericProfile.png"} alt="profile_image"/>
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
      {allcomments != null? 
        <div className={styles['post-comment-section']}>
          {allcomments.map(comment=><Comment desc={comment.desc}/>)}
          <div>
          ▾ Load more comments
          </div>
        </div>
        :
        null
      }
    </div>
  );
}
