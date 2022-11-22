import { MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import trend1Img from "@assets/trend1.svg";
import trend2Img from "@assets/trend2.svg";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
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
    if (cardCount < dummy_trend_data.length - 3)
      setCardCount((prev) => prev + 1);
  };
  const onCardNext2 = () => {
    if (cardCount2 < dummy_session_data.length - 2)
      setCardCount2((prev) => prev + 1);
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
    cardRef.current!.style.transform = `translate(${-400 * cardCount}px)`;
  }, [cardCount]);
  useEffect(() => {
    cardRef2.current!.style.transform = `translate(${-480 * cardCount2}px)`;
  }, [cardCount2]);
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      <JumbotronSection>
        <h1>듀얼 라이프 트렌드</h1>
        <p>듀얼 라이프에 대한 속속 중요한 정보들을 알려드려요!</p>
      </JumbotronSection>
      <div style={{ width: "100%", padding: "0 125px" }}>
        <Section1>
          <TextBox>
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
          </TextBox>
          <img src={trend1Img} alt="trend1" />
        </Section1>
        <Section2>
          <img style={{ marginBottom: "80px" }} src={trend2Img} alt="trend2" />
          <TextBox>
            <p>어디에서 듀얼 라이프를 실현할 지 정하셨나요?</p>
            <p>
              듀얼리가 더욱 건강하고 활기찬 듀얼 라이프를 위해 다양한 트렌드와
              세션을 준비했습니다!
            </p>
            <p>
              듀얼 라이프 트렌드와 세션을 알아보며 행복한 듀얼 라이프를
              그려볼까요?
            </p>
          </TextBox>
        </Section2>
        <Section3>
          <h1>듀얼 라이프 트렌드</h1>
          <CardBox>
            <CardContainer ref={cardRef}>
              {DUMMY_TREND_DATA.map((trend) => (
                <TrendCard
                  key={trend.id}
                  title={trend.title}
                  previewText={trend.previewText}
                  imageUrl={trend.imageUrl}
                />
              ))}
            </CardContainer>
            <CardPrevButton onClick={onCardPrev}>&lt;</CardPrevButton>
            <CardNextButton onClick={onCardNext}>&gt;</CardNextButton>
          </CardBox>
        </Section3>
        <Section3>
          <h1>듀얼 라이프 세션</h1>
          <CardBox>
            <CardContainer2 ref={cardRef2}>
              {DUMMY_SESSION_DATA.map((session) => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  imageUrl={session.imageUrl}
                />
              ))}
            </CardContainer2>
            <CardPrevButton onClick={onCardPrev2}>&lt;</CardPrevButton>
            <CardNextButton onClick={onCardNext2}>&gt;</CardNextButton>
          </CardBox>
        </Section3>
      </div>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
    </Container>
  );
}

export default DualLifIntro;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
const JumbotronSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 90px;
  padding: 100px 200px 50px 100px;
  width: 100%;
  height: 350px;
  background-color: #f3f3f3;
  & > h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${(props) => props.theme.green_color};
  }
  & > p {
    font-size: 24px;
    font-weight: 350;
  }
`;

const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;
`;
const Section2 = styled.div`
  margin-bottom: 200px;
`;
const Section3 = styled.div`
  position: relative;
  margin-bottom: 250px;
  & > h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
  }
`;
const TextBox = styled.div`
  font-size: 20px;
  line-height: 40px;
`;
const CardBox = styled.div`
  overflow: hidden;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 50px;
  height: 450px;
  padding: 20px;
  justify-content: flex-start;
  transition: 0.3s;
`;
const CardContainer2 = styled.div`
  display: flex;
  gap: 50px;
  height: 380px;
  padding: 20px;
  justify-content: flex-start;
  transition: 0.3s;
`;
const CardButton = styled.button`
  position: absolute;
  top: 50%;
  outline: none;
  border: none;
  background-color: inherit;
  color: ${(props) => props.theme.green_color};
  font-size: 30px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const CardPrevButton = styled(CardButton)`
  left: -50px;
`;
const CardNextButton = styled(CardButton)`
  right: -50px;
`;
