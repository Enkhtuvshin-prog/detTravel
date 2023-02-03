import React, {useState} from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./component/Navbar";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <>
    <Router>
      <NavBar 
       user={user}
       setUser={setUser}
       openModal={openModal}
       handleOpen={handleOpen}
       handleClose={handleClose}/>
      <Routes>
        <Route path="" element={ <Home/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
