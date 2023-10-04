import React from 'react';
import styles from "./Home.module.css";
import Sidebar from '../components/Sidebar'
import Post from "../components/Post";
export default function Home() {
  return (
    <div className={styles["page-container"]}>
    <Sidebar />
    <div className={styles["page-component"]}>
      hello
    </div>
    <div className={styles["page-component2"]}>
      world
    </div>
    </div>


  )
}
