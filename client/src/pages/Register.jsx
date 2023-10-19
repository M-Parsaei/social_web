import React, { useState, useRef } from "react";
import WavyBackground from "../components/WavyBackground";
import styles from "./login.module.css";
import { useSignUp } from "../hooks/useSignUp";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import { logVariants } from "../animations/Variants";

// TODO : add the code in RegisterSubmitHandler when retyped password is not same as password
// and handling other errors like when the user was already registered, invalid email ....

export default function Register() {
  const navigate = useNavigate()
  const textInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordCheckInputRef = useRef();
  const emailInputRef = useRef();

  const { signup, error, isLoading } = useSignUp();

  const RegisterSubmitHandler = async (e) => {
    e.preventDefault();
    await signup(textInputRef.current.value,emailInputRef.current.value, passwordInputRef.current.value);
  };

  return (
    <motion.div>
      <div className={styles["login-page"]}>
        <motion.div variants={logVariants}
          initial="hidden"
          animate="visible"
          exit="exit" className={styles["login-container"]}>
          <div className={styles["login-left-part"]}></div>
          <div className={styles["login-right-part"]}>
            <div className={styles["login-right-part-item-1"]}>
              <h2>Social web</h2>
            </div>
            <div className={styles["login-right-part-item-2"]}>
              <span>Welcome back to the Social web</span>
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
              <span>
                Already have an account ?
                <span
                  onClick={(e)=>{e.preventDefault(); navigate("/login",{replace:true})}}
                  className={styles["login-change-page-button"]}
                >
                  Sign In
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
