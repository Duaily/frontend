import React, { useState } from "react";
import { MenuItemType } from "@types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Commnunity from "@pages/Community";
import House from "@pages/House";
import Location from "@pages/Location";
import MainPage from "@pages/Main";
import Navbar from "@components/Navbar";
import styled from "styled-components";

function Router() {
  const [menuState, setMenuState] = useState<MenuItemType>("duaily intro");
  return (
    <BrowserRouter>
      <ContentContainer>
        <Navbar clickedMenu={menuState} setClickedMenu={setMenuState} />
        <div style={{ marginTop: "160px" }}></div>
        <Routes>
          <Route
            path="/"
            element={<MainPage setClickedMenu={setMenuState} />}
          />
          <Route
            path="/house"
            element={<House setClickedMenu={setMenuState} />}
          />
          <Route
            path="/location"
            element={<Location setClickedMenu={setMenuState} />}
          />
          <Route
            path="/community"
            element={<Commnunity setClickedMenu={setMenuState} />}
          />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default Router;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
