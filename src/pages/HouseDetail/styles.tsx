import styled from "styled-components";
import { motion } from "framer-motion";
import thumbnailImg from "@assets/thumbnail.svg";
import mapImg from "@assets/map.svg";

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
  @media screen and (max-width: 500px) {
    padding: 30px;
    flex-direction: column;
  }
`;
export const Thumbnail = styled.div`
  width: 825px;
  height: 555px;
  background-image: url(${thumbnailImg});
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 250px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const ThumbnailIntro = styled.div`
  width: 400px;
  height: 100%;
  margin-left: 40px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
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
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 50px;
    font-size: 18px;
  }
`;
export const InfoTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
  line-height: 50px;
  white-space: pre-wrap;
  word-break: break-all;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const InfoMeta = styled.div`
  font-size: 20px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const HouseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 50px auto;
  padding: 50px 150px;
  background-color: #f7f7f7;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 30px;
  }
`;
export const BaseInfo = styled.div`
  & > h1 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.green_color};
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
  & > p {
    margin-bottom: 30px;
    @media screen and (max-width: 500px) {
      font-size: 12px;
      & > b {
        display: block;
      }
    }
  }
`;
export const EtcInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 150px;
  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`;
export const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 1044px;
  margin: 50px auto;
  @media screen and (max-width: 500px) {
    padding: 0;
    align-items: center;
    width: 100%;
  }
  & > h1 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.green_color};
    @media screen and (max-width: 500px) {
      font-size: 20px;
      align-self: flex-start;
    }
  }
`;
export const MapImg = styled.img.attrs({ src: mapImg })`
  width: 100%;
`;
export const ContentData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    padding: 30px;
  }
`;
export const Head1 = styled.h1`
  margin-top: 60px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.green_color};
  line-height: 50px;
  @media screen and (max-width: 500px) {
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 20px;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  line-height: 40px;
  white-space: pre-wrap;
  word-break: break-all;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 24px;
  }
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
  @media screen and (max-width: 500px) {
    margin: 100px 0;
  }
  & > h1 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: 20px;
      line-height: 30px;
    }
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
    @media screen and (max-width: 500px) {
      width: 200px;
      height: 100px;
      padding: 10px 25px;
      font-size: 20px;
      line-height: 28px;
    }
  }
`;
