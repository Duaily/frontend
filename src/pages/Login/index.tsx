import React from "react";
import * as S from "./styles";
import kakao from "@assets/kakaoLogin.svg";
import facebook from "@assets/faceLogin.svg";
import google from "@assets/googleLogin.svg";
import { KAKAO_AUTH_URL } from "@utils/OAuth.js";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@apis/auth";
import { FaSpinner } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import Footer from "@components/Footer";

function Login() {
  const { data, isFetching } = useQuery(["user-info"], getUser);
  if (isFetching)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  if (data) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <S.Container>
        <S.Contents>
          <S.Title>
            <h1 style={{ display: "inline-block" }}>로그인</h1>
          </S.Title>
          <S.SocialLoginSection>
            <S.SocialLogin as="a" href={KAKAO_AUTH_URL}>
              <S.SocialLogo src={kakao} />
              <p>카카오</p>
            </S.SocialLogin>
            <S.SocialLogin as="a" href="#">
              <S.SocialLogo src={google} />
              <p>구글</p>
            </S.SocialLogin>
            <S.SocialLogin as="a" href="#">
              <S.SocialLogo src={facebook} />
              <p>페이스북</p>
            </S.SocialLogin>
          </S.SocialLoginSection>
          <S.Buttons>
            <S.Slogan>듀얼 라이프의 꿈을 현실로, 듀얼리</S.Slogan>
            <S.SignUp>빠르고 간편하게 가입하기</S.SignUp>
          </S.Buttons>
        </S.Contents>
      </S.Container>
      <Footer />
    </div>
  );
}

export default Login;
