import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import processCount from "@utils/processCount";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface HouseCardProps {
  houseId: number;
  houseImage: string;
  title: string;
  location: string;
  min_price: number;
  max_price: number;
  upload_date: Date;
  author: string;
}

function HouseCard(props: HouseCardProps) {
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => navigate(`/house/${props.houseId}`)}
      whileHover={{ scale: 1.01, opacity: 0.8 }}
    >
      <CardImage img_src={props.houseImage}>
        <CardStatus>입주 가능</CardStatus>
      </CardImage>
      <CardInfoBox>
        <CardTitle>{props.title}</CardTitle>
        <CardInfo>
          <p>위치 : {props.location}</p>
          <p>
            가격 : {processCount(props.min_price)}원 ~{" "}
            {processCount(props.max_price)}원
          </p>
        </CardInfo>
        <CardMetaData>
          <p>업로드 일자 : {dayjs(props.upload_date).format("YYYY.MM.DD")}</p>
          <p>작성자 : {props.author}</p>
        </CardMetaData>
      </CardInfoBox>
    </CardContainer>
  );
}

export default HouseCard;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 400px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
`;
const CardImage = styled.div<{ img_src: string }>`
  position: relative;
  width: 100%;
  height: 220px;
  background-image: url(${(props) => props.img_src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  border-radius: 5px 5px 0 0;
`;
const CardStatus = styled.div`
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
`;
const CardInfoBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  white-space: pre-wrap;
  word-break: break-all;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #717171;
`;
const CardMetaData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #717171;
`;
