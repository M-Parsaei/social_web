import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./feed.module.css";
import Share from "./Share";

export default function Feed() {  
  return (
    <div className={styles["feed-container"]}>
      <Share />
      <Post/>
    </div>
  );
}
