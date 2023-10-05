import Share from "./components/Share";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import styles from "./index.css";

function App() {
  return (
    <div className={styles['main']}>
      <Home/>
      <Share/>
    </div>
  );
}

export default App;