import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileHeader";
import Post from "../components/Post";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { useBackEnd } from '../hooks/useBackEnd';
import Share from "../components/Share";
import { ChakraProvider } from "@chakra-ui/react";


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
    <div>
      <NavBar />
      <ChakraProvider>
      <div className={styles["page-container"]}>
        <Sidebar />
        <div className={styles["profile-right-container"]}>
        <ProfileHeader/>
        <div className={styles["profile-page-user-posts-container"]}>
          <Share setRefresh={setRefresh}/>
        {posts.map((post)=>{return<Post key={post._id} post={post}/>})}
        </div>
        </div>
      </div>
      </ChakraProvider>
    </div>
  );
}
