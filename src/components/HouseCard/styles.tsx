import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
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
  position: relative;
  width: 100%;
  height: 220px;
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
export const CardStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20%;
  height: 30px;
  background-color: ${(props) => props.theme.orange_color};
  color: white;
  font-size: 14px;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    text-align: center;
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
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #717171;
  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
    & > p {
      font-size: 14px;
    }
    & > p:first-child {
      margin-bottom: 3px;
    }
  }
`;
export const CardMetaData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #717171;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
