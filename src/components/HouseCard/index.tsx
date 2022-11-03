import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import processCount from "@utils/processCount";

interface HouseCardProps {
  houseImage: string;
  title: string;
  location: string;
  min_price: number;
  max_price: number;
  upload_date: Date;
  author: string;
  status: boolean;
}

function HouseCard(props: HouseCardProps) {
  return (
    <CardContainer>
      <CardImage img_src={props.houseImage} />
      <CardTitle>{props.title}</CardTitle>
      <CardInfoBox>
        <CardStatus>입주가능</CardStatus>
        <CardInfo>
          <p>위치 : {props.location}</p>
          <p>
            가격 : {processCount(props.min_price)}원 ~{" "}
            {processCount(props.max_price)}원
          </p>
          <p>업로드 일자 : {dayjs(props.upload_date).format("YYYY.MM.DD")}</p>
          <p>작성자 : {props.author}</p>
        </CardInfo>
      </CardInfoBox>
    </CardContainer>
  );
}

export default HouseCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 580px;
  height: 625px;
`;
const CardImage = styled.div<{ img_src: string }>`
  width: 100%;
  height: 390px;
  background-image: url(${(props) => props.img_src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`;
const CardTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  white-space: pre-wrap;
  word-break: break-all;
`;
const CardInfoBox = styled.div`
  display: flex;
  height: 115px;
`;
const CardStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 100%;
  margin-right: 30px;
  padding: 28px 16px;
  background-color: ${(props) => props.theme.orange_color};
  color: white;
  font-size: 20px;
  font-weight: 900;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 20px;
  font-weight: bold;
  color: #717171;
`;
