import React, { useState } from "react";
import Curvyyy from "../components/Curvyyy";
import styles from "./login.module.css";
import { useRef } from "react";
export default function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const textInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordCheckInputRef = useRef();
  const emailInputRef = useRef();


  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log("you are logged in POS");
    console.log(textInputRef.current.value);
    console.log(passwordInputRef.current.value);
  };

  const ChangeFormHandler = (e) => {
    setIsLoginPage((s) => !s);
  };

  const loginForm = (
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
  );


  const registerForm = (
    <form
      className={styles["login-right-part-item-3"]}
      onSubmit={loginSubmitHandler}
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
  );

  return (
    <>
      <div className={styles["login-page"]}>
        <div className={styles["login-container"]}>
          <div className={styles["login-left-part"]}>hmm</div>
          <div className={styles["login-right-part"]}>
            <div className={styles["login-right-part-item-1"]}>
              <h2>Social web</h2>
            </div>
            <div className={styles["login-right-part-item-2"]}>
              <span>Welcome back to the Social web</span>
            </div>
            {isLoginPage ? loginForm : registerForm}
            <div className={styles["login-right-part-item-4"]}>
              <span>
                {isLoginPage ? "No account ?" : "Already have an account ?"}
                <span
                  onClick={ChangeFormHandler}
                  className={styles["login-change-page-button"]}
                >
                  {isLoginPage ? " Sign Up" : " Sign In"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Curvyyy />
    </>
  );
}
