import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SideMenu from "./Components/SideMenu/SideMenu";
import LoginPage from "./Components/Signup/Login/Login";
import SignUp from "./Components/Signup/SignUp";

export const Context = React.createContext();

function App() {
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const excludedPaths = ["/signup", "/"];

  const showSideMenu = !excludedPaths.includes(location.pathname);
  
  return (
    <Context.Provider value={{drawerVisible, setDrawerVisible}}>
    {showSideMenu && (
    <SideMenu drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
    )}
        <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        </Routes>
    </Context.Provider>
  )
}

export default App
