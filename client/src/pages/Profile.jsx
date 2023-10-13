import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from "./Home.module.css";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function Profile() {
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
  )
}
