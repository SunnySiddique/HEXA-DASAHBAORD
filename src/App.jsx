import React, { useState } from "react";
import SideMenu from "./Components/SideMenu/SideMenu";

export const Context = React.createContext();

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  
  return (
    <Context.Provider value={{drawerVisible, setDrawerVisible}}>
    <div>
    <SideMenu drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
    </div>
    <div>
    </div>
    </Context.Provider>
  )
}

export default App
