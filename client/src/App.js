import axios from "axios";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence,motion } from "framer-motion";
import PageNotFound from "./pages/PageNotFound";
import Background from "./pages/Background";

// TODO: refactoring ok - add comments later 

function App() {
  const location = useLocation()
  const {user} = useAuthContext()

  // setting the base url for axios calls to the backend 
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.key}>
          <Route path="/register" element={!user? <Register /> : <Profile/>}></Route>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}></Route>
          <Route path="/profile/:userId" element={user? <Profile/> : <Register/>}></Route>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}></Route>
          <Route path="*" element={<PageNotFound/>} />
       </Routes>
    </AnimatePresence>
  );
}

export default App;
