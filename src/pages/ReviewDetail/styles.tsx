import { motion } from "framer-motion";
import styled from "styled-components";
import bannerImg from "@assets/reviewBanner.svg";
import review1Img from "@assets/review1.svg";
import review2Img from "@assets/review2.svg";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 90px;
  width: 100%;
  height: 500px;
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 500px) {
    height: 350px;
    margin-bottom: 50px;
    padding: 30px;
    margin-bottom: 0;
  }
  & > h1 {
    font-size: 50px;
    font-weight: 700;
    color: white;
    @media screen and (max-width: 500px) {
      font-size: 24px;
      text-align: center;
    }
  }
`;
export const ContentContainer = styled.div`
  width: 100%;
  padding: 0 125px;
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;
export const Text = styled.p`
  padding: 50px 0;
  font-size: 20px;
  line-height: 40px;
  word-break: break-all;
  white-space: pre-wrap;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
export const Info = styled(Text)`
  text-align: end;
  & > span:first-child {
    margin-right: 40px;
    @media screen and (max-width: 500px) {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
export const Line = styled.div<{ height: string; color: string }>`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  margin: 20px 0;
`;
export const CommentContainer = styled.div`
  margin-top: 50px;
  & > h1 {
    font-size: 32px;
    font-weight: 700;
    @media screen and (max-width: 500px) {
      font-size: 24px;
    }
  }
`;
export const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  padding: 15px;
  border: 0;
  outline: none;
  resize: none;
  color: #717171;
  white-space: pre-wrap;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;
export const TextArea = styled.textarea`
  flex-grow: 1;
  width: 100%;
  border: 0;
  padding: 30px;
  outline: none;
  resize: none;
  color: #717171;
  white-space: pre-wrap;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;
export const Button = styled.button`
  align-self: flex-end;
  width: 135px;
  height: 50px;
  margin-top: 15px;
  background: black;
  border: none;
  outline: none;
  border-radius: 25px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    width: 85px;
    height: 30px;
    font-size: 14px;
  }
`;
export const DummyImage1 = styled.img.attrs({ src: review1Img })`
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const DummyImage2 = styled.img.attrs({ src: review2Img })`
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
