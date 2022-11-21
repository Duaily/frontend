import React, { useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import row_logo from "@assets/row_logo.svg";
import { MenuItemType } from "@types";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "@atoms/atom";

interface NavbarProps {
  clickedMenu: MenuItemType;
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

function Navbar({ clickedMenu, setClickedMenu }: NavbarProps) {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const navigate = useNavigate();
  const underlinRef = useRef<HTMLDivElement>(null);
  const duailyInfoRef = useRef<HTMLDivElement>(null);
  const tradeRef = useRef<HTMLDivElement>(null);
  const daullifeIntroRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    delete axios.defaults.headers.common["Authorization"];
    setIsLogin(false);
    navigate("/");
  };
  const onMenuClick = (
    e: React.MouseEvent<HTMLDivElement>,
    menu: MenuItemType
  ) => {
    underlinRef.current!.style.left = e.currentTarget.offsetLeft + "px";
    underlinRef.current!.style.width = e.currentTarget.offsetWidth + "px";
    underlinRef.current!.style.top =
      e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
    setClickedMenu(menu);
  };
  useEffect(() => {
    function setUnderlinePosition(el: React.RefObject<HTMLDivElement>) {
      underlinRef.current!.style.left = el.current!.offsetLeft + "px";
      underlinRef.current!.style.width = el.current!.offsetWidth + "px";
      underlinRef.current!.style.top =
        el.current!.offsetTop + el.current!.offsetHeight + "px";
    }
    switch (clickedMenu) {
      case "duaily intro":
        setUnderlinePosition(duailyInfoRef);
        break;
      case "trade":
        setUnderlinePosition(tradeRef);
        break;
      case "duallife intro":
        setUnderlinePosition(daullifeIntroRef);
        break;
      case "community":
        setUnderlinePosition(communityRef);
    }
  }, [clickedMenu]);
  return (
    <Container>
      <LogoContainer>
        <div />
        <LogoImage onClick={() => navigate("/")} />
        <div>
          {isLogin ? (
            <NavbarButtons>
              <button>마이페이지</button>
              <p>|</p>
              <button onClick={onLogout}>로그아웃</button>
            </NavbarButtons>
          ) : (
            <NavbarButtons>
              <button onClick={() => navigate("/login")}>로그인</button>
            </NavbarButtons>
          )}
        </div>
      </LogoContainer>
      <MenuContainer>
        <Underline ref={underlinRef} />
        <MenuItem>
          <p
            ref={duailyInfoRef}
            onClick={(e) => {
              navigate("/");
              onMenuClick(e, "duaily intro");
            }}
          >
            듀얼리 소개
          </p>
        </MenuItem>
        <MenuItem>
          <p
            ref={tradeRef}
            onClick={(e) => {
              navigate("/house");
              onMenuClick(e, "trade");
            }}
          >
            빈 집 거래
          </p>
        </MenuItem>
        <MenuItem>
          <p
            ref={daullifeIntroRef}
            onClick={(e) => {
              navigate("/location");
              onMenuClick(e, "duallife intro");
            }}
          >
            듀얼라이프 소개
          </p>
        </MenuItem>
        <MenuItem>
          <p
            ref={communityRef}
            onClick={(e) => {
              navigate("/community");
              onMenuClick(e, "community");
            }}
          >
            커뮤니티
          </p>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: white;
  z-index: 100;
`;
const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-items: center;
  width: 100%;
  height: 100px;
`;
const LogoImage = styled.img.attrs({ src: row_logo, alt: "logo" })`
  cursor: pointer;
  -webkit-user-drag: none;
  &:hover {
    opacity: 0.8;
  }
`;
const NavbarButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 30px;
  & > p {
    margin-top: 3px;
    font-size: 16px;
    font-weight: 300;
    color: ${(props) => props.theme.brown_color};
    line-height: 26px;
  }
  & > button {
    color: ${(props) => props.theme.brown_color};
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 300;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;
const MenuItem = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    padding: 5px;
    color: ${(props) => props.theme.brown_color};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 0.6;
    }
  }
`;
const Underline = styled.div`
  position: absolute;
  width: 0;
  background-color: ${(props) => props.theme.brown_color};
  height: 1px;
  transition: 0.5s;
`;
