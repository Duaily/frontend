import React from "react";
import * as S from "./styles";

interface TrendCardProps {
  imageUrl: string;
  title: string;
  previewText: string;
}

function TrendCard(props: TrendCardProps) {
  return (
    <S.CardContainer>
      <S.CardImage img_src={props.imageUrl} />
      <S.CardInfoBox>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardPreview>{props.previewText}</S.CardPreview>
      </S.CardInfoBox>
    </S.CardContainer>
  );
}

export default TrendCard;
