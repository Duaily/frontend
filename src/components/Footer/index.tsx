import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <S.Container>
      <S.Section1>
        <S.Slogan>{`듀얼 라이프 실현 No.1
플랫폼 듀얼리`}</S.Slogan>
        <S.Links>
          <Link to="/">듀얼리 소개</Link>
          <Link to="/house">빈 집 거래</Link>
          <Link to="/duallife">듀얼 라이프 소개</Link>
          <Link to="/community">커뮤니티</Link>
          <Link to="/">마이페이지</Link>
        </S.Links>
        <S.CopyRight>
          <p>copyrightⓒ구해조 홈즈 Corp. All rights reserved.</p>
          <p>개인정보 처리방침</p>
        </S.CopyRight>
      </S.Section1>
      <S.Slogan>{`듀얼 라이프의 꿈,
듀얼리와 함께 알아보세요!`}</S.Slogan>
    </S.Container>
  );
}

export default Footer;
