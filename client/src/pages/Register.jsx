import React, { useState, useRef } from "react";
import styles from "./login.module.css";
import { useSignUp } from "../hooks/useSignUp";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import { logVariants } from "../animations/Variants";
import ErrorAlert from "../components/ErrorAlert";
import { useBackEnd } from "../hooks/useBackEnd";

// TODO : add the code in RegisterSubmitHandler when retyped password is not same as password
// and handling other errors like when the user was already registered, invalid email ....
const S3Bucket = process.env.REACT_APP_S3_LINK

export default function Register() {
  const navigate = useNavigate()
  const textInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordCheckInputRef = useRef();
  const emailInputRef = useRef();
  const { signup, error, isLoading } = useSignUp();
  const [profileImage,setProfileImage]=useState(null);
  const {callBackEnd} = useBackEnd();

  const RegisterSubmitHandler = async (e) => {
    e.preventDefault();
    let fileName = null;
    if (profileImage){
      try{
          const formData = new FormData();
          fileName = "profile_pic_" + Date.now() + profileImage.name;
          formData.append("name", fileName);
          formData.append("image", profileImage);
          await callBackEnd("/upload/postImage",formData,{},"POST")
      }
      catch(err){
          console.log("in share Handler post image part error:");
          console.log(err)
          return;
      }
  }
  const data = {
    username: textInputRef.current.value,
    email: emailInputRef.current.value,
    password: passwordInputRef.current.value,
    retypedPassword: passwordCheckInputRef.current.value,
  };
  if (fileName){
        data.profilePic = fileName;
  }
    console.log(data);
    await signup(data);
  };


  const removeProfileHandler = (e)=>{
    e.preventDefault();
    setProfileImage(null);
  }

  return (
    <motion.div>
      <div className={styles["login-page"]}>
        <motion.div variants={logVariants}
          initial="hidden"
          animate="visible"
          exit="exit" className={styles["login-container"]}>
          <div className={styles["register-left-part"]}>
            <img 
            src={profileImage? URL.createObjectURL(profileImage) : `${S3Bucket}genericProfile.png`}
            alt="register profile picture"/>
            <label htmlFor="register-upload-image">
              <span>Pick your profile image</span>
              <input style={{display:"none"}} onClick={e=>{setProfileImage(e.target.files[0])}} type="file" id="register-upload-image" accept=".png,.jpeg,.jpg"/>
            </label>
          </div>
          <div className={styles["login-right-part"]}>
            <div className={styles["login-right-part-item-1"]}>
              <h2>Social web</h2>
            </div>
            <form
              className={styles["login-right-part-item-3"]}
              onSubmit={RegisterSubmitHandler}
            >
              <span>Username</span>
              <input type="text" ref={textInputRef}></input>
              <span>Email</span>
              <input type="email" ref={emailInputRef}></input>
              <span>Password</span>
              <input type="password" ref={passwordInputRef}></input>
              <span>Retype password</span>
              <input type="password" ref={passwordCheckInputRef}></input>
              <button type="submit">Sign Up</button>
            </form>
            <div className={styles["login-right-part-item-4"]}>
            {error? <ErrorAlert error={error}/> : <div style={{flex:1}}/>}
              <span>
                Already have an account ?
                <span
                  onClick={(e)=>{e.preventDefault(); navigate("/login",{replace:true})}}
                  className={styles["login-change-page-button"]}
                >
                  {" Sign In"}
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
