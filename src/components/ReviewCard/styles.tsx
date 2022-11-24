import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 400px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    height: 320px;
  }
`;

export const CardImage = styled.div<{ img_src: string }>`
  width: 100%;
  height: 370px;
  background-image: url(${(props) => props.img_src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  border-radius: 5px 5px 0 0;
  @media screen and (max-width: 500px) {
    height: 160px;
  }
`;
export const CardInfoBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  white-space: pre-wrap;
  word-break: break-all;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
export const CardPreview = styled.p`
  color: #717171;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
export const AuthorInfo = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #717171;
  & > div {
    display: flex;
    align-items: center;
  }
`;
