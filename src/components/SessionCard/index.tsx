import React from "react";
import * as S from "./styles";

interface SessionCardProps {
  imageUrl: string;
  title: string;
}

function SessionCard(props: SessionCardProps) {
  return (
    <S.CardContainer>
      <S.CardImage img_src={props.imageUrl} />
      <S.CardInfoBox>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardButton>신청하기</S.CardButton>
      </S.CardInfoBox>
    </S.CardContainer>
  );
}

export default SessionCard;
