import Share from "./components/Share";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import styles from "./index.css";
import { Route, Routes } from "react-router-dom";


function App() {
  //TODO : fixing the routers later
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
    </Routes>
  );
}

export default App;