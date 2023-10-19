import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileHeader";
import Post from "../components/Post";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { useBackEnd } from '../hooks/useBackEnd';



export default function Home() {
  const {user,token} = useAuthContext();
  const [posts,setPosts]=useState([]);
  const {callBackEnd} = useBackEnd();
  console.log(posts);
  useEffect(()=>{
    const func = async () =>{
      const result =await callBackEnd(`post/${user._id.toString()}/getAll`,{},token,"get");
      setPosts(result.posts);
    };
    func()
  },[])
  return (
    <div>
      <NavBar />
      <div className={styles["page-container"]}>
        <Sidebar />
        <div className={styles["profile-right-container"]}>
        <ProfileHeader/>
        <div className={styles["profile-page-user-posts-container"]}>
        {posts.map((post)=>{return<Post key={post._id} desc={post.desc} image={post.picture} commentor={user.profilePic} />})}
        </div>
        </div>
      </div>
    </div>
  );
}
/*
        <div className={styles["under-profile-header-container"]}>
          <Feed />
          <Rightbar/>
        </div>*/

/*
    <div>
      <NavBar />
      <div className={styles["page-container"]}>
        <Sidebar />
        <Feed />
        <div className={styles["page-component2"]}>worsld</div>
      </div>
    </div>*/