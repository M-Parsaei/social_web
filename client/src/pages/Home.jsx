import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { useBackEnd } from '../hooks/useBackEnd';
import Share from "../components/Share";
import Rightbar from "../components/Rightbar";
import Background from "./Background";
import { useDarkModeContext } from "../hooks/useDarkModeContext";


export default function Home() {
  const {user,token} = useAuthContext();
  const [posts,setPosts]=useState([]);
  const [refresh,setRefresh] = useState(false);
  const {callBackEnd} = useBackEnd();
  useEffect(()=>{
    const func = async () =>{
      try{
        const result =await callBackEnd(`post/${user._id.toString()}/getAll`,{},token,"get");
        setPosts(result.posts);
      }
      catch(err){
        console.log("in the use effect of Home");
        console.log(err)
      }
    };
    func()
  },[refresh])
  return (
    <Background>
      <div className={styles["page-container"]}>
        <Sidebar userId={user._id} />
        <div className={styles["profile-right-container"]}>
        <NavBar/>
        <div className={styles["profile-page-user-posts-container"]}>
          <Share setRefresh={setRefresh}/>
        {posts.map((post)=>{return<Post key={post._id} postAuthor={user} post={post} setRefresh={setRefresh}/>})}
        </div>
        </div>
        <Rightbar/>
      </div>
    </Background>
  );
}
