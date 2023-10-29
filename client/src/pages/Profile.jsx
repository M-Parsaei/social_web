import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileHeader";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { useBackEnd } from "../hooks/useBackEnd";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { userId } = useParams();
  console.log(userId);
  const [posts, setPosts] = useState([]);
  const { callBackEnd } = useBackEnd();
  const [user,setUser] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        if (userId) {
          const userResult = await callBackEnd(`/user/${userId}`, {}, {}, "get");
          const result = await callBackEnd(
            `post/${userId}/getAll`,
            {},
            {},
            "get"
          );
          setUser(userResult);
          setPosts(result.posts);
        } else {
          return;
        }
      } catch (err) {
        console.log("in the use effect of Profile");
        console.log(err);
      }
    };
    func();
  }, []);

  return (
    <div>
      <NavBar/>
      <div className={styles["page-container"]}>
        <Sidebar />
        <div className={styles["profile-right-container"]}>
          {user? 
            <>
            <ProfileHeader userProp={user}/>
            <div className={styles["profile-page-user-posts-container"]}>
            {posts.map((post) => {
              return <Post key={post._id} post={post} setRefresh={null} />;
            })}
            </div>
            </>
            :
            null
          }
        </div>
      </div>
    </div>
  );
}
