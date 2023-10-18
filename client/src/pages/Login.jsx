import React, { useState,useRef } from "react";
import WavyBackground from "../components/WavyBackground";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../hooks/useSignIn";
import { motion } from "framer-motion";

export default function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const textInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const { signIn, error, isLoading } = useSignIn();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("In the login submit handler");
    await signIn(textInputRef.current.value,passwordInputRef.current.value)
  };

  return (
    <>
      <div className={styles["login-page"]}>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 3}} className={styles["login-container"]}>
          <div className={styles["login-left-part"]}>
            <img></img>
            <div className={styles["login-right-part-item-2"]}>
              <span>Welcome back to the Social web</span>
            </div>
          </div>
          <div className={styles["login-right-part"]}>
            <div className={styles["login-right-part-item-1"]}>
              <h2>Social web</h2>
            </div>
            <form
              className={styles["login-right-part-item-3"]}
              onSubmit={loginSubmitHandler}
            >
              <span>Username or Email</span>
              <input type="text" ref={textInputRef}></input>
              <span>Password</span>
              <input type="password" ref={passwordInputRef}></input>
              <button type="submit">Sign in</button>
            </form>
            <div className={styles["login-right-part-item-4"]}>
              <span>
                No account ?
                <span
                  onClick={(e)=>{e.preventDefault(); navigate("/register",{replace:true})}}
                  className={styles["login-change-page-button"]}
                >
                 Sign Up
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
