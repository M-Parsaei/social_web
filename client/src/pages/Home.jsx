import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles["page-container"]}>
        <Sidebar />
        <Feed />
        <div className={styles["page-component2"]}>worsld</div>
      </div>
      <Footer/>
    </>
  );
}
