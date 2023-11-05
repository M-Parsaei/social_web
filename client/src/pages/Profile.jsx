import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { useBackEnd } from "../hooks/useBackEnd";
import { useNavigate, useParams } from "react-router-dom";
import Rightbar from "../components/Rightbar";
import Background from "./Background";

export default function Profile() {
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);
  const [posts, setPosts] = useState([]);
  const { callBackEnd } = useBackEnd();
  const [userProfile,setUser] = useState(null);

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
        navigate("/404",{replace:true});
        console.log("in the use effect of Profile");
        console.log(err);
      }
    };
    func();
  }, []);

  return (
    <Background>
      {userProfile? 
      <div className={styles["page-container"]}>
        <Sidebar />
        <div className={styles["profile-right-container"]}>
          <NavBar/>
          <div className={styles["profile-page-under-nav-container"]}>
            <div className={styles["profile-page-left-side-under-nav"]}>
              <ProfileBanner userProp={userProfile}/>
              <div className={styles["profile-under-banner-container"]}>
                <div className={styles["profile-user-information-panel"]}>
                </div>
                <div className={styles["profile-user-posts"]}>
                  {posts.map((post) => {
                    return <Post key={post._id} postAuthor={userProfile} post={post} setRefresh={null} />;
                  })}
                </div>
              </div>
            </div>
            <Rightbar/>
          </div>
        </div>
      </div>
      : null}
    </Background>
  );
}
