import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <SocialLogin as="a" href={""}>
        카카오 로그인
      </SocialLogin>
    </Container>
  );
}

export default Login;

const Container = styled.div``;
const SocialLogin = styled.div``;
