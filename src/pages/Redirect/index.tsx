import * as S from "./styles";
import { kakaoLogin } from "@apis/auth";
import { isLoginAtom } from "@atoms/atom";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

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
      <S.Container>
        <S.Contents>
          <S.Title>
            <h1>휴대폰 인증</h1>
          </S.Title>
          <S.ItemLabel>전화번호</S.ItemLabel>
          <S.InputContainer>
            <S.ItemInput
              type="text"
              value={phoneNum}
              onChange={onTypingNumber}
            />
            <S.ErrorMessage>
              {isValid ? "" : "- 없이 번호만 입력하세요."}
            </S.ErrorMessage>
          </S.InputContainer>
          <S.SubmitBtn onClick={onSendCode}>인증번호 발송</S.SubmitBtn>
          {sendCode && (
            <S.InputContainer>
              <S.ItemLabel>인증번호</S.ItemLabel>
              <S.ItemInput
                type="text"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
              />
              <S.SubmitBtn onClick={onSendAuthCode}>인증</S.SubmitBtn>
            </S.InputContainer>
          )}
        </S.Contents>
      </S.Container>
    );
  return <></>;
}

export default Redirect;
