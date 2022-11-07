import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import userImage from "@assets/userImage.svg";

interface ReviewCardProps {
  imageUrl: string;
  title: string;
  previewText: string;
  user: string;
}

function ReviewCard(props: ReviewCardProps) {
  return (
    <CardContainer whileHover={{ scale: 1.01, opacity: 0.8 }}>
      <CardImage img_src={props.imageUrl} />
      <CardTitle>{props.title}</CardTitle>
      <CardPreview>{props.previewText}</CardPreview>
      <AuthorInfo>
        <img src={userImage} alt="userImg" style={{ marginRight: "3px" }} />
        <div>작성자 : {props.user}</div>
      </AuthorInfo>
    </CardContainer>
  );
}

export default ReviewCard;

const CardContainer = styled(motion.div)`
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
const CardPreview = styled.p`
  color: #717171;
  font-size: 20px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
`;
const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  color: #717171;
  & > div {
    display: flex;
    align-items: center;
  }
`;
