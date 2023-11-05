import React, { useEffect, useRef, useState } from "react";
import styles from "./post.module.css";
import { PiSmileyFill } from "react-icons/pi";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  BsThreeDotsVertical,
  BsSuitHeart,
  BsBookmarkPlus,
} from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import EmojiPicker from "emoji-picker-react";
import { useBackEnd } from "../hooks/useBackEnd";
import { useAuthContext } from "../hooks/useAuthContext";
import { format } from "timeago.js";
import Comment from "./Comment";

const backEndUrl = process.env.REACT_APP_BACKEND_URL;
const S3Bucket = process.env.REACT_APP_S3_LINK;

export default function Post({ post,postAuthor, setRefresh }) {
  console.log(backEndUrl);
  const [showPicker, setShowPicker] = useState(false);
  const [showThreeDot, setShowThreeDot] = useState(false);
  const commentRef = useRef();
  const { user, token } = useAuthContext();
  const { callBackEnd } = useBackEnd();
  const [likeNum, setLikeNum] = useState(post.liked.length);
  const [commmentNum, setCommmentNum] = useState(post.commentNumber);
  const [allcomments, setAllComments] = useState(null);

  const onEmojiClick = (chosenEmoji, event) => {
    commentRef.current.value = commentRef.current.value + chosenEmoji.emoji;
    setShowPicker(false);
  };

  const getAllComments = async (e) => {
    try {
      if (allcomments == null) {
        setAllComments(
          (await callBackEnd(`comment/post/${post._id}`, {}, token, "get"))
            .comments
        );
        setCommmentNum(allcomments.length);
      } else {
        setAllComments(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();
    console.log("in send comment handler ");
    try {
      const { savedComment, commentNumber } = await callBackEnd(
        `comment/create/${post._id}`,
        { desc: commentRef.current.value },
        token,
        "post"
      );
      setCommmentNum(commentNumber);
      commentRef.current.value = "";
      allcomments.push(savedComment);
    } catch (err) {
      console.log("in the sendComment, post.jsx");
      console.log(err);
    }
  };

  const deletePostHandler = async (e) => {
    e.preventDefault();
    try {
      await callBackEnd(`/post/delete/${post._id}`, {}, token, "delete");
      console.log("deleted the post !");
    } catch (err) {
      console.log("in the deletePostHandler");
      console.log(err);
    } finally {
      setShowThreeDot((s) => !s);
      setRefresh((s) => !s);
    }
  };

  const likeHandler = async (e) => {
    try {
      const result = await callBackEnd(
        `/post/like/${post._id}`,
        {},
        token,
        "post"
      );
      setLikeNum(result.likeNum);
    } catch (err) {
      console.log("in the likeHandler");
      console.log(err);
    }
  };

  return (
    <div className={styles["post-container"]}>
      <div className={styles["post-top-row"]}>
        <div className={styles["post-profile-info"]}>
          <img
            src={
              postAuthor.profilePic
                ? `${S3Bucket}${postAuthor.profilePic}`
                : `${S3Bucket}genericProfile.png`
            }
            alt="profile picture"
          />
          <div className={styles["post-name-date"]}>
            <span>{postAuthor.username? postAuthor.username : "username"}</span>
            <span className={styles["post-time"]}>
              {format(post.createdAt)}
            </span>
          </div>
        </div>
        <div className={styles["post-three-dots"]}>
          <BsThreeDotsVertical
            onClick={(e) => {
              e.preventDefault();
              setShowThreeDot((s) => !s);
            }}
          />
          {showThreeDot ? (
            <div className={styles["three-dots-menu"]}>
              <ul>
                <li>
                  <MdEdit />
                  Edit
                </li>
                <li onClick={deletePostHandler}>
                  <MdDelete /> Delete
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles["post-description"]}>
        {post.picture ? (
          <img src={`${S3Bucket}${post.picture}`} alt="post image" />
        ) : null}
        <p>{post.desc}</p>
        <div className={styles["post-tags"]}>
          <span>#chevyvan#carseat#carparts#chevyvan</span>
        </div>
      </div>
      <div className={styles["post-bottom-row"]}>
        <div className={styles["post-buttons-left-side"]}>
          <div className={styles["post-icon-container"]} onClick={likeHandler}>
            <BsSuitHeart className={`${styles["post-icons"]}`} />
            <span>{likeNum}</span>
          </div>
          <div
            className={styles["post-icon-container"]}
            onClick={getAllComments}
          >
            <BiCommentDots className={`${styles["post-icons"]}`} />
            <span>{commmentNum}</span>
          </div>
        </div>
        <div className={styles["post-buttons-right-side"]}>
          <div className={styles["post-icon-container"]}>
            <BsBookmarkPlus className={`${styles["post-icons"]}`} />
          </div>
        </div>
      </div>
      {allcomments != null ? (
        <>
          <div className={styles["line-breaker-post"]}></div>
          <div className={styles["post-comment-part"]}>
            <img
              src={null ? null : backEndUrl + "/images/genericProfile.png"}
              alt="profile_image"
            />
            <input
              ref={commentRef}
              type="text"
              placeholder="Write your comment"
            ></input>
            <div className={styles["emoji-button-container"]}>
              <div
                className={styles["emoji-button"]}
                onClick={() => setShowPicker((s) => !s)}
              >
                <PiSmileyFill className={styles["emoji-icon"]} />
              </div>
              {showPicker && (
                <div className={styles["emoji-picker-container"]}>
                  <EmojiPicker
                    height={200}
                    width={350}
                    theme="dark"
                    lazyLoadEmojis={true}
                    searchDisabled={true}
                    skinTonesDisabled={true}
                    previewConfig={{ showPreview: false }}
                    onEmojiClick={onEmojiClick}
                  />
                </div>
              )}
            </div>
            <button onClick={sendComment}>send</button>
          </div>
          <div className={styles["post-comment-section"]}>
            {allcomments.map((comment) => (
              <Comment
                desc={comment.desc}
                userId={comment.userId}
                time={format(comment.createdAt)}
              />
            ))}
            <div>▾ Load more comments</div>
          </div>
        </>
      ) : null}
    </div>
  );
}
