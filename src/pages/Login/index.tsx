import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "@utils/OAuth.js";

function Login() {
  return (
    <Container>
      <SocialLogin as="a" href={KAKAO_AUTH_URL}>
        카카오 로그인
      </SocialLogin>
    </Container>
  );
}

export default Login;

const Container = styled.div``;
const SocialLogin = styled.div``;
