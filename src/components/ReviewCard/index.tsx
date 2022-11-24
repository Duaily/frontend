import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

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
    <S.CardContainer
      onClick={() => onCardClick(props.id)}
      whileHover={{ scale: 1.01, opacity: 0.8 }}
    >
      <S.CardImage img_src={props.imageUrl} />
      <S.CardInfoBox>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardPreview>{props.previewText}</S.CardPreview>
        <S.AuthorInfo>
          <div>작성자 : {props.user}</div>
        </S.AuthorInfo>
      </S.CardInfoBox>
    </S.CardContainer>
  );
}

export default ReviewCard;
