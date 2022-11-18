import { kakaoLogin } from "@apis/auth";
import { isLoginAtom } from "@atoms/atom";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

function Redirect() {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginAtom);
  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  useEffect(() => {
    kakaoLogin(code || "")
      .then((res) => {
        console.log(res);
        axios.defaults.headers.common[
          "Authorization"
        ] = `${res.grantType} ${res.accessToken}`;
        localStorage.setItem(
          "accessToken",
          `${res.grantType} ${res.accessToken}`
        );
        localStorage.setItem(
          "refreshToken",
          `${res.grantType} ${res.refreshToken}`
        );
        console.log(res.init);
        setIsLogin(true);
        navigate("/");
      })
      .catch((e) => {
        alert("로그인에 실패했습니다.");
        navigate("/login");
      });
  }, [code, navigate, setIsLogin]);
  return <></>;
}

export default Redirect;
