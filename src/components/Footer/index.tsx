import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Section1>
        <Slogan>{`듀얼 라이프 실현 No.1
플랫폼 듀얼리`}</Slogan>
        <Links>
          <Link to="/">듀얼리 소개</Link>
          <Link to="/house">빈 집 거래</Link>
          <Link to="/location">지역 소개</Link>
          <Link to="/community">커뮤니티</Link>
          <Link to="/">마이페이지</Link>
        </Links>
        <CopyRight>
          <p>copyrightⓒ구해조 홈즈 Corp. All rights reserved.</p>
          <p>개인정보 처리방침</p>
        </CopyRight>
      </Section1>
      <Slogan>{`듀얼 라이프의 꿈,
듀얼리와 함께 알아보세요!`}</Slogan>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 480px;
  padding: 50px 120px;
  color: white;
  background-color: ${(props) => props.theme.brown_color};
`;
const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 70px;
`;
const Slogan = styled.div`
  line-height: 2;
  font-size: 20px;
  font-weight: 900;
  white-space: pre-wrap;
  word-break: break-all;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 185px;
  font-weight: bold;
  & > a {
    font-size: 18px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const CopyRight = styled.div`
  font-size: 15px;
  line-height: 2;
`;
