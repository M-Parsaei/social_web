import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookie = new Cookies();


export default function Home() {
  const [token,setToken] = useState(cookie.get("TOKEN"));
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token){
      // if there was no token then redirect the page to login page
      navigate("/login",{replace:true});
    }
  },[token]);  


  return (
    <>
      <NavBar />
      <div className={styles["page-container"]}>
        <Sidebar />
        <Feed />
        <div className={styles["page-component2"]}>worsld</div>
      </div>
      <Footer/>
    </>
  );
}
