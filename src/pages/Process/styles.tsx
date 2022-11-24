import { motion } from "framer-motion";
import styled from "styled-components";

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
  align-items: center;
  width: 100%;
  height: 330px;
  background-color: #f3f3f3;
  @media screen and (max-width: 500px) {
    height: 250px;
    padding: 20px;
  }
  & > h1 {
    font-size: 32px;
    font-weight: 700;
    color: ${(props) => props.theme.green_color};
    text-decoration: underline;
    text-underline-position: under;
    @media screen and (max-width: 500px) {
      font-size: 32px;
    }
  }
  & > p {
    font-size: 24px;
    font-weight: 350;
    @media screen and (max-width: 500px) {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  padding: 80px 120px;
  @media screen and (max-width: 500px) {
    padding: 30px;
  }
`;
export const Box = styled.div`
  width: 100%;
  margin: 10px 0 40px 0;
  padding: 45px 40px;
  background-color: #fff8f4;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    padding: 15px;
    margin-bottom: 25px;
  }
`;
export const InnerBox = styled(Box)`
  margin-left: 70px;
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-bottom: 28px;
  }
`;
export const Head1 = styled.h1`
  color: ${(props) => props.theme.green_color};
  font-size: 28px;
  font-weight: bold;
  line-height: 60px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 40px;
  }
`;
export const Head2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
  line-height: 40px;
  @media screen and (max-width: 500px) {
    font-size: 16px;

    line-height: 24px;
  }
`;
export const Head3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 24px;
  }
`;
export const Text = styled.div`
  font-size: 18px;
  line-height: 40px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
    line-height: 24px;
  }
`;
export const Strong = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #e05e2c;
  line-height: 40px;
  @media screen and (max-width: 500px) {
    font-size: 10px;

    line-height: 24px;
  }
`;
export const Space = styled.div`
  margin-left: 35px;
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    margin-left: 20px;
    margin-bottom: 25px;
  }
`;
