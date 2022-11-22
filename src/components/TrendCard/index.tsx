import React from "react";
import styled from "styled-components";

interface TrendCardProps {
  imageUrl: string;
  title: string;
  previewText: string;
}

function TrendCard(props: TrendCardProps) {
  return (
    <CardContainer>
      <CardImage img_src={props.imageUrl} />
      <CardInfoBox>
        <CardTitle>{props.title}</CardTitle>
        <CardPreview>{props.previewText}</CardPreview>
      </CardInfoBox>
    </CardContainer>
  );
}

export default TrendCard;

const CardContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 350px;
  height: 400px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const CardImage = styled.div<{ img_src: string }>`
  width: 100%;
  height: 220px;
  background-image: url(${(props) => props.img_src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  border-radius: 5px 5px 0 0;
`;
const CardInfoBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  white-space: pre-wrap;
  word-break: break-all;
`;
const CardPreview = styled.p`
  color: #717171;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
`;
