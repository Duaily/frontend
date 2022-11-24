import { motion } from "framer-motion";
import styled from "styled-components";
import trend1Img from "@assets/trend1.svg";
import trend2Img from "@assets/trend2.svg";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
export const JumbotronSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 90px;
  padding: 100px 200px 50px 100px;
  width: 100%;
  height: 350px;
  background-color: #f3f3f3;
  @media screen and (max-width: 500px) {
    height: 250px;
    padding: 0;
    align-items: center;
  }
  & > h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${(props) => props.theme.green_color};
    @media screen and (max-width: 500px) {
      font-size: 32px;
    }
  }
  & > p {
    font-size: 24px;
    font-weight: 350;
    @media screen and (max-width: 500px) {
      font-size: 16px;
      text-align: center;
    }
  }
`;
export const ContentConatiner = styled.div`
  width: 100%;
  padding: 0 125px;
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;
export const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;
  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    margin-bottom: 100px;
  }
`;
export const Section2 = styled.div`
  margin-bottom: 200px;
  @media screen and (max-width: 500px) {
    margin-bottom: 100px;
  }
`;
export const Section3 = styled.div`
  position: relative;
  margin-bottom: 250px;
  & > h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
  }
`;
export const Section1Img = styled.img.attrs({ src: trend1Img })`
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
export const Section2Img = styled(Section1Img).attrs({ src: trend2Img })`
  margin-bottom: 80px;
`;
export const TextBox = styled.div`
  font-size: 20px;
  line-height: 40px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 30px;
  }
`;
export const CardBox = styled.div`
  overflow: hidden;
`;
export const CardContainer = styled.div`
  display: flex;
  gap: 50px;
  height: 450px;
  padding: 20px;
  justify-content: flex-start;
  transition: 0.3s;
  @media screen and (max-width: 500px) {
    height: 300px;
    gap: 30px;
  }
`;
export const CardContainer2 = styled.div`
  display: flex;
  gap: 50px;
  height: 380px;
  padding: 20px;
  justify-content: flex-start;
  transition: 0.3s;
  @media screen and (max-width: 500px) {
    height: 330px;
    gap: 30px;
  }
`;
export const CardButton = styled.button`
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
export const CardPrevButton = styled(CardButton)`
  left: -50px;
  @media screen and (max-width: 500px) {
    left: -30px;
  }
`;
export const CardNextButton = styled(CardButton)`
  right: -50px;
  @media screen and (max-width: 500px) {
    right: -30px;
  }
`;
