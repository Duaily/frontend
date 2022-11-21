import React, { useState } from "react";
import { MenuItemType } from "@types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Commnunity from "@pages/Community";
import House from "@pages/House";
import MainPage from "@pages/Main";
import Login from "@pages/Login";
import Navbar from "@components/Navbar";
import styled from "styled-components";
import Redirect from "@pages/Redirect";
import HouseDetail from "@pages/HouseDetail";
import HousePost from "@pages/HousePost";
import Process from "@pages/Process";
import DualLifIntro from "@pages/DualLifeIntro";

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
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route path="/house/post" element={<HousePost />} />
          <Route
            path="/duallife"
            element={<DualLifIntro setClickedMenu={setMenuState} />}
          />
          <Route
            path="/community"
            element={<Commnunity setClickedMenu={setMenuState} />}
          />
          <Route path="/auth/kakao" element={<Redirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/process" element={<Process />} />
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
