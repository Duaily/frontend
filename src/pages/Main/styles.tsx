import { motion } from "framer-motion";
import styled from "styled-components";
import mainImage from "@assets/mainImage.svg";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    max-width: 390px;
  }
`;
export const JumbotronSection = styled.div`
  width: 100%;
  height: 634px;
  background-image: url(${mainImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 500px) {
    height: 250px;
  }
`;
export const JumbotronText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 115px 0;
  @media screen and (max-width: 500px) {
    padding: 80px 30px 30px 30px;
  }
  & > p {
    font-size: 1.25rem;
    line-height: 2.5em;
    @media screen and (max-width: 500px) {
      font-size: 0.8rem;
      line-height: 2em;
      text-align: center;
    }
  }
  & > div {
    margin-top: 80px;
    width: 300px;
    height: 1px;
    background-color: black;
  }
`;
export const HouseSection = styled.div`
  width: 100%;
  padding: 60px 120px;
  @media screen and (max-width: 500px) {
    padding: 30px 30px;
  }
`;
export const HouseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;
export const HouseTitle = styled.h1`
  color: ${(props) => props.theme.orange_color};
  font-size: 24px;
  font-weight: 900;
  text-decoration: underline;
  text-underline-position: under;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
export const HouseLink = styled.p`
  color: ${(props) => props.theme.orange_color};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const HouseCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  column-gap: 20px;
  row-gap: 70px;
  margin-top: 55px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`;
export const ReviewSection = styled(HouseSection)`
  background-color: #ffb8000c;
`;
export const ReviewInfo = styled(HouseInfo)``;
export const ReviewTitle = styled(HouseTitle)`
  color: ${(props) => props.theme.green_color};
`;
export const ReviewLink = styled(HouseLink)`
  color: ${(props) => props.theme.green_color};
`;
export const ReviewCardContainer = styled(HouseCardContainer)``;
export const BottomTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 150px 0 110px 0;
  height: 100px;
`;
export const BottomText = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  padding: 10px 0;
  height: 100%;
  color: ${(props) => props.theme.green_color};
  font-size: 24px;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  & > div {
    display: flex;
    align-items: center;
  }
`;
