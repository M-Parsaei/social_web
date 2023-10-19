import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Rightbar from "../components/Rightbar"
import ProfileHeader from "../components/ProfileHeader";


export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles["page-container"]}>
        <Sidebar />
        <div style={{flex:4.5}}>
        <ProfileHeader/>
        <div className={styles["under-profile-header-container"]}>
          <Feed />
          <Rightbar/>
        </div>
        </div>
      </div>
    </div>
  );
}


/*
    <div>
      <NavBar />
      <div className={styles["page-container"]}>
        <Sidebar />
        <Feed />
        <div className={styles["page-component2"]}>worsld</div>
      </div>
    </div>*/