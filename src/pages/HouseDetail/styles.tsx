import styled from "styled-components";
import { motion } from "framer-motion";
import thumbnailImg from "@assets/thumbnail.svg";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const JumbotronSection = styled.div`
  display: flex;
  padding: 40px;
  width: 100%;
  background-color: #0453450d;
`;
export const Thumbnail = styled.div`
  width: 825px;
  height: 555px;
  background-image: url(${thumbnailImg});
`;
export const ThumbnailIntro = styled.div`
  width: 400px;
  height: 100%;
  margin-left: 40px;
`;
export const IntroStatus = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;
export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 65px;
  background-color: ${(props) => props.theme.orange_color};
  color: white;
  font-size: 24px;
  font-weight: 700;
`;
export const InfoTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
  line-height: 50px;
  white-space: pre-wrap;
  word-break: break-all;
`;
export const InfoMeta = styled.div`
  font-size: 20px;
`;
export const HouseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 50px auto;
  padding: 50px 150px;
  background-color: #f7f7f7;
`;
export const BaseInfo = styled.div`
  & > h1 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.green_color};
  }
  & > p {
    margin-bottom: 30px;
  }
`;
export const EtcInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 150px;
`;
export const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 1044px;
  margin: 50px auto;
  & > h1 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.green_color};
  }
`;

export const ContentData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Head1 = styled.h1`
  margin-top: 60px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.green_color};
  line-height: 50px;
`;
export const Text = styled.p`
  font-size: 20px;
  line-height: 40px;
  white-space: pre-wrap;
  word-break: break-all;
`;
export const ContentImage = styled.img`
  align-self: center;
  width: 90%;
  margin-top: 120px;
  margin-bottom: 60px;
`;
export const Process = styled.div`
  align-self: center;
  margin: 150px 0;
  & > h1 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
  }
  & > button {
    padding: 20px 35px;
    background-color: white;
    border: 5px solid ${(props) => props.theme.green_color};
    border-radius: 50px;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    color: ${(props) => props.theme.green_color};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
