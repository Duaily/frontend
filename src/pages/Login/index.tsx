import React from "react";
import styled from "styled-components";
import kakao from "@assets/kakaoLogin.svg";
import facebook from "@assets/faceLogin.svg";
import google from "@assets/googleLogin.svg";
import { KAKAO_AUTH_URL } from "@utils/OAuth.js";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@apis/auth";
import { FaSpinner } from "react-icons/fa";
import { Navigate } from "react-router-dom";

function Login() {
  const { data, isFetching } = useQuery(["user-info"], getUser);
  if (isFetching)
    return (
      <LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </LoadingContainer>
    );
  if (data) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <Contents>
        <Title>
          <h1 style={{ display: "inline-block" }}>로그인</h1>
        </Title>
        <SocialLoginSection>
          <SocialLogin as="a" href={KAKAO_AUTH_URL}>
            <SocialLogo src={kakao} />
            <p>카카오</p>
          </SocialLogin>
          <SocialLogin as="a" href="#">
            <SocialLogo src={google} />
            <p>구글</p>
          </SocialLogin>
          <SocialLogin as="a" href="#">
            <SocialLogo src={facebook} />
            <p>페이스북</p>
          </SocialLogin>
        </SocialLoginSection>
        <Buttons>
          <Slogan>듀얼 라이프의 꿈을 현실로, 듀얼리</Slogan>
          <SignUp>빠르고 간편하게 가입하기</SignUp>
        </Buttons>
      </Contents>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 300px auto;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.brown_color};
  @media screen and (max-width: 500px) {
    font-size: 16rem;
  }
`;

export const SocialLogo = styled.img`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 500px) {
    width: 50px;
    heigth: 50px;
  }
`;

export const SocialLoginSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 2em 0;
  @media screen and (max-width: 500px) {
    margin: 1em 0;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    margin-top: 0.5em;
    color: #717171;
    font-size: 0.8rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Slogan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  width: 100%;
  height: 42px;
  padding: 0.5em;
  color: ${(props) => props.theme.green_color};
  background-color: white;
  font-size: 0.8rem;
  font-weight: 900;
  border: 1px solid ${(props) => props.theme.green_color};
  border-radius: 5px;
  outline: none;
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;
export const SignUp = styled.button`
  margin-top: 1em;
  width: 100%;
  height: 42px;
  padding: 0.5em;
  color: white;
  background-color: ${(props) => props.theme.green_color};
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
