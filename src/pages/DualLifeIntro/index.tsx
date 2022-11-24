import * as S from "./styles";
import { MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import React, { useEffect, useRef, useState } from "react";
import Footer from "@components/Footer";
import { dummy_session_data, dummy_trend_data } from "@utils/dummy";
import TrendCard from "@components/TrendCard";
import SessionCard from "@components/SessionCard";

interface DualLifeIntroProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_TREND_DATA = dummy_trend_data;
const DUMMY_SESSION_DATA = dummy_session_data;

function DualLifIntro({ setClickedMenu }: DualLifeIntroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const [cardCount, setCardCount] = useState(0);
  const [cardCount2, setCardCount2] = useState(0);
  const onCardNext = () => {
    if (window.innerWidth < 500) {
      if (cardCount < dummy_trend_data.length - 1)
        setCardCount((prev) => prev + 1);
    } else {
      if (cardCount < dummy_trend_data.length - 3)
        setCardCount((prev) => prev + 1);
    }
  };
  const onCardNext2 = () => {
    if (window.innerWidth < 500) {
      if (cardCount2 < dummy_session_data.length - 1)
        setCardCount2((prev) => prev + 1);
    } else {
      if (cardCount2 < dummy_session_data.length - 2)
        setCardCount2((prev) => prev + 1);
    }
  };
  const onCardPrev = () => {
    if (cardCount > 0) setCardCount((prev) => prev - 1);
  };
  const onCardPrev2 = () => {
    if (cardCount2 > 0) setCardCount2((prev) => prev - 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setClickedMenu("duallife intro");
  }, [setClickedMenu]);
  useEffect(() => {
    if (window.innerWidth < 500) {
      cardRef.current!.style.transform = `translate(${-280 * cardCount}px)`;
    } else {
      cardRef.current!.style.transform = `translate(${-400 * cardCount}px)`;
    }
  }, [cardCount]);
  useEffect(() => {
    if (window.innerWidth < 500) {
      cardRef2.current!.style.transform = `translate(${-300 * cardCount2}px)`;
    } else {
      cardRef2.current!.style.transform = `translate(${-480 * cardCount2}px)`;
    }
  }, [cardCount2]);
  return (
    <S.Container variants={opacityVariants} initial="initial" animate="mount">
      <S.JumbotronSection>
        <h1>듀얼 라이프 트렌드</h1>
        <p>듀얼 라이프에 대한 속속 중요한 정보들을 알려드려요!</p>
      </S.JumbotronSection>
      <S.ContentConatiner>
        <S.Section1>
          <S.TextBox>
            <p>‘듀얼 라이프’ 정확하게 무엇을 의미하는 것일까요?</p>
            <p>
              듀얼 라이프를 처음 알아가는 사람이라면 누구나 헷갈릴 수 있습니다.
            </p>
            <p style={{ fontWeight: "700" }}>
              듀얼 라이프 실현을 위한 No.1 플랫폼 듀얼리가
            </p>
            <p style={{ fontWeight: "700", marginBottom: "20px" }}>
              그 고민을 들어주고 해결책을 제시해드릴게요 :)
            </p>
            <p>처음 듀얼 라이프를 실현하려는 여러분에게</p>
            <p style={{ fontWeight: "700" }}>
              듀얼리가 알려주는 듀얼 라이프 트렌드를 확인 해보세요!
            </p>
          </S.TextBox>
          <S.Section1Img />
        </S.Section1>
        <S.Section2>
          <S.Section2Img />
          <S.TextBox>
            <p>어디에서 듀얼 라이프를 실현할 지 정하셨나요?</p>
            <p>
              듀얼리가 더욱 건강하고 활기찬 듀얼 라이프를 위해 다양한 트렌드와
              세션을 준비했습니다!
            </p>
            <p>
              듀얼 라이프 트렌드와 세션을 알아보며 행복한 듀얼 라이프를
              그려볼까요?
            </p>
          </S.TextBox>
        </S.Section2>
        <S.Section3>
          <h1>듀얼 라이프 트렌드</h1>
          <S.CardBox>
            <S.CardContainer ref={cardRef}>
              {DUMMY_TREND_DATA.map((trend) => (
                <TrendCard
                  key={trend.id}
                  title={trend.title}
                  previewText={trend.previewText}
                  imageUrl={trend.imageUrl}
                />
              ))}
            </S.CardContainer>
            <S.CardPrevButton onClick={onCardPrev}>&lt;</S.CardPrevButton>
            <S.CardNextButton onClick={onCardNext}>&gt;</S.CardNextButton>
          </S.CardBox>
        </S.Section3>
        <S.Section3>
          <h1>듀얼 라이프 세션</h1>
          <S.CardBox>
            <S.CardContainer2 ref={cardRef2}>
              {DUMMY_SESSION_DATA.map((session) => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  imageUrl={session.imageUrl}
                />
              ))}
            </S.CardContainer2>
            <S.CardPrevButton onClick={onCardPrev2}>&lt;</S.CardPrevButton>
            <S.CardNextButton onClick={onCardNext2}>&gt;</S.CardNextButton>
          </S.CardBox>
        </S.Section3>
      </S.ContentConatiner>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
    </S.Container>
  );
}

export default DualLifIntro;
