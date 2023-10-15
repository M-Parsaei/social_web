import React, { useEffect } from 'react'
import Post from './Post'
import styles from "./feed.module.css"
import Share from './Share'
import Cookies from "universal-cookie";

const cookie = new Cookie();

export default function Feed() {

  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    
  },[posts]);

  return (
    <div className={styles['feed-container']}>
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
