import React, { useRef, useState } from 'react'
import styles from "./Share.module.css";
import {BiSolidPhotoAlbum} from "react-icons/bi"
import {PiTagChevronFill} from "react-icons/pi"
import {MdLocationPin} from "react-icons/md"
import {PiSmileyFill} from "react-icons/pi";
import { useAuthContext } from '../hooks/useAuthContext';
import { useBackEnd } from '../hooks/useBackEnd';
import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';
import { use } from "react-router-dom";

const backEndUrl = process.env.REACT_APP_BACKEND_URL

const Share = ({setRefresh}) => {
  const {user,token} = useAuthContext();
  const [showPicker, setShowPicker] = useState(false);
  const [postImage,setPostImage] = useState(null);
  const postText = useRef();
  const {callBackEnd} = useBackEnd();

  const onEmojiClick = (chosenEmoji,event)=>{
    postText.current.value = postText.current.value + chosenEmoji.emoji;
    setShowPicker(false);
}

/*
const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };*/



  const shareHandler = async (event)=>{
    event.preventDefault();
    const desc = postText.current.value;
    let imageName = null;
    if (!desc){
        alert("empty post");
        return;
    }
    if (postImage){
        try{
            const formData = new FormData();
            const fileName = Date.now() + postImage.name;
            formData.append("name", fileName);
            formData.append("image", postImage);
            imageName = fileName
            await callBackEnd("/upload/postImage",formData,token,"POST")
            //await axios.post("/upload/postImage",)
        }
        catch(err){
            console.log("in share Handler post image part error:");
            console.log(err)
            return;
        }
    }
    const data = {desc};
    if (imageName){
        data.picture = imageName;
    }
    // TODO try catch
    const result = await callBackEnd("/post/create",data,token,"POST");
    console.log(result);
    setRefresh(s=>!s)
  }

  return (
    <div className={styles["share-container"]}>
        <div className={styles["share-top-container"]}>
            <div className={styles["share-image-container"]}>
            <img src={user.profilePic? backEndUrl + user.profilePic : backEndUrl + "/images/genericProfile.png"} alt="profile_image"/>
            </div>
            <div className={styles["share-input-container"]}>
            <input ref={postText} type="text" placeholder="What's in your mind?"/>
            </div>
        </div> 
        <div className={styles["share-line-breaker"]}></div>
        <div className={styles["share-bottom-container"]}>
            <ul className={styles["tag-list"]}>
                <label htmlFor="upload-input" className={styles["share-option-container"]}>
                    <div className={`${styles["share-icon-container"]} ${styles["item-one"]}`}>
                        <BiSolidPhotoAlbum className={styles["share-icons"]}/>
                    </div>
                    <span>Photo</span>
                    <input style={{display:"none"}} type="file" id="upload-input" accept=".png,.jpeg,.jpg"
                    onChange={(e) => setPostImage(e.target.files[0])}></input>
                </label>
                <li className={styles["share-option-container"]}>
                    <div className={`${styles["share-icon-container"]} ${styles["item-two"]}`}>
                        <PiTagChevronFill className={styles["share-icons"]}/>
                    </div>
                    <span>Tag</span>
                </li>
                <li className={styles["share-option-container"]}>
                    <div className={`${styles["share-icon-container"]} ${styles["item-three"]}`}>
                        <MdLocationPin className={styles["share-icons"]}/>
                    </div>
                    <span>Location</span>
                </li>
                <li className={`${styles["share-option-container"]} ${styles["emoji-list-container"]}`}>
                    <div onClick={() => setShowPicker((s)=>!s)} className={`${styles["share-icon-container"]} ${styles["item-four"]}`}>
                        <PiSmileyFill className={styles["share-icons"]}/>
                    </div>
                    <span onClick={() => setShowPicker((s)=>!s)}>Emojies</span>
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
                </li>
            </ul> 
            <button className={styles["share-button"]} onClick={shareHandler}>Share</button>
        </div>
      
    </div>
  )
}

export default Share
