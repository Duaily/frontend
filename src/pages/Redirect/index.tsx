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
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.accessToken}`;
        localStorage.setItem("accessToken", `Bearer ${res.accessToken}`);
        localStorage.setItem("refreshToken", `Bearer ${res.refreshToken}`);
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
