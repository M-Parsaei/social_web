import React from 'react';
import styles from "./Home.module.css";
import Sidebar from '../components/Sidebar'
import Post from "../components/Post";
import Feed from '../components/Feed';
import NavBar from '../components/NavBar';
export default function Home() {
  return (
    <>
    <NavBar/>
    <div className={styles["page-container"]}>
    <Sidebar />
    <Feed/>
    <div className={styles["page-component2"]}>
      world
    </div>
    </div>
    </>

  )
}
