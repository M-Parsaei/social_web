import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import styles from "./index.css";

function App() {
  return (
    <div className={styles['main']}>
      <Home/>
    </div>
  );
}

export default App;