import React, {useState} from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./page/Home";
import NavBar from "./component/Navbar";
import { Typography } from "@mui/material";
import DetailCard from "./component/Detail";
import { createContext, Provider } from "react";
export const UserContext = createContext(null)
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <>
    <UserContext.Provider value={{ openModal, user, setUser, handleOpen, handleClose }} >
    <Router>
      <NavBar 
      //  user={user}
      //  setUser={setUser}
      //  openModal={openModal}
      //  handleOpen={handleOpen}
      //  handleClose={handleClose}
      />
      <Routes>
        <Route path="" element={ <Home/> } />
        <Route path="/Detail" element={ <DetailCard/> } />
      </Routes>
      <Footer/>
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
