import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ReviewCardProps {
  id: number;
  imageUrl: string;
  title: string;
  previewText: string;
  user: string;
}

function ReviewCard(props: ReviewCardProps) {
  const navigate = useNavigate();
  const onCardClick = (id: number) => {
    navigate(`/review/${id}`);
  };
  return (
    <CardContainer
      onClick={() => onCardClick(props.id)}
      whileHover={{ scale: 1.01, opacity: 0.8 }}
    >
      <CardImage img_src={props.imageUrl} />
      <CardInfoBox>
        <CardTitle>{props.title}</CardTitle>
        <CardPreview>{props.previewText}</CardPreview>
        <AuthorInfo>
          <div>작성자 : {props.user}</div>
        </AuthorInfo>
      </CardInfoBox>
    </CardContainer>
  );
}

export default ReviewCard;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 400px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
`;

const CardImage = styled.div<{ img_src: string }>`
  width: 100%;
  height: 370px;
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
const CardPreview = styled.p`
  color: #717171;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
`;
const AuthorInfo = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #717171;
  & > div {
    display: flex;
    align-items: center;
  }
`;
