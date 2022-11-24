import React, { useEffect, useRef } from "react";
import * as S from "./styles";
import axios from "axios";
import { MenuItemType } from "@types";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "@atoms/atom";
import { KAKAO_AUTH_LOGOUT_URL } from "@utils/OAuth";

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
    window.location.href = KAKAO_AUTH_LOGOUT_URL;
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
    <S.Container>
      <S.LogoContainer>
        <div />
        <S.LogoImage onClick={() => navigate("/")} />
        <div>
          {isLogin ? (
            <S.NavbarButtons>
              <button>
                마이
                <br />
                페이지
              </button>
              <p>|</p>
              <button onClick={onLogout}>
                로그
                <br />
                아웃
              </button>
            </S.NavbarButtons>
          ) : (
            <S.NavbarButtons>
              <button onClick={() => navigate("/login")}>로그인</button>
            </S.NavbarButtons>
          )}
        </div>
      </S.LogoContainer>
      <S.MenuContainer>
        <S.Underline ref={underlinRef} />
        <S.MenuItem>
          <p
            ref={duailyInfoRef}
            onClick={(e) => {
              navigate("/");
              onMenuClick(e, "duaily intro");
            }}
          >
            듀얼리 소개
          </p>
        </S.MenuItem>
        <S.MenuItem>
          <p
            ref={tradeRef}
            onClick={(e) => {
              navigate("/house");
              onMenuClick(e, "trade");
            }}
          >
            빈 집 거래
          </p>
        </S.MenuItem>
        <S.MenuItem>
          <p
            ref={daullifeIntroRef}
            onClick={(e) => {
              navigate("/duallife");
              onMenuClick(e, "duallife intro");
            }}
          >
            듀얼 라이프 소개
          </p>
        </S.MenuItem>
        <S.MenuItem>
          <p
            ref={communityRef}
            onClick={(e) => {
              navigate("/community");
              onMenuClick(e, "community");
            }}
          >
            커뮤니티
          </p>
        </S.MenuItem>
      </S.MenuContainer>
    </S.Container>
  );
}

export default Navbar;
