import React from "react";
import styled from "styled-components";

interface SessionCardProps {
  imageUrl: string;
  title: string;
}

function SessionCard(props: SessionCardProps) {
  return (
    <CardContainer>
      <CardImage img_src={props.imageUrl} />
      <CardInfoBox>
        <CardTitle>{props.title}</CardTitle>
        <CardButton>신청하기</CardButton>
      </CardInfoBox>
    </CardContainer>
  );
}

export default SessionCard;

const CardContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 430px;
  height: 320px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
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
  border-radius: 20px 20px 0 0;
`;
const CardInfoBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px;
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
const CardButton = styled.button`
  width: 100px;
  align-self: flex-end;
  border: none;
  outline: none;
  background-color: transparent;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
