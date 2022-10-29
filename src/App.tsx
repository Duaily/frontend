import Navbar from "@components/Navbar";
import { MenuItemType } from "@types";
import React, { useState } from "react";
import Router from "./Router";

function App() {
  const [menuState, setMenuState] = useState<MenuItemType>("duaily intro");
  return (
    <>
      <Navbar clickedMenu={menuState} setClickedMenu={setMenuState} />
      <div style={{ marginTop: "180px" }}></div>
      <Router />
    </>
  );
}

export default App;
