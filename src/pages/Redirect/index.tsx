import { kakaoLogin } from "@apis/auth";
import { isLoginAtom } from "@atoms/atom";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

function Redirect() {
  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [sendCode, setSendCode] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const onTypingNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex = /^010(?:\d{4})\d{4}$/gm;
      const currentNumber = e.target.value;
      setPhoneNum(currentNumber);
      if (regex.test(currentNumber)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    },
    []
  );
  const onSendCode = async () => {
    if (!isValid) return;
    const { data } = await axios.post(`/auth/send-sms?contact=${phoneNum}`);
    if (data.status === 200) {
      setSendCode(true);
    }
  };
  const onSendAuthCode = async () => {
    try {
      const { data } = await axios.post(
        "/auth/check-sms",
        {
          code: authCode,
          contact: phoneNum,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (data.status === 200) {
        setIsNew(false);
        setIsLogin(true);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        localStorage.setItem("accessToken", `Bearer ${accessToken}`);
        localStorage.setItem("refreshToken", `Bearer ${refreshToken}`);
        navigate("/");
      }
    } catch (e) {
      alert("인증을 실패했습니다.");
    }
  };
  useEffect(() => {
    kakaoLogin(code || "")
      .then((res) => {
        setAccessToken(res.accessToken);
        setRefreshToken(res.refreshToken);
        if (res.init) {
          setIsNew(true);
        } else {
          setIsLogin(true);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.accessToken}`;
          localStorage.setItem("accessToken", `Bearer ${res.accessToken}`);
          localStorage.setItem("refreshToken", `Bearer ${res.refreshToken}`);
          navigate("/");
        }
      })
      .catch((e) => {
        alert("로그인에 실패했습니다.");
        navigate("/login");
      });
  }, [code, navigate, setIsLogin]);
  if (isNew)
    return (
      <Container>
        <Contents>
          <Title>
            <h1>휴대폰 인증</h1>
          </Title>
          <ItemLabel>전화번호</ItemLabel>
          <InputContainer>
            <ItemInput type="text" value={phoneNum} onChange={onTypingNumber} />
            <ErrorMessage>
              {isValid ? "" : "- 없이 번호만 입력하세요."}
            </ErrorMessage>
          </InputContainer>
          <SubmitBtn onClick={onSendCode}>인증번호 발송</SubmitBtn>
          {sendCode && (
            <InputContainer>
              <ItemLabel>인증번호</ItemLabel>
              <ItemInput
                type="text"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
              />
              <SubmitBtn onClick={onSendAuthCode}>인증</SubmitBtn>
            </InputContainer>
          )}
        </Contents>
      </Container>
    );
  return <></>;
}

export default Redirect;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 300px auto;
`;

const Contents = styled.div`
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
export const ItemLabel = styled.label`
  font-size: 0.8rem;
  color: #717171;
  margin: 30px 0 0.5em 0;
  width: 100%;
  position: relative;
  left: 10%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ItemInput = styled.input`
  width: 87%;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
export const SubmitBtn = styled.button`
  width: 87%;
  background-color: ${(props) => props.theme.green_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  border: 0;
  margin-top: 2.4em;
  padding: 8px;
  cursor: pointer;
`;
const ErrorMessage = styled.span`
  height: 20px;
  align-self: flex-start;
  font-size: 0.5rem;
  color: red;
  margin-top: 10px;
  margin-left: 40px;
`;
